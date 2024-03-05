<script setup>
import { ref } from "vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useRouter } from "vue-router";
import { useCandyStore } from "/src/store.js";

//Hämtar totalSum funktionen från pinia
const store = useCandyStore();
const totalProductSum = store.totalSum();
const totalSum = totalProductSum + 59;
const router = useRouter();

const giftCardSucess = ref(false);
const giftCardFailed = ref(false);
const swishSucess = ref(false);
const swishFailed = ref(false);
const cardPaymentSucess = ref(false);

const visibleAdress = ref(false);
const visibleShipping = ref(false);
const visiblePayment = ref(false);
const selected = ref("");
const selectedPayment = ref("");
const loading = ref(false);
const loadingSwish = ref(false);

const showError1 = ref(true);
const showError2 = ref(true);

const nameList = [
  "Förnamn",
  "Efternamn",
  "Telefonnummer",
  "Email",
  "Adress",
  "Postkod",
  "Stad",
];

const styleList = ["text", "text", "tel", "email", "text", "number", "text"];
let type = ref("");

function completePayment (){
  if(handleSubmit()) {navigateToNewPage()}
}

function onSubmit(event) {
  event.preventDefault();
}
//Leder vidare till bekräftelsesida
function navigateToNewPage() {
  router.push("/Confirmation");
}
//Hanterar icke ifyllt formulär
function handleSubmit() {
  console.log("Testar funktionen");
    if (!selected.value) {
        showError1.value = true;
        return false;
      }

      if (!selectedPayment.value) {
        showError2.value = true;
        return false;
      }
      return true;
}

//Kontrollerar längden på vissa input fält
function inputRules() {
  const maxCcvLength = 3;
  const maxCreditNumber = 16;
  const maxMonthLength = 2;
  const maxYearLength = 4;
  if (ccv.value.length > maxCcvLength) {
    ccv.value = ccv.value.slice(0, maxCcvLength);
  }

  if (cardNumber.value.length > maxCreditNumber) {
    cardNumber.value = cardNumber.value.slice(0, maxCreditNumber);
  }

  if (expirationDateMonth.value.length > maxMonthLength) {
    expirationDateMonth.value = expirationDateMonth.value.slice(
      0,
      maxMonthLength
    );
  }

  if (expirationDateYear.value.length > maxYearLength) {
    expirationDateYear.value = expirationDateYear.value.slice(0, maxYearLength);
  }
}

// Kontrollerar om en presentkod är ifylld eller inte.
function giftCardButton() {
  if (giftCard.value.length === 0) {
    giftCardFailed.value = true;
    giftCardSucess.value = false;
  } else {
    giftCardSucess.value = true;
    giftCardFailed.value = false;
  }
}

// Kontrollerar om telefonnummer är ifylld i swishformuläret. Tar fram en "sucess"-ruta efter 5 sekunder vid swishbetalning
//Sätter igång en visuell "loading"
function swishPayment() {
  if (swishNumber.value.length === 0 || swishNumber.value.length < 7) {
    swishFailed.value = true;
    swishSucess.value = false;
  } else {
    loadingSwish.value = true;
    (swishFailed.value = false),
      setTimeout(() => {
        swishSucess.value = true;
        loadingSwish.value = false;
      }, 5000);
  }
}

// Tar fram en "sucess"-ruta efter 5 sekunder vid kortbetalning och sätter igång visuell "loading"
function cardPayment() {
  loading.value = true;
  setTimeout(() => {
    cardPaymentSucess.value = true;
    loading.value = false;
  }, 5000);
}
</script>

