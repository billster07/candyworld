<script setup>

import dropDownMenu from './components/dropDownMenu.vue';
import { useCandyStore } from "/src/store.js";

const store = useCandyStore()
store.updateShoppingCart();
const menuIsClicked = (isOpen) => {
  console.log('User clicked on menu!', isOpen);
};

const props = defineProps(['menuFirst']);


</script>

<template >
  <nav>
    <dropDownMenu :menu-first="menuFirst" @menuIsClicked="menuIsClicked"></dropDownMenu>
  </nav>



  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
