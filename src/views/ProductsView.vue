<script setup>
import { ref } from "vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import filterProducts from "../components/filterProducts.vue";

const filterCategory = ref("alla");
const selectCountry = ref("");

function countryFlags() {
  let imagePath = "";
  let countryName = "";
  switch (filterCategory.value) {
    case "Balkan":
      imagePath = "Balkan.png";
      countryName = "Balkan";
      break;

    case "Japan":
      imagePath = "japan.png";
      countryName = "Japan";
      break;

    case "Mexico":
      imagePath = "Mexico.png";
      countryName = "Mexico";
      break;
    case "Turkiet":
      imagePath = "Turkey.png";
      countryName = "Turkiet";
      break;
    case "Storbritannien":
      imagePath = "UK.png";
      countryName = "Storbritannien";
      break;
    case "USA":
      imagePath = "USA.png";
      countryName = "USA";
      break;

    default:
      countryName = "Alla produkter";
  }
  return { imagePath, countryName };
}

countryFlags();
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
          <b-dropdown-item @click="filterCategory = 'Balkan'"
            >Balkan</b-dropdown-item
          >
          <b-dropdown-item @click="filterCategory = 'Japan'"
            >Japan</b-dropdown-item
          >
          <b-dropdown-item @click="filterCategory = 'Mexico'"
            >Mexico</b-dropdown-item
          >
          <b-dropdown-item @click="filterCategory = 'Turkiet'"
            >Turkiet</b-dropdown-item
          >
          <b-dropdown-item @click="filterCategory = 'USA'">USA</b-dropdown-item>
          <b-dropdown-item @click="filterCategory = 'Storbritannien'"
            >Storbritannien</b-dropdown-item
          >
          <BDropdownDivider />
          <b-dropdown-item @click="filterCategory = 'alla'"
            >Alla produkter</b-dropdown-item
          >
        </b-dropdown>
      </b-col>
    </b-row>
  </b-container>

  <div class="d-flex justify-content-center align-items-center">
    <h2 class="text-center countryName">{{ countryFlags().countryName }}</h2>
    <img
      v-if="filterCategory !== 'alla' && filterCategory !== ''"
      :src="countryFlags().imagePath"
      alt=""
      class="flagImage"
    />
  </div>
  <filter-products :filter-category="filterCategory" />
</template>

<style scoped>
.pageDescription {
  text-align: center;
}
.button {
  background-color: #e7b6e2;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 0.75rem;
  border: 0;
  padding: 5px 15px 5px 15px;
}

.countryName {
  margin-right: 20px;
  font-weight: 600;
}

.flagImage {
  width: 5rem;
  height: 5rem;
}

@media (min-width: 800px) {
  .flagImage {
    width: 6rem;
    height: 6rem;
  }
}
</style>
