<script setup>
import { ref, defineProps } from "vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCandyStore } from "/src/store.js";

const store = useCandyStore();
store.fetchProducts();
const props = defineProps({filterCategory: {type: String}})



</script>

<template>
  <div class="productContainer">
    <b-container v-if="props.filterCategory === 'Alla'" class="productCard" v-for="product in store.products">
    <b-row align-v="center">
      <b-col class="image">
        <img
          :src="
            'https://pb.nopatan.com/api/files/02eld6u8qdz3cgq/' +
            product.id +
            '/' +
            product.image
          "
        />
      </b-col>
      <b-col cols="8">
        <h3>{{ product.productName }}</h3>
        <p> {{ product.description_sum }}</p>
        <div class="priceButtonDesign">
          <p>{{ product.price }}:-</p>
          <b-button class="button" size="sm"
            >KÖP <i class="bi bi-cart"></i></b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
    <b-container v-else class="productCard" v-for="product in store.products.filter(product => product.category === props.filterCategory)">
    <b-row align-v="center">
      <b-col class="image">
        <img
          :src="
            'https://pb.nopatan.com/api/files/02eld6u8qdz3cgq/' +
            product.id +
            '/' +
            product.image
          "
        />
      </b-col>
      <b-col cols="8">
        <h3>{{ product.productName }}</h3>
        <p> {{ product.description_sum }}</p>
        <div class="priceButtonDesign">
          <p>{{ product.price }}:-</p>
          <b-button class="button" size="sm"
            >KÖP<i class="bi bi-cart"></i
          ></b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<style scoped>
.productCard {
  margin-top: 15px;
  padding-top: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 14px;
}


.productCard:nth-child(odd) {
  background-color: #fdebfb;
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

@media (min-width: 500px) and (max-width: 699px) {

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

}

@media (min-width: 700px) {

  /* .productContainer {
    display: flex;
    flex-wrap: wrap;
  } */
  /* testade att lägga en <div class= "productContainer"> runt hela innehållet och göra det till en flexbox, men verkar som att bootstrap? overridar det på nåt sätt? */

  .productCard {
  /* width: 50%; */
   /* detta borde vara det som krävs för att 2 kort läggs sida vid sida i flexboxen. funkar ej?  */
  margin-top: 15px;
  padding-top: 30px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 17px;
  }
  img {
  width: 120px;
  height: 120px;
  margin-left: 20px;
  }



}
</style>