<template>
  <b-form @submit="onSubmit" class="paymentform text-center">
    <!--Leveransadress-->
    <b-button
      class="collapsebutton"
      :class="visibleAdress ? null : 'collapsed'"
      :aria-expanded="visibleAdress ? 'true' : 'false'"
      aria-controls="collapse-1"
      @click="visibleAdress = !visibleAdress"
    >
      <!-- Ska be om handledning på måndag. Hur löser man BFormInput/BFormInvalidFeedback när v-for används? -->
      <i class="bi bi-geo-alt"></i> Leveransadress
    </b-button>
    <b-collapse id="collapse-1" v-model="visibleAdress" class="mt-2">
      <b-container fluid class="adress-info card">
        <div>
          <b-form-group>
            <b-row class="my-1" v-for="(name, index) in nameList" :key="index">
              <b-col sm="3">
                <label :for="`type-${index}`"
                  ><code>{{ name }}</code
                  >:</label
                >
              </b-col>
              <b-col sm="9">
                <b-form-input
                  :id="`type-${index}`"
                  :type="styleList[index]"
                ></b-form-input>
              </b-col>
            </b-row>
          </b-form-group>
        </div>
      </b-container>
    </b-collapse>

    <!--Leveransmetod-->
    <div>
      <b-button
        class="collapsebutton"
        :class="visibleShipping ? null : 'collapsed'"
        :aria-expanded="visibleShipping ? 'true' : 'false'"
        aria-controls="collapse-2"
        @click="visibleShipping = !visibleShipping"
      >
        <i class="bi bi-truck"></i> Leveransmetod
        <div class="mt-3">
          {{ selected }}
        </div>
      </b-button>
      <b-collapse id="collapse-2" v-model="visibleShipping" class="mt-2">
        <b-card>
          <b-form-group name="shipping-radio">
            <b-form-radio
              v-model="selected"
              name="shipping-radio"
              value="Levereras till paketbox"
            >
              Levereras till paketbox
              <div class="shippingText">Onsdag - Torsdag</div></b-form-radio
            >
            <hr />
            <b-form-radio
              v-model="selected"
              name="shipping-radio"
              value="Hemleverans till brevlåda"
            >
              Hemleverans brevlåda
              <div class="shippingText">Onsdag - Torsdag</div>
            </b-form-radio>
            <hr />
            <b-form-radio
              v-model="selected"
              name="shipping-radio"
              value="Leverans till ombud"
            >
              Leverans till ombud
              <div class="shippingText">Torsdag - Fredag (14.00-16.00)</div>
            </b-form-radio>
            <!-- <div v-if="!selected" class="alert alert-danger mt-2" role="alert">
              Vänligen välj en leveransmetod.
            </div> -->
            <div v-if="!selected" class="alert alert-danger mt-2" role="alert">
              Vänligen välj en leveransmetod.
            </div>
          </b-form-group>
        </b-card>
      </b-collapse>
    </div>

    <!--Betalningsmetod-->

    <div>
      <b-button
        class="collapsebutton"
        :class="visiblePayment ? null : 'collapsed'"
        :aria-expanded="visiblePayment ? 'true' : 'false'"
        aria-controls="collapse-3"
        @click="visiblePayment = !visiblePayment"
      >
        <i class="bi bi-credit-card"></i> Betalsätt
        <div class="mt-3">
          {{ selectedPayment }}
        </div>
      </b-button>
      <b-collapse id="collapse-3" v-model="visiblePayment" class="mt-2">
        <b-card>
          <b-form-group name="payment-radio">
            <b-form-radio
              v-model="selectedPayment"
              name="payment-radio"
              value="Swish"
              class="radio-labels"
            >
              Swish</b-form-radio
            >
            <div v-show="selectedPayment === 'Swish'">
              <label for="swishNumber" id="swishLabel">Telefonnummer:</label>
              <div>
                <input
                  type="number"
                  placeholder="+46"
                  class="countryCode"
                  disabled
                />
                <input
                  type="number"
                  placeholder="Telefonnummer"
                  id="swishNumber"
                />
              </div>
              <button @click="swishPayment" id="swishButton">
                Betala med swish
              </button>
              <div v-show="loadingSwish" class="loader"></div>
              <div
                v-show="swishSucess"
                class="alert alert-success"
                role="alert"
              >
                Köp genomfört!
              </div>
              <div v-show="swishFailed" class="alert alert-danger" role="alert">
                Ogiltigt telefonnummer!
              </div>
            </div>
            <hr />

            <b-form-radio
              v-model="selectedPayment"
              name="payment-radio"
              value="Kortbetalning"
            >
              Kortbetalning
            </b-form-radio>
            <div
              v-show="selectedPayment === 'Kortbetalning'"
              class="selectedPayment"
            >
              <label for="cardName">Namn på kort:</label>
              <input type="text" id="cardName" placeholder="Namn på kort" />

              <label for="cardNumber">Kortnummer:</label>
              <input
                type="number"
                id="cardNumber"
                @input="inputRules"
                placeholder="Kortnummer"
              />

              <label for="ccv">CCV:</label>
              <input
                type="number"
                id="ccv"
                @input="inputRules"
                placeholder="CCV"
              />

              <label for="expirationDate" id="expirationDateLabel"
                >Expirations datum:
                <div>
                  <input
                    type="number"
                    class="expirationDateMonth"
                    id="expirationDate"
                    placeholder="Månad"
                    @input="inputRules"
                  />
                  <input
                    type="number"
                    id="expirationDateYear"
                    placeholder="År"
                    @input="inputRules"
                  />
                </div>
              </label>

              <button @click="cardPayment" id="paymentButton">
                Starta BankID
              </button>
              <div v-show="loading" class="loader"></div>

              <div
                v-show="cardPaymentSucess"
                class="alert alert-success"
                role="alert"
              >
                Köp genomfört!
              </div>
            </div>
            <hr />
            <b-form-radio
              v-model="selectedPayment"
              name="payment-radio"
              value="Presentkort"
            >
              Presentkort</b-form-radio
            >
            <div
              v-show="selectedPayment === 'Presentkort'"
              class="selectedPayment"
            >
              <label for="giftCard">Presentkod</label>
              <input type="text" id="giftCard" placeholder="Presentkod" />
              <button @click="giftCardButton" id="giftcardButton">
                Lös in
              </button>
              <div
                v-show="giftCardSucess"
                class="alert alert-success"
                role="alert"
              >
                Giltigt presentkort!
              </div>
              <div
                v-show="giftCardFailed"
                class="alert alert-danger"
                role="alert"
              >
                Ogiltigt presentkort!
              </div>
            </div>
            <!-- <div
              v-if="!selectedPayment"
              class="alert alert-danger mt-2"
              role="alert"
            >
              Vänligen välj en betalningsmetod.
            </div> -->
            <div v-if="!selectedPayment" class="alert alert-danger mt-2" role="alert">
              Vänligen välj en betalningsmetod.
            </div>
          </b-form-group>
        </b-card>
      </b-collapse>
    </div>

    <div class="billingPriceContainer">
      <div class="billingItem">
        <p><b>Din order:</b></p>
      </div>
      <div class="billingItem">
        <p>Produktkostnad:</p>
        <p>{{ totalProductSum }} kr</p>
      </div>
      <div class="billingItem">
        <p>Fraktkostnad:</p>
        <p>59 kr</p>
      </div>
      <div class="billingItem" id="totalprice">
        <p>Total:</p>
        <p>{{ totalSum }} kr</p>
      </div>
    </div>

    <!--Tagit bort type="submit"-->
    <b-button
      variant="primary"
      class="submit-shipping"
      v-on:click="completePayment"
      >Slutför beställning</b-button>
      <!-- // console.log(this.validFormPart1); console.log(this.validFormPart2)
      // ;if(this.validFormPart1 === true && this.validFormPart2===true) -->
  </b-form>
