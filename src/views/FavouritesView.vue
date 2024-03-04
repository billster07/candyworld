<script setup>
import { useCandyStore } from "/src/store.js";
import myFooter from "../components/Footer.vue"
import myHeader from "../components/Header.vue"
import Favourites from "../components/Favourites.vue"


const store = useCandyStore();
</script>
<template>
  <myHeader headline="MINA FAVORITER" />
  <main class="main-favorite">
    <Favourites v-if="store.favouriteProduct.length > 0" />
    <div v-else class="emptyFavourites">

      <h3>SPARA DINA FAVORITARTIKLAR</h3>
      <p>Du har inte sparat något ännu. Oroa dig inte, det är lätt! Klicka bara på hjärtsymbolen vid önskade artiklar så
        visas de här.</p>
      <b-button @click="$router.push('/products/Alla')" class="button" size="lg">Utforska produkter</b-button>
    </div>
  </main>
  <myFooter />
</template>

<style scoped>
.main-favorite {
  align-items: center;
  display: flex;
  flex-direction: column;

}

.emptyFavourites {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 60%;

}

.emptyFavourites h3,
.emptyFavourites p {
  margin-bottom: 1em;
  text-align: center;
}


.button {
  background-color: #e7b6e2;
  border: 0;
  border-radius: 0.75rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  padding: 5px 15px 5px 15px;

}

.button:hover {
  background-color: rgba(255, 164, 85, 0.8);
}

.button:active {
  background-color: #FFE67B;
}

@media (min-width: 600px) {
.emptyFavourites {
  margin-bottom: 3em;
  max-width: 40%;
}

.emptyFavourites h3,
.emptyFavourites p {
  margin-bottom: 20px;
}
}
</style>
