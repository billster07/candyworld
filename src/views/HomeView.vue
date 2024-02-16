<script setup>
import { ref } from 'vue'
import "bootstrap-icons/font/bootstrap-icons.css";
const candyPicture1 = ref("candyPicture500.png"),
  candyPicture2 = ref("candyPicture2-500.png")


</script>
<template>
  <div class="pContainer">

    <p class="introDescription">Här har vi samlat godis och läckerheter från olika delar av världen.
      Upptäck det senaste från TikTok eller hitta din favorit från ditt land, vi har något för alla!</p>

    <div class="photoContainer">

      <b-img fluid-grow class="candyPhoto" alt="Candy Photo" v-bind:src="candyPicture1"></b-img>
    </div>
  </div>

  <!-- karusell med bilder läggs in här
  <div class="yellowBoxMediaQuery"> </div> -->
  <!-- flex wrap för desktop -->
  <div class="wrapPAndImage">
    <div class="yellowBox">
      <p class="yellowBoxDescription">Utforska en värld av läckerheter, där varje tugga är en resa.
        Candyworld tar dig med på en global smakupplevelse, ett exotiskt godis i taget. Gör din smakresa komplett och låt
        Candyworld vara din guide till spännande smaker från alla hörn av världen. </p>
      <b-button class="button" size="lg">Se produkter</b-button>
    </div>
    <b-img fluid-grow class="candyPhoto2" alt="Candy Photo" v-bind:src="candyPicture2"></b-img>
  </div>
</template>

<style scoped>
.pContainer {
  align-content: center;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-bottom: 20px;
  /* max-width: 614px; */

}

.introDescription {
  align-self: center;
  margin-left: 30px;
  margin-right: 30px;
  text-align: center;
  max-width: 350px;

}



/* .photoContainer {
  display: flex;
  align-items: center;
} */

/* max-width: 700px; */
/* align-self: center; */

.yellowBox {
  background-color: #FFE67B;
  display: flex;
  flex-direction: column;
  align-content: center;
}

.yellowBoxDescription {
  text-align: center;
  align-self: center;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 40px;
  margin-bottom: 45px;
  max-width: 350px;
}

.button {
  background-color: #E7B6E2;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 0.75rem;
  border: 0;
  padding: 5px 15px 5px 15px;
  width: 8em;
  align-self: center;
  margin-bottom: 2em;
}

@media (min-width: 600px) {
  .wrapPAndImage {
    display: flex;
  }

  .yellowBox {
    min-width: 50%;
  }

  .candyPhoto2 {
    min-width: 50%;
  }
}
</style>
