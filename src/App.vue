<script setup>
import myfooter from './components/Footer.vue'
</script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">Hem</router-link></li>
      <li><router-link to="/products">Produkter</router-link></li>
      <li><router-link to="/product">Produkt</router-link></li>


    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
  <myfooter />
</template>

<style scoped>
</style>
