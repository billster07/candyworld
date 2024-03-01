<script setup>
import { ref, watch } from "vue";
import { useCandyStore } from "/src/store.js";
import { useRouter, useRoute } from "vue-router";
import "bootstrap-icons/font/bootstrap-icons.css";
import BuyButton from "./BuyButton.vue";

const store = useCandyStore();
const productQuanity = ref(1);
const selectedProduct = ref([])
const route = useRoute()

const matchProduct = (key) => {
  store.products.forEach((product) => {
    if (key === product.id) {
      selectedProduct.value = product
    }
  })
}
store.fetchProducts().then((respone) => matchProduct(route.params.productId))

watch(
  () => route.params.productId,
  (newValue) => {
    store.fetchProducts();
    matchProduct(newValue)
  }
);

const onAddToShoppingCart = (product) => {
  const checkIfincluded = false
  store.shoppingCart.forEach((product_) => {
    if (product_.id === product.id) {
      if (product_.quantity) {
        product_.quantity += productQuanity.value
      } else {
        product_.quantity = productQuanity.value
      }
      sessionStorage.setItem("shoppingCart", JSON.stringify(store.shoppingCart))
    }
  })
}

</script>

<template>
  <div class="product">
    <div class="image">
      <img :src="'https://pb.nopatan.com/api/files/02eld6u8qdz3cgq/' +
        selectedProduct.id +
        '/' +
        selectedProduct.image
        " />
    </div>
    <div class="productContent">
      <h1>{{ selectedProduct.productName }}</h1>
      <div class="price-status">
        <p>{{ selectedProduct.price }}:-</p>
        <p><i class="bi bi-circle-fill" variant="success"></i> I lager</p>
      </div>
      <div class="buttons">
        <input class="quantityCounter" min="1" type="number" v-model="productQuanity" />
        <BuyButton @click="onAddToShoppingCart(selectedProduct)" class="buyButton" button-size="lg"
          button-text="Lägg i varukorgen" />
      </div>
      <div class="productDetails">
        <details>
          <summary>Beskrivning</summary>
          <p class="productDescription">{{ selectedProduct.description }}</p>
        </details>
        <details>
          <summary>Näringsinnehåll</summary>
          <p>{{ selectedProduct.nutritional_content }}</p>
        </details>
        <details>
          <summary>Ingredienser</summary>
          <p>{{ selectedProduct.ingredients }}</p>
        </details>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  max-height: 230px;
  width: 188px;
}

.productContent {
  max-width: 375px;
}

.price-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price-status p {
  margin: 20px;
}

.price-status p:nth-child(1) {
  font-size: x-large;
  margin-left: 22px;
}

.price-status p:nth-child(2) {
  font-size: small;
  margin-right: 30px;
}

h1 {
  margin: 30px 20px 0px 20px;
  align-self: flex-start;
}

.productDescription {
  margin: 20px;
}

.productDetails {
  align-self: flex-start;
  margin-left: 20px;
  margin-top: 30px;
}

details p {
  font-size: small;
}

.buttons {
  display: flex;
  margin-bottom: 20px;
}

.quantityCounter {
  border: 3px solid #e7b6e2;
  border-radius: 0.75rem;
  margin-left: 20px;
  width: 15%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.buyButton {
  width: 85%;
  margin: 0 20px 0 10px;
  height: 40px;
  font-size: medium;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  opacity: 1;
}

.bi-circle-fill {
  color: rgb(5, 171, 5);
}

.buyButton:hover {
  background-color: rgba(255, 164, 85, 0.8);
}

@media (min-width: 700px) {
  .product {
    flex-direction: row;
    justify-content: center;
  }

  .image {
    margin-right: 50px;
    margin-top: 50px;
    align-self: flex-start;
  }

  details {
    max-width: 355px;
  }
}
</style>
