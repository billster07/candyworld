<script setup>
import filterProducts from "../components/filterProducts.vue";
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";



const router = useRouter();

const navigateToCountry = (category) => {
  router.push({ params: { category } });
};




</script>
<template>
  <div class="flag-container">
    <img src="/Balkan.png" alt="" @click="navigateToCountry('Balkan')" />
    <img src="/japan.png" alt=""  @click="navigateToCountry('Japan')"/>
    <img src="/Mexico.png" alt=""  @click="navigateToCountry('Mexico')"/>
    <img src="/Turkey.png" alt="" @click="navigateToCountry('Turkiet')"/>
    <img src="/USA.png" alt="" @click="navigateToCountry('USA')"/>
    <img src="/UK.png" alt="" @click="navigateToCountry('Storbritannien')"/>
  </div>


</template>

<style>
.flag-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10px;
}
</style>
