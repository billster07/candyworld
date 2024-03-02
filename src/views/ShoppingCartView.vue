<script setup>
import { useCandyStore } from "/src/store.js";
import Header from '../components/Header.vue';
import Button from '../components/Button.vue';
import ShoppingCartProducts from '../components/ShoppingCartProducts.vue'


const store = useCandyStore();
</script>

<template>
  <Header headline="DIN VARUKORG" />
  <div class="productContainer">
    <ShoppingCartProducts v-if="store.shoppingCart.length > 0" />
    <div v-else class="emptyCart">
      <p>Din varukorg är tom</p>
      <Button @click="$router.push('/products/Alla')" class="button" button-text="Fortsätt handla" button-size="lg" />
    </div>
  </div>
</template>

<style scoped>
.productContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.emptyCart p {
  text-align: center;
}

.button {
  margin: 0;
  width: 80vw;
}
</style>
