<script setup>
import { useCandyStore } from "/src/store.js";
import myHeader from "../components/Header.vue"
import Favourites from "../components/Favourites.vue"
import myFooter from '../components/Footer.vue'



const store = useCandyStore();
</script>
<template>
  <myHeader headline="MINA FAVORITER" />
  <main class="main-favorite">
    <Favourites />

  </main>
<myFooter />
</template>
<style scoped>



</style>
