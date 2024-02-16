<script setup>
import { ref, defineProps } from "vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCandyStore } from "/src/store.js";

const store = useCandyStore();
store.fetchProducts();
const props = defineProps({filterCategory: {type: String}})

</script>

<template>
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
            >KÖP <i class="bi bi-cart"></i
          ></b-button>
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
            >KÖP <i class="bi bi-cart"></i
          ></b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.productCard {
  margin-top: 15px;
  padding-top: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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
</style>