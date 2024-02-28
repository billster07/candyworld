<script setup>
import { ref, defineProps } from "vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCandyStore } from "/src/store.js";
import BuyButton from "./BuyButton.vue";

const store = useCandyStore();
store.fetchProducts();
const props = defineProps({ filterCategory: { type: String } })

</script>

<template>
  <div class="mainContainer">
    <div class="productContainer">
      <div v-if="props.filterCategory === 'Alla'" class="productCard" v-for="product in store.products">

        <div class="image" @click="$router.push(`/products/${product.category}/${product.id}`)">
          <img :src="'https://pb.nopatan.com/api/files/02eld6u8qdz3cgq/' +
            product.id +
            '/' +
            product.image
            " />
        </div>
        <div class="productInformation">
          <h3 @click="$router.push(`/products/${product.category}/${product.id}`)">{{ product.productName }}</h3>
          <p> {{ product.description_sum.slice(0, 50) }}...</p>

          <div class="priceButtonDesign">
            <p>{{ product.price }}:-</p>
            <BuyButton @click="store.addProduct(product)" button-text="Köp" button-size="sm" />
          </div>
        </div>
      </div>

      <div v-else class="productCard"
        v-for="product in store.products.filter(product => product.category === props.filterCategory)">

        <div class="image" @click="$router.push(`/products/${product.category}/${product.id}`)">
          <img :src="'https://pb.nopatan.com/api/files/02eld6u8qdz3cgq/' +
            product.id +
            '/' +
            product.image
            " />
        </div>
        <div class="productInformation">
          <h3 @click="$router.push(`/products/${product.category}/${product.id}`)">{{ product.productName }}</h3>
          <p> {{ product.description_sum.slice(0, 50) }}...</p>
          <div class="priceButtonDesign">
            <p>{{ product.price }}:-</p>
            <BuyButton @click="store.addProduct(product)" button-text="Köp" button-size="sm" />
          </div>
        </div>


      </div>
    </div>
  </div>
</template>
<style scoped>
.productContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.productCard {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  padding-top: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 14px;
  width: 90%;
}

.productCard:nth-child(odd) {
  background-color: #fdebfb;
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


@media (min-width: 700px) {

  .mainContainer {
    display: flex;
    justify-content: center;
  }

  .productContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 850px;
  }

  .productCard {
    background-color: #fdebfb;
    max-width: 320px;
    height: 200px;
    margin: 15px 20px 0 20px;
  }

  .productInformation {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .priceButtonDesign {
    margin-top: auto;
    margin-bottom: 20px;
  }

  h3 {
    font-size: large;
  }

}
</style>
