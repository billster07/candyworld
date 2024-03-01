<script setup>
import { ref, watch, computed } from "vue";
import { useCandyStore } from "/src/store.js";
import { storeToRefs } from 'pinia'
const store = useCandyStore()
// const { counter } = storeToRefs(store)
const counter = ref(0)
// const amountOfProducts = ref(store.shoppingCart.length)
const amountOfProducts = computed(() => {
  counter.value = 0;
  store.shoppingCart.map((product) => counter.value = counter.value + product.quantity) 
  return counter.value
})
// watch(
//   () => store.shoppingCart.length, (newValue) => {
//     amountOfProducts.value = newValue
//   }
// )
</script>

<template>
  <div class="shoppingCartButton">
    <div class="amountOfProducts" v-if="store.shoppingCart.length > 0">
      <p> {{ amountOfProducts }} </p>
    </div>
    <i class="bi bi-cart" size="lg"></i>
  </div>
</template>

<style scoped>
.shoppingCartButton {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
}

.amountOfProducts {
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 100%;
  position: fixed;
  background-color: #e7b6e2;
  top: 13px;
  right: 13px;
  text-align: center;
  font-size: small;
}

.shoppingCartButton:hover {
  /* background-color: #e7b6e2; */
  background-color: rgba(255, 164, 85, 0.8);
}

i {
  padding: 30px;
  font-size: x-large;
}
</style>
