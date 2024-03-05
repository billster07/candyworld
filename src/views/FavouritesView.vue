<script setup>
import { useCandyStore } from "/src/store.js";
import myHeader from "../components/Header.vue"
import Favourites from "../components/Favourites.vue"


const store = useCandyStore();
</script>
<template>
  <myHeader headline="MINA FAVORITER" />
  <main class="main-favorite">
    <Favourites />

  </main>

</template>

<style scoped>



</style>
