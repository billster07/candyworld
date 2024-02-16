<script setup>
 import {ref} from 'vue'
    const candyPicture1 = ref ("candyPhoto1.png"),
     candyPicture2 = ref ("candyPhoto2.png")
import myfooter from '../components/Footer.vue'
    
</script>
<template>
    <div class="pContainer">
  <p class="introDescription">Här har vi samlat godis och läckerheter från olika delar av världen.
Upptäck det senaste från TikTok eller hitta din favorit från ditt land, vi har något för alla!</p>
</div>
<img class="candyPhoto" alt="Candy Photo" v-bind:src="candyPicture1">
<!-- karusell med bilder läggs in här -->
<div class="yellowBoxMediaQuery">
    <!-- flex wrap för desktop -->
<div class="yellowBox">
<p class="yellowBoxDescription">Utforska en värld av läckerheter, där varje tugga är en resa.
Candyworld tar dig med på en global smakupplevelse, ett exotiskt godis i taget. Gör din smakresa komplett och låt Candyworld vara din guide till spännande smaker från alla hörn av världen. </p>
<b-button class="button" size="lg">Se produkter</b-button>
</div>
<img class="candyPhoto" alt="Candy Photo" v-bind:src="candyPicture2">
</div>
<myfooter/>
</template>

<style scoped>

.pContainer {
    margin-top: 25px;
    margin-bottom: 20px;
}
.introDescription {
  margin-left: 30px;
  margin-right: 30px;
  text-align: center;
}

.candyPhoto {
    max-width: 100%;
}
.yellowBox {
    background-color: #FFE67B;
    display: flex;
   flex-direction: column;
}

.yellowBoxDescription {
    text-align: center;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 40px;
    margin-bottom: 45px;
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

</style>

