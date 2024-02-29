<script setup>

import { useRouter } from "vue-router";
const router = useRouter();

function navigateToHome() {
  router.push('./views/HomeView')
}


</script>

<template>
<div class="confirmationContainer">
  <h1>Ditt köp har genomförts!</h1>
  <i class="bi bi-check-circle"></i>
  <div class="confirmationText">
    <h2> Tack för ditt köp!</h2>
    <p>Ditt ordernummer är <b>2348526</b>.</p>
    <p>Beräknad leveranstid <b> Måndag 17 Februari (moments). </b></p>
    <p>Din orderbekräftelse skickas till <b>sara@gmail.com</b> textinterpolering</p>
    <p>För att ändra i din order, följ instruktionerna i orderbekräftelse.</p>
  </div>
  <b-button type="text" variant="primary" class="homeButton" v-on:click="navigateToHome">Till Startsidan</b-button>
</div>
</template>

<style scoped>

.homeButton {
  margin-top: 3rem;
  margin-bottom: 3rem;
  background-color: #e7b6e269;
  color: #000;
  border-color: #000;
  padding-left: 30px;
  padding-right: 30px;
}

.homeButton:hover{
  background-color:rgba(255, 164, 85, 0.8);
}

.confirmationContainer{
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
