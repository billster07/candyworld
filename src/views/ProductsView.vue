<script setup>
import { ref } from "vue";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCandyStore } from "/src/store.js";

const store = useCandyStore();
store.fetchProducts();
</script>

<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="8">
        <p class="pageDescription">
          Här finner du alla våra produkter. Välj land i menyn för att hitta
          ditt godis.
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-dropdown id="dropdown-1" text="Välj Land" variant="" class="button">
          <b-dropdown-item class="dropdown-item-button">Balkan</b-dropdown-item>
          <b-dropdown-item>Japan</b-dropdown-item>
          <b-dropdown-item>Mexico</b-dropdown-item>
          <b-dropdown-item>Turkiet</b-dropdown-item>
          <b-dropdown-item>USA</b-dropdown-item>
          <b-dropdown-item>Storbritannien</b-dropdown-item>
          <BDropdownDivider />
          <b-dropdown-item>Alla</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
  </b-container>
  <b-container class="productCard" v-for="product in store.products">
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
.pageDescription {
  text-align: center;
}

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
