<script setup>
import { ref, computed } from "vue";
import { useCandyStore } from "/src/store.js";

const store = useCandyStore();

const amountOfProducts = computed(() => {
  let counter = 0;
  store.shoppingCart.map((product) => (counter += product.quantity));
  return counter;
});

</script>

<template>
  <div class="shoppingCartButton">
    <div class="amountOfProducts" v-if="store.shoppingCart.length > 0">
      <p>{{ amountOfProducts }}</p>
    </div>
    <i class="bi bi-cart" size="lg"></i>
  </div>
</template>

<style scoped>
.shoppingCartButton {
  cursor: pointer;
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
  background-color: rgba(255, 164, 85, 0.8);
}

i {
  padding: 30px;
  font-size: x-large;
}

@media (min-width: 830px) {
  .shoppingCartButton {
    background-color: rgba(255, 164, 85, 0.4);
  }
}
</style>
