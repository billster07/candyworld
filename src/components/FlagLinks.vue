<script setup>
import filterProducts from "../components/filterProducts.vue";
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";

const router = useRouter();
const route = useRoute();
let zoomedImage = ref(null);
console.log(route.params.category);

const countries = [
  "Balkan",
  "Japan",
  "Mexico",
  "Turkiet",
  "USA",
  "Storbritannien",
];

function navigateToCountry(country) {
  router.push({ params: { category: country } });
}

//En funktion som kontrollerar om en flagga är klickad på och in zoomad eller ej.
//Om en flagga är in zoomad ska den zoomas ut.
//Om en flagga klickas på ska den zoomas in.
const toggleZoom = (country) => {
  if (zoomedImage && zoomedImage.value === country) {
    zoomedImage.value = null;
  } else {
    zoomedImage.value = country;
  }
};
</script>

<template>
  <router-link :to="{ name: 'products', params: { category: 'Alla' } }">
    <h3
      class="all-products"
      @click="
        navigateToCountry('Alla');
        toggleZoom('Alla');
      "
    >
      Alla produkter
    </h3>
  </router-link>
  <div class="flag-container">
    <router-link
      v-for="country in countries"
      :to="{ name: 'products', params: { category: country } }"
    >
      <div class="country-container">
        <img
          :src="`/${country}.png`"
          :alt="country"
          @click="
            () => {
              navigateToCountry(country);
              toggleZoom(country);
            }
          "
          :class="{
            'image-effect': true,
            zoomed: zoomedImage === country,
            nohover: zoomedImage === country,
          }"
        />
        <h4>{{ country }}</h4>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.all-products {
  font-size: 2.4rem;
  font-weight: 500;
  text-align: center;
}

.all-products:hover {
  font-weight: 600;
  text-decoration: underline;
}
.flag-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 3rem;
  margin-top: 3rem;
  text-align: center;
}

.image-effect {
  margin-bottom: 2rem;
  height: 8rem;
}

.image-effect:hover {
  transform: scale(1.2);
  transition: transform 0.2s ease-in-out;
}

.zoomed {
  transform: scale(1.4);
  filter: drop-shadow(4px 4px 5px #dbd96b);
}

.nohover {
  pointer-events: none;
}

@media (max-width: 805px) {
  .flag-container {
    flex-wrap: wrap;
    margin-top: 1rem;
  }
}
</style>
