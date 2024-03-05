<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import "bootstrap-icons/font/bootstrap-icons.css";
import myFooter from "../components/Footer.vue";

import flagLinks from "../components/FlagLinks.vue";


const candyPicture1 = ref("candyPicture500.png"),
  candyPicture2 = ref("candyPicture2-500.png");
</script>
<template>
  <div class="flaglinks-home">
    <flagLinks />
  </div>
  <div class="wrapPAndImage1">
    <div class="yellowBox">
      <p class="yellowBoxDescription">
        Här har vi samlat godis och läckerheter från olika delar av världen.
        Upptäck det senaste från TikTok eller hitta din favorit från ditt land,
        vi har något för alla!
      </p>
    </div>
    <div class="photoContainer">
      <img class="candyPhoto" alt="Candy Photo" :src="candyPicture1">
    </div>
  </div>
  <div class="wrapPAndImage2">
    <div class="yellowBox">
      <p class="yellowBoxDescription">
        Utforska en värld av läckerheter, där varje tugga är en resa. Candyworld
        tar dig med på en global smakupplevelse, ett exotiskt godis i taget. Gör
        din smakresa komplett och låt Candyworld vara din guide till spännande
        smaker från alla hörn av världen.
      </p>
      <b-button @click="$router.push('/products/Alla')" class="button" size="lg">Se produkter</b-button>
    </div>
    <div class="photoContainer">
      <img class="candyPhoto" alt="Candy Photo" :src="candyPicture2">
    </div>
  </div>
  
</template>

<style scoped>
.wrapPAndImage1, .wrapPAndImage2, .footerContainer {
  background-color: #ffe67b;
}

.yellowBox {
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.yellowBoxDescription {
  align-self: center;
  margin-bottom: 45px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 40px;
  max-width: 350px;
  text-align: center;
}

.button {
  align-self: center;
  background-color: #e7b6e2;
  border: 0;
  border-radius: 0.75rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 2em;
  padding: 5px 15px 5px 15px;
  width: 8em;
}

.button:hover {
  background-color: rgba(255, 164, 85, 0.8);
}

.photoContainer {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.candyPhoto {
  width: 300px;
}

@media (min-width: 670px) {
  .wrapPAndImage1 {
    display: flex;
    min-height: 400px;
  }

  .wrapPAndImage2 {
    display: flex;
    flex-direction: row-reverse;
    min-height: 400px;
  }

  .yellowBox {
    min-width: 50%;
  }

  .candyPhoto {
    margin: 60px;
    max-height: 300px;
    max-width: 300px;
  }
}
</style>
