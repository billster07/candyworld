<script setup>
import { ref, defineProps } from "vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCandyStore } from "/src/store.js";

const store = useCandyStore();
store.fetchProducts();
const props = defineProps({filterCategory: {type: String}})



</script>

<template>
    <!-- <div class="productContainer">
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
</div> -->

<div class="productContainer">
  <div v-if="props.filterCategory === 'Alla'" class="flex-item">
    <div v-for="product in store.products" class="productCard">
      <div class="image">
        <img :src="'https://pb.nopatan.com/api/files/02eld6u8qdz3cgq/' + product.id + '/' + product.image" />
      </div>
      <div>
        <h3>{{ product.productName }}</h3>
        <p>{{ product.description_sum }}</p>
        <div class="priceButtonDesign">
          <p>{{ product.price }}:-</p>
          <button class="buyButton">KÖP
            <!-- <i class="bi bi-cart"></i> låter denna ligga kvar, påminnelse att vi behöver lägga till ikon -->
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="productCard">
    <div v-for="product in store.products.filter(product => product.category === props.filterCategory)" class="productCard">
      <div class="image">
        <img :src="'https://pb.nopatan.com/api/files/02eld6u8qdz3cgq/' + product.id + '/' + product.image" />
      </div>
      <div>
        <h3>{{ product.productName }}</h3>
        <p>{{ product.description_sum }}</p>
        <div class="priceButtonDesign">
          <p>{{ product.price }}:-</p>
          <button class="buyButton">KÖP
            <!-- <i class="bi bi-cart"></i> låter denna ligga kvar, påminnelse att vi behöver lägga till ikon -->
          </button>
        </div>
      </div>
    </div>
  </div>
</div>


</template>

<style scoped>
.productCard {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding-top: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 14px;
}

.productCard:nth-child(even) {
  background-color: #FFF;;
}

.productCard:nth-child(odd) {
  background-color: #FDEBFB;;
}

.priceButtonDesign {
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  margin-right: 20px;
  /* Jag blir inte klok på detta. Detta är flexboxen som styr och jag säger att det ska ligga flex-end. Varför vill då inte p-elementet, dvs priset inte ligga till höger? Jag har löst det med att lägga padding och annat men det är ju inte optimalt och verkligen responsivt. Tänker att det är en "för nu-lösning". */
}

.priceButtonDesign p {
  /* margin-left:auto; */
  padding-left: 55%;
  /* alltså denna. så vitt jag kan se är detta den som styr placeringen på produktens pris.  */
}

.buyButton {
  background-color: #e7b6e2;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 0.75rem;
  border: 0;
  padding: 5px 15px 5px 15px;
  margin-left: auto;
}


/* .dropdown-item-button {
  background-color: #E7B6E2;
  color: #fff;
  padding: 5px 15px;
} */

img {
  width: 100px;
  max-height: 100px;
  margin: 10px;
}

.image {
  display: flex;
  align-items: center;
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

  .priceButtonDesign p {
  /* margin-left:auto; */
  padding-left: 65%;
}

}

@media (min-width: 700px) {

  .productContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 -5px;
  }

  .productCard {
  width: calc(45% - 10px);
  margin: 10px;
  margin-top: 15px;
  padding-top: 30px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 14px;
  }

  img {
  max-width: 110px;
  height: auto;
  margin-left: 20px;
  }

  .priceButtonDesign p {
  padding-left: 25%;
  }

}
</style>
