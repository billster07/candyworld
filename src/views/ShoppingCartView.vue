<script setup>
import { useCandyStore } from "/src/store.js";
import { computed } from "vue";
import Header from '../components/Header.vue';
import ButtonComponent from '../components/ButtonComponent.vue';
import ShoppingCartProducts from '../components/ShoppingCartProducts.vue'
import myFooter from "../components/Footer.vue";

const store = useCandyStore();
const totalProductSum = computed(() => store.totalSum());
</script>

<template>
  <Header headline="DIN VARUKORG" />
  <main>
    <div class="productContainer">
      <ShoppingCartProducts v-if="store.shoppingCart.length > 0" />
      <div v-else class="emptyCart">
        <p>Din varukorg är tom</p>
        <ButtonComponent @click="$router.push('/products/Alla')" class="button" button-text="Fortsätt handla"
          button-size="lg" />
      </div>
    </div>
  </main>
  <myFooter />
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
  width: 350px;
}
</style>
