<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
import moment from "moment";
import 'moment/locale/sv';
import myFooter from '../components/Footer.vue'


moment.locale('sv')

function addDays() {
  let currentDate = moment();
  return currentDate.add(6, "days").format("dddd D MMMM YYYY");
}
const deliveryDate = addDays();
</script>

<template>
  <div class="confirmationContainer">
    <h1>Ditt köp har genomförts! <i class="bi bi-check-circle"></i></h1>

    <div class="confirmationText">
      <h2>Tack för ditt köp!</h2>
      <p>Ditt ordernummer är <b>2348526</b>.</p>
      <p>
        Bekräknat leveransdatum: <b>{{ deliveryDate }} </b>
      </p>
      <p>
        Din orderbekräftelse skickas till
        <b>dinmail@gmail.com</b>
      </p>
      <p>För att ändra i din order, följ instruktionerna i orderbekräftelse.</p>
    </div>
  </div>
  <myFooter />
</template>

<style scoped>
.bi {
  font-size: 40px;
}

.homeButton {
  margin-top: 3rem;
  margin-bottom: 3rem;
  background-color: #e7b6e269;
  color: #000;
  border-color: #000;
  padding-left: 30px;
  padding-right: 30px;
}

.homeButton:hover {
  background-color: rgba(255, 164, 85, 0.8);
  color: #000;
}

.confirmationContainer {
  display: flex columns;
  justify-content: center;
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
}

.confirmationText {
  padding: 10px;
  background-color: #e7b6e269;
}



</style>
