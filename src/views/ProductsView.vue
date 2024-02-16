<script setup>
import { ref, watch } from "vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import filterProducts from '../components/filterProducts.vue'
import { useRouter, useRoute } from 'vue-router'


const filterCategory = ref("Alla"),
router = useRouter(),
route = useRoute()

router.push({params: { category: filterCategory.value}})
watch(filterCategory, (choosenCategory) => {
  router.push({params: { category: choosenCategory}})
}
)

watch(() => route.params.category, (newValue) => {
      filterCategory.value = newValue
    })

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
          <b-dropdown-item @click="filterCategory = 'Balkan',navigateToRoute">Balkan</b-dropdown-item>
          <b-dropdown-item @click="filterCategory = 'Japan',navigateToRoute">Japan</b-dropdown-item>
          <b-dropdown-item @click="filterCategory = 'Mexico',navigateToRoute">Mexico</b-dropdown-item>
          <b-dropdown-item @click="filterCategory = 'Turkiet',navigateToRoute">Turkiet</b-dropdown-item>
          <b-dropdown-item @click="filterCategory = 'USA',navigateToRoute">USA</b-dropdown-item>
          <b-dropdown-item @click="filterCategory = 'Storbritannien',navigateToRoute">Storbritannien</b-dropdown-item>
          <BDropdownDivider />
          <b-dropdown-item @click="filterCategory = 'Alla'">Alla produkter</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
  </b-container>
  <filter-products :filter-category="filterCategory"/>
  
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


</style>
