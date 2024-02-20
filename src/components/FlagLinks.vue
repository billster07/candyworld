<script setup>
import filterProducts from "../components/filterProducts.vue";
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";

const router = useRouter();
let zoomedImage = ref(null);

const countries = [
  "Balkan",
  "Japan",
  "Mexico",
  "Turkiet",
  "USA",
  "Storbritannien",
];

function navigateToCountry(category) {
  router.push({ params: { category } });
}

const toggleZoom = (country) => {
  if (zoomedImage.value === country) {
    zoomedImage.value = null;
  } else {
    zoomedImage.value = country;
  }
};
</script>

<template>
  <div class="flag-container">
    <div class="country-container" v-for="country in countries" :key="country">
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
      <h3>{{ country }}</h3>
    </div>
  </div>
</template>

<style scoped>
.flag-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 3rem;
  margin-top: 3rem;
  text-align: center;
}

.image-effect {
  margin-bottom: 1.5rem;
}

.image-effect:hover {
  transform: scale(1.2);
  transition: transform 0.2s ease-in-out;
}

.zoomed {
  transform: scale(1.3);
  filter: drop-shadow(4px 4px 5px #dbd96b);
}

.nohover {
  pointer-events: none;
}
</style>
