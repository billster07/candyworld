<script setup>
import myfooter from './components/Footer.vue'
</script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">Hem</router-link></li>
      <li><router-link :to="'/products/' + $route.params.category">Produkter</router-link></li>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
  <div class="myFooter">
    <myfooter />
  </div>
</template>

<style scoped>

</style>
