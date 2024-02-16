<script setup>

</script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">Hem</router-link></li>
      <li><router-link :to="'/products/' + $route.params.category">Produkter</router-link></li>
      <li><router-link to="/product">Produkt</router-link></li>


    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
