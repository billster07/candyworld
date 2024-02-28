<script setup>
import { ref } from 'vue'
import { useCandyStore } from "/src/store.js";
const store = useCandyStore();
</script>

<template>
  <div v-for="product in store.shoppingCart" class="productCard">
    <div class="image" @click="$router.push(`/products/${product.category}/${product.id}`)">
      <img :src="'https://pb.nopatan.com/api/files/02eld6u8qdz3cgq/' +
        product.id +
        '/' +
        product.image
        " />
    </div>
    <div class="productInformation">
      <h3 @click="$router.push(`/products/${product.category}/${product.id}`)">{{ product.productName }}</h3>

      <div class="priceButtonDesign">
        <i class="bi bi-dash-circle"></i>
        <p>{{ product.quantity }}</p>
        <i class="bi bi-plus-circle"></i>
        <p class="price">{{ product.price }}:-</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.productCard {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  padding-top: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 14px;
  width: 90%;
}

.productInformation {
  width: 100vw;
  margin-right: 10px;
  height: 100%;
}

.priceButtonDesign {
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  margin-right: 20px;
  margin-top: auto;
}

img {
  width: 100px;
  max-height: 100px;
}

.image {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-right: 10px;
  width: 30%;
}

.price {
  font-size: large;
}
</style>
