<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useCandyStore } from '/src/store.js';

const store = useCandyStore();
const router = useRouter();

const addRandomCandies = async () => {
  try {
    const response = await axios.get(
      "https://pb.nopatan.com/api/collections/produkter/records"
    );

    if (response.data.items) {
      const candyProducts = response.data.items;
      const productsToAdd = 5;

      //Sorterar produkterna helt random från mitt API
      const randomProducts = candyProducts.sort(() => Math.random() - 0.5).slice(0,productsToAdd);

      // Lägger till randomprodukterna som vi fick fram med ovanstående kod i varukorgen
      store.addRandomCandies(randomProducts);

      // navigerar och pushar genom router.push in till varukorgen
      router.push('/shoppingcart')
    } else {
      console.error("Inga produkter hittades från API:t");
    }
  } catch (error) {
    console.error(error);
  }
};
</script>


<template>
<div class="candyContainer">
 <span><i class="bi bi-patch-question"></i></span>
<h1 class="title">Beslutsångest?</h1>
<p class="description">
  Har du svårt att välja bland våra otroligt frestande godisar? Oroa dig inte!
  Klicka på knappen nedan för att lägga till 5 slumpmässiga godisar i din varukorg.
  Men <strong style="color:darkred">varning</strong>, det finns ingen återvändo - du kommer att älska dem för mycket!
</p>
<button @click="addRandomCandies" class="candyButton">Ge mig överraskningsgodis <strong>NU!</strong></button>
</div>
</template>


<style scoped>
.candyContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 0;
}

.bi {
  font-size: 6em;
  margin-top: 3em;
}

.title {
  font-size: 6vw;
  margin: 10px 20px;
}

.description {
  margin-top: 1em;
  width: 80%;
  font-size: 3.5vw;
}

.candyButton {
  margin-top: 20px;
  padding: 8px;
  font-size: 1em;
  background: linear-gradient(45deg, #cc66c2a7, #fadb43a9, #ff9b29af, #ff6536b1);
  color: #2f2626;
  transition: 0.3s;
}

.candyButton:hover {
  background: linear-gradient(45deg, #CC66C2, #FADD43, #FF9C29, #FF6636);
}


@media (min-width: 500px) {
  .bi {
  font-size: 5em;
  margin-top: 3em;
}

.title {
  font-size: 5.5vw;
  margin: 10px 20px;
}

.description {
  margin-top: 1em;
  width: 80%;
  font-size: 3.5vw;
}
}

@media (min-width: 580px) {
  .bi {
  font-size: 4.5em;
  margin-top: 3em;
}

.title {
  font-size: 5vw;
  margin: 10px 20px;
}

.description {
  margin-top: 1em;
  width: 80%;
  font-size: 3vw;
}
}

@media (min-width: 710px) {
  .bi {
  font-size: 4em;
  margin-top: 3em;
}

.title {
  font-size: 4vw;
  margin: 10px 20px;
}

.description {
  margin-top: 1em;
  width: 80%;
  font-size: 2vw;
}
}

@media (min-width: 930px) {
  .bi {
  font-size: 4em;
  margin-top: 3em;
}

.title {
  font-size: 4vw;
  margin: 10px 20px;
}

.description {
  margin-top: 1em;
  width: 80%;
  font-size: 2vw;
}
}

@media (min-width: 1180px) {
  .bi {
  font-size: 3em;
  margin-top: 3em;
}

.title {
  font-size: 2.5vw;
  margin: 10px 20px;
}

.description {
  margin-top: 1em;
  width: 80%;
  font-size: 1.3vw;
}
}
</style>