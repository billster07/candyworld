<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import filterProducts from "../components/filterProducts.vue";
import { useRouter, useRoute } from "vue-router";
import flagLinks from "../components/FlagLinks.vue";

const filterCategory = ref("Alla"),
  router = useRouter(),
  route = useRoute();

router.push({ params: { category: filterCategory.value } });
watch(filterCategory, (choosenCategory) => {
  router.push({ params: { category: choosenCategory } });
});

watch(
  () => route.params.category,
  (newValue) => {
    filterCategory.value = newValue;
  }
);

//Här kontrolleras fönsterstorleken för att visa eller inte visa flagLinks
const showFlagNav = ref();
const updateVisibility = () => {
  showFlagNav.value = window.innerWidth >= 768;
};

onMounted(() => {
  updateVisibility();
  window.addEventListener('resize', updateVisibility);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateVisibility);
});
//

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

    <flagLinks v-if="showFlagNav"/>

    <b-row>
      <b-col>
        <b-dropdown id="dropdown-1" text="Välj Land" variant="" class="button">
          <b-dropdown-item @click="(filterCategory = 'Balkan'), navigateToRoute"
            >Balkan</b-dropdown-item
          >
          <b-dropdown-item @click="(filterCategory = 'Japan'), navigateToRoute"
            >Japan</b-dropdown-item
          >
          <b-dropdown-item @click="(filterCategory = 'Mexico'), navigateToRoute"
            >Mexico</b-dropdown-item
          >
          <b-dropdown-item
            @click="(filterCategory = 'Turkiet'), navigateToRoute"
            >Turkiet</b-dropdown-item
          >
          <b-dropdown-item @click="(filterCategory = 'USA'), navigateToRoute"
            >USA</b-dropdown-item
          >
          <b-dropdown-item
            @click="(filterCategory = 'Storbritannien'), navigateToRoute"
            >Storbritannien</b-dropdown-item
          >
          <BDropdownDivider />
          <b-dropdown-item @click="filterCategory = 'Alla'"
            >Alla produkter</b-dropdown-item
          >
        </b-dropdown>
      </b-col>
    </b-row>
  </b-container>

  <div class="d-flex justify-content-center align-items-center">
    <h2 class="text-center countryName">{{ countryFlags().countryName }}</h2>
    <img
      v-if="filterCategory !== 'Alla' && filterCategory !== ''"
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
