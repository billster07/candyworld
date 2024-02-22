<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import filterProducts from "../components/filterProducts.vue";
import { useRouter, useRoute } from "vue-router";
import flagLinks from "../components/FlagLinks.vue";
import myFooter from "../components/Footer.vue"
import myHeader from "../components/Header.vue"


// const headline = 'PRODUKTER'

//OBS! Kan det vara denna delen som ställer till navigationen på flaggorna från "HomeView"?

const filterCategory = ref("Alla"),
  router = useRouter(),
  route = useRoute();

  if (route.params.category) {
    filterCategory.value = route.params.category
}

//OBS! Om denna koden tas bort så löser detta problemet med att "FlagLinks.vue" komponenten
//- ger fel adressparametervärden när man navigerar från "HomeView"
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
  showFlagNav.value = window.innerWidth >= 820;
};

onMounted(() => {
  updateVisibility();
  window.addEventListener("resize", updateVisibility);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateVisibility);
});
//

//Funktion som hanterar länderna/flaggorna i mobilvy
function countryFlags() {
  let imagePath = "";
  let countryName = "";
  switch (filterCategory.value) {
    case "Balkan":
      imagePath = "Balkan.png";
      countryName = "Balkan";
      break;

    case "Japan":
      imagePath = "Japan.png";
      countryName = "Japan";
      break;

    case "Mexico":
      imagePath = "Mexico.png";
      countryName = "Mexico";
      break;
    case "Turkiet":
      imagePath = "Turkiet.png";
      countryName = "Turkiet";
      break;
    case "Storbritannien":
      imagePath = "Storbritannien.png";
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
  <!-- <div class="header">
    <div class="iconArrow">
      <i @click="$router.go(-1)" class="bi bi-arrow-left-short" scale="1.5"></i>
    </div>
    <div class="headline">
      <h1>PRODUKTER</h1>
    </div>
  </div> -->
  <myHeader headline="PRODUKTER" />
  <b-container>
    <b-row align-h="center">
      <b-col cols="8">
        <p class="pageDescription">
          Här finner du alla våra produkter. Välj land i menyn för att hitta
          ditt godis.
        </p>
      </b-col>
    </b-row>

    <flagLinks v-if="showFlagNav" />

    <div v-else>
      <b-row>
        <b-col>
          <b-dropdown id="dropdown-1" text="Välj Land" variant="" class="button">
            <b-dropdown-item @click="(filterCategory = 'Balkan'), navigateToRoute">Balkan</b-dropdown-item>
            <b-dropdown-item @click="(filterCategory = 'Japan'), navigateToRoute">Japan</b-dropdown-item>
            <b-dropdown-item @click="(filterCategory = 'Mexico'), navigateToRoute">Mexico</b-dropdown-item>
            <b-dropdown-item @click="(filterCategory = 'Turkiet'), navigateToRoute">Turkiet</b-dropdown-item>
            <b-dropdown-item @click="(filterCategory = 'USA'), navigateToRoute">USA</b-dropdown-item>
            <b-dropdown-item
              @click="(filterCategory = 'Storbritannien'), navigateToRoute">Storbritannien</b-dropdown-item>
            <BDropdownDivider />
            <b-dropdown-item @click="filterCategory = 'Alla'">Alla produkter</b-dropdown-item>
          </b-dropdown>
        </b-col>
      </b-row>

      <div class="d-flex justify-content-center align-items-center">
        <h2 class="text-center countryName">
          {{ countryFlags().countryName }}
        </h2>

        <img v-if="filterCategory !== 'Alla' && filterCategory !== ''" :src="countryFlags().imagePath" alt=""
          class="flagImage" />
      </div>
    </div>
  </b-container>

  <filter-products :filter-category="filterCategory" />
  <div class="footerContainer">
    <myFooter />
  </div>
</template>

<style scoped>
/* .header {
  border-bottom: thin inset;
  border-bottom-color: #F0F2F5;
  margin-bottom: 20px;
  padding-bottom: 10px;
  position: relative;
}

.iconArrow {
  left: 0;
  margin-left: 1em;
  position: absolute;
  transform: translate(0, -50%);
  top: 35%;
}

.iconArrow i {
  font-size: xx-large;
}

.headline h1 {
  font-size: medium;
  font-weight: 600;
  margin-bottom: 0;
  text-align: center;
  width: 100%;
} */

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