</template>

<style scoped>
code {
  color: black;
  font-family: roboto, sans-serif;
  font-size: 14px;
  font-weight: bold;
}

.loader {
  width: 120px;
  height: 20px;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  background: repeating-linear-gradient(135deg, #f03355 0 10px, #ffa516 0 20px)
      0/0% no-repeat,
    repeating-linear-gradient(135deg, #ddd 0 10px, #eee 0 20px) 0/100%;
  animation: l3 2s infinite;
}
@keyframes l3 {
  100% {
    background-size: 100%;
  }
}

.shippingText {
  font-weight: 500;
}

.collapsebutton {
  width: 80%;
  height: 9rem;
  background-color: #e7b6e269;
  color: black;
  font-size: 1.2rem;
  max-width: 800px;
  margin-top: 3rem;
  margin-bottom: 0.5rem;
  border: #000 solid 2px;
}

.submit-shipping {
  margin-top: 3rem;
  margin-bottom: 3rem;
  background-color: #e7b6e269;
  color: #000;
  border-color: #000;
}
.submit-shipping:hover,
.collapsebutton:hover {
  background-color: rgba(255, 164, 85, 0.8);
}

.adress-info {
  max-width: 800px;
  color: #000;
}

.card {
  max-width: 800px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

/* "Din order"-boxen */
.billingPriceContainer {
  display: flex;
  flex-direction: column;
  background-color: #e7b6e269;
  width: 80%;
  max-width: 800px;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border: #000 solid 2px;
}

.billingItem {
  display: flex;
  justify-content: space-between;
}

.billingItem p {
  margin: 0;
}

.form-check {
  margin-bottom: 20px;
  margin-top: 10px;
  font-weight: 600;
}

#totalprice {
  margin-top: 20px;
  font-weight: 600;
}

/*Stilsättning för betalsätt*/
.selectedPayment {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/*Swish-betalning*/
.countryCode {
  width: 50px;
  text-align: center;
}

#swishLabel {
  margin-bottom: 10px;
}

label {
  margin-bottom: 8px;
}

#swishButton {
  width: 200px;
}

/*Knappar*/

#swishButton,
#paymentButton,
#giftcardButton {
  margin-top: 30px;
  margin-bottom: 20px;
  height: 40px;
  background-color: #e7b6e269;
  color: black;
  font-size: 1rem;
  border: black solid 1px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 0.75rem;
}

/*Kortbetalning*/

#paymentButton {
  width: 160px;
}

#cardName,
#cardNumber {
  width: 80%;
  max-width: 25rem;
  margin-bottom: 10px;
}

#ccv {
  width: 6rem;
  margin-bottom: 10px;
}
.expirationDateMonth {
  width: 5rem;
  max-width: 80%;
}

#expirationDateYear {
  width: 7rem;
  max-width: 80%;
}

#expirationDateLabel {
  margin-bottom: 10px;
}

/*Presentkort betalning*/
#giftcardButton {
  width: 100px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
