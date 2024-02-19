<script setup>
import { useCandyStore } from "/src/store.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const store = useCandyStore();
console.log(store.selectedProduct)
</script>

<template>
  <div class="product">
    <div class="image">
      <img :src="'https://pb.nopatan.com/api/files/02eld6u8qdz3cgq/' +
        store.selectedProduct.id +
        '/' +
        store.selectedProduct.image
        ">
    </div>
    <div class="price-status">
      <p>{{ store.selectedProduct.price }}:-</p>
      <p><i class="bi bi-circle-fill" variant="success"></i> I lager</p>
    </div>
  </div>
</template>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image {
  width: 50%;
}

img {
  width: 100%;
  max-height: auto;
}

/* i {
  color: green;
} */
.price-status {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
</style>
