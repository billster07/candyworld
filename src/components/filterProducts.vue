<script setup>
import { ref, defineProps } from "vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCandyStore } from "/src/store.js";

const store = useCandyStore();
store.fetchProducts();
const props = defineProps({ filterCategory: { type: String } })

</script>

<!-- <template>
  <div class="d-flex p-2 flex-wrap">
    <b-container
      @click="store.matchProduct(product.id), $router.push(`/products/${filterCategory}/${store.selectedProduct.productName}`)"
      v-if="props.filterCategory === 'Alla'" class="productCard" v-for="product in store.products">
      <b-row align-v="center">
        <b-col class="image">
          <img :src="'https://pb.nopatan.com/api/files/02eld6u8qdz3cgq/' +
            product.id +
            '/' +
            product.image
            " />
        </b-col>
        <b-col cols="8">
          <h3>{{ product.productName }}</h3>
          <p> {{ product.description_sum }}</p>
          <div class="priceButtonDesign">
            <p>{{ product.price }}:-</p>
            <b-button class="button" size="sm">KÖP <i class="bi bi-cart"></i></b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container
      @click="store.matchProduct(product.id), $router.push(`/products/${filterCategory}/${store.selectedProduct.productName}`)"
      v-else class="productCard"
      v-for="product in store.products.filter(product => product.category === props.filterCategory)">
      <b-row align-v="center">
        <b-col class="image">
          <img :src="'https://pb.nopatan.com/api/files/02eld6u8qdz3cgq/' +
            product.id +
            '/' +
            product.image
            " />
        </b-col>
        <b-col cols="8">
          <h3>{{ product.productName }}</h3>
          <p> {{ product.description_sum }}</p>
          <div class="priceButtonDesign">
            <p>{{ product.price }}:-</p>
            <b-button class="button" size="sm">KÖP<i class="bi bi-cart"></i></b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template> -->

<template>
  <div class="productContainer">
    <div
      @click="store.matchProduct(product.id), $router.push(`/products/${filterCategory}/${store.selectedProduct.productName}`)"
      v-if="props.filterCategory === 'Alla'" class="productCard" v-for="product in store.products">

      <div class="image">
        <img :src="'https://pb.nopatan.com/api/files/02eld6u8qdz3cgq/' +
          product.id +
          '/' +
          product.image
          " />
      </div>
      <div class="productInformation">
        <h3>{{ product.productName }}</h3>
        <p> {{ product.description_sum }}</p>
        <div class="priceButtonDesign">
          <p>{{ product.price }}:-</p>
          <b-button class="button" size="sm">KÖP <i class="bi bi-cart"></i></b-button>
        </div>
      </div>
    </div>

    <div
      @click="store.matchProduct(product.id), $router.push(`/products/${filterCategory}/${store.selectedProduct.productName}`)"
      v-else class="productCard"
      v-for="product in store.products.filter(product => product.category === props.filterCategory)">

      <div class="image">
        <img :src="'https://pb.nopatan.com/api/files/02eld6u8qdz3cgq/' +
          product.id +
          '/' +
          product.image
          " />
      </div>
      <div class="productInformation">
        <h3>{{ product.productName }}</h3>
        <p> {{ product.description_sum }}</p>
        <div class="priceButtonDesign">
          <p>{{ product.price }}:-</p>
          <b-button class="button" size="sm">KÖP<i class="bi bi-cart"></i></b-button>
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
  max-width: 350px;
  margin-right: 10px;
}

.button {
  background-color: #e7b6e2;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 0.75rem;
  border: 0;
  padding: 5px 15px 5px 15px;
}

/* .dropdown-item-button {
  background-color: #E7B6E2;
  color: #fff;
  padding: 5px 15px;
} */

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

.priceButtonDesign {
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  margin-right: 20px;
}

.priceButtonDesign p {
  margin-right: 25px;
}

/* @media (min-width: 500px) and (max-width: 699px) {

  .productCard {
    margin-top: 15px;
    padding-top: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 16px;
  }

  img {
    max-width: 120px;
    max-height: 120px;
    margin-left: 15px;
  }

} */

@media (min-width: 700px) {

  .productContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .productCard {
    width: 40%
  }

  img {
    width: auto
  }

  /* testade att lägga en <div class= "productContainer"> runt hela innehållet och göra det till en flexbox, men verkar som att bootstrap? overridar det på nåt sätt? */

  /* .productCard { */
  /* width: 50%; */
  /* detta borde vara det som krävs för att 2 kort läggs sida vid sida i flexboxen. funkar ej?  */
  /* margin-top: 15px;
    padding-top: 30px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 17px;
  }

  img {
    width: 120px;
    height: 120px;
    margin-left: 20px;
  } */



}
</style>
