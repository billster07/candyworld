<script setup>
import { ref, watch, computed } from 'vue'
import { useCandyStore } from "/src/store.js";
const store = useCandyStore();

watch(
  store.shoppingCart, (shoppingCart) => {
    sessionStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
  }
)

const onClickPlus = (product) => {
  store.shoppingCart.forEach((product_) => {
    if (product_.id === product.id) {
      product_.quantity++
    }
  })
}
const onClickSubtract = (product, key) => {
  if (key === 0 && product.quantity === 1) {
    store.shoppingCart.shift()
  } else if (product.quantity === 1) {
    store.shoppingCart.splice(key, key)
  } else {
    store.shoppingCart.forEach((product_) => {
      if (product_.id === product.id) {
        product_.quantity--
      }
    })
  }
}
</script>

<template>
  <div v-for="(product, key) in store.shoppingCart" class="productCard">
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
        <i @click="onClickSubtract(product, key)" class="bi bi-dash-circle"></i>
        <p class="productQuantity">{{ product.quantity }}</p>
        <i @click="onClickPlus(product)" class="bi bi-plus-circle"></i>
        <p class="price">{{ (Math.round((product.price * product.quantity) * 100) / 100) }}:-</p>
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
  height: 130px;
}

.productInformation {
  width: 100vw;
  margin-right: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
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

.priceButtonDesign i {
  font-size: medium;
}

.productQuantity {
  font-size: medium;
  margin: 0 5px 0 5px;
}

.price {
  font-size: large;
  width: 70px;
  text-align: end;
}
</style>
