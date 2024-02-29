<script setup>
import { ref } from "vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useRouter } from "vue-router";

const router = useRouter();
//Skapa egen funktion för visible
let visibleAdress = ref(false);
let visibleShipping = ref(false);
let visiblePayment = ref(false);
const selected = ref("");
const selectedPayment = ref("");

const nameList = [
  "Förnamn",
  "Efternamn",
  "Telefonnummer",
  "Email",
  "Adress",
  "Postkod",
  "Stad",
];

const styleList = ["text", "text", "tel", "email", "text", "tel", "text"];
let type = ref("");

function onSubmit(event) {
  event.preventDefault();
}

function navigateToNewPage() {
  router.push('/ConfirmationView')
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
          <b-form-group v-slot="{ ariaDescribedby }">
            <b-form-radio
              v-model="selected"
              :aria-describedby="ariaDescribedby"
              name="some-radios"
              value="Levereras till paketbox"
            >
              <b>Levereras till paketbox</b> Onsdag - Torsdag</b-form-radio
            >
            <hr />
            <b-form-radio
              v-model="selected"
              :aria-describedby="ariaDescribedby"
              name="some-radios"
              value="Hemleverans till brevlåda"
            >
              <b>Hemleverans brevlåda</b> Onsdag - Torsdag
            </b-form-radio>
            <hr />
            <b-form-radio
              v-model="selected"
              :aria-describedby="ariaDescribedby"
              name="some-radios"
              value="Leverans till ombud"
            >
              <b>Leverans till ombud</b> Torsdag - Fredag
              (14.00-16.00)</b-form-radio
            >
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
          <b-form-group v-slot="{ ariaDescribedby }">
            <b-form-radio
              v-model="selectedPayment"
              :aria-describedby="ariaDescribedby"
              name="some-radios"
              value="Swish"
            >
              Swish</b-form-radio
            >
            <hr />
            <b-form-radio
              v-model="selectedPayment"
              :aria-describedby="ariaDescribedby"
              name="some-radios"
              value="Kortbetalning"
            >
              Kortbetalning
            </b-form-radio>
            <hr />
            <b-form-radio
              v-model="selectedPayment"
              :aria-describedby="ariaDescribedby"
              name="some-radios"
              value="Presentkort"
            >
              Presentkort</b-form-radio
            >
          </b-form-group>
        </b-card>
      </b-collapse>
    </div>
    <b-button type="submit" variant="primary" class="submit-shipping" v-on:click="navigateToNewPage">Genomför Köp</b-button
    >
  </b-form>
</template>

<style scoped>
.collapsebutton {
  width: 80%;
  height: 9rem;
  background-color: #e7b6e269;
  color: black;
  font-size: 1.2rem;
  max-width: 800px;
  margin-top: 3rem;
  margin-bottom: 0.5rem;
}

/* .form-control{} */

.submit-shipping {
  margin-top: 3rem;
  margin-bottom: 3rem;
  background-color: #e7b6e269;
  color: #000;
  border-color: #000;
}
.submit-shipping:hover, .collapsebutton:hover{
  background-color:rgba(255, 164, 85, 0.8);
}

.adress-info {
  max-width: 800px;
}

.card {
  max-width: 800px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
</style>
