<script setup>
// import { ref, defineProps } from "vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCandyStore } from "/src/store.js";


const store = useCandyStore();

fetchData()

async function fetchData() {
  await store.fetchProducts();
  store.getStoredValue();
  checkHeartStatus()
}

const toggleHeart = (product) => {
  !product.isHeartClicked
  saveHeartStatus(product);

}
const saveHeartStatus = (product) => {
  localStorage.setItem(`heartClicked_${product.id}`, !product.isHeartClicked);
};

const loadHeartStatus = (product) => {
  const heartClicked = localStorage.getItem(`heartClicked_${product.id}`);
  if (heartClicked !== null) {
    product.isHeartClicked = JSON.parse(heartClicked);
  }
};


function checkHeartStatus() {
  store.products.forEach((product) => {
    loadHeartStatus(product)
  })
}


</script>
<template>
  <div class="mainContainer">
    <div class="productContainer">
      <div class="productCard" v-for="product in store.favouriteProduct" v-if="store.favouriteProduct.length > 0" >

        <div class="image"
          @click="store.matchProduct(product.id), $router.push(`/products/${filterCategory}/${store.selectedProduct.productName}`)">

          <img :src="'https://pb.nopatan.com/api/files/02eld6u8qdz3cgq/' +
            product.id +
            '/' +
            product.image
            " />
        </div>
        <div class="productInformation">
          <div class="headlineHeartContainer">
            <h3
              @click="store.matchProduct(product.id), $router.push(`/products/${filterCategory}/${store.selectedProduct.productName}`)">
              {{ product.productName }}</h3>
            <i @click="store.storeProduct(product.id), toggleHeart(product)"
              :class="{ 'bi bi-heart': !product.isHeartClicked, 'bi bi-heart-fill': product.isHeartClicked }"></i>
          </div>
          <p> {{ product.description_sum.slice(0, 50) }}...</p>

          <div class="priceButtonDesign">
            <p>{{ product.price }}:-</p>
            <b-button class="button" size="sm">KÖP <i class="bi bi-cart"></i></b-button>
          </div>
        </div>
      </div>
      <div v-else class="emptyFavourites">

<h3>SPARA DINA FAVORITARTIKLAR</h3>
<p>Du har inte sparat något ännu. Oroa dig inte, det är lätt! Klicka bara på hjärtsymbolen vid önskade artiklar så
  visas de här.</p>
<b-button @click="$router.push('/products/Alla')" class="button2" size="lg">Utforska produkter</b-button>
</div>
    </div>
  </div>
</template>
<style scoped>
.productContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;

}

.productCard {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  font-size: 14px;
  justify-content: center;
  margin-top: 15px;
  padding-top: 10px;
  width: 90%;
}

.productCard:nth-child(odd) {
  background-color: #fdebfb;
}

h3, .bi-heart-fill {
  cursor: pointer;
}

.headlineHeartContainer {
  display: flex;
  justify-content: space-between;
  margin-right: 1em;
}

.productInformation {
  height: 100%;
  margin-right: 10px;
  width: 100vh;
}

.priceButtonDesign {
  align-items: baseline;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
}

.button {
  background-color: #e7b6e2;
  border-radius: 0.75rem;
  border: 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-left: 30px;
  padding: 5px 15px 5px 15px;
}

.button2 {
  background-color: #e7b6e2;
  border-radius: 0.75rem;
  border: 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 5px 15px 5px 15px;
}

.button:hover {
  background-color: rgba(255, 164, 85, 0.8);
}

img {
  cursor: pointer;
  max-height: 100px;
  width: 100px;
}

.image {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 20px;
  margin-right: 10px;
  width: 30%;
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


/* .button {
  background-color: #e7b6e2;
  border: 0;
  border-radius: 0.75rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  padding: 5px 15px 5px 15px;

} */

/* .button:hover {
  background-color: rgba(255, 164, 85, 0.8);
} */

.button:active {
  background-color: #FFE67B;
}



@media (min-width: 700px) {

  .mainContainer {
    display: flex;
    justify-content: center;
  }

  .productContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 850px;
  }

  .productCard {
    background-color: #fdebfb;
    height: 200px;
    margin: 15px 20px 0 20px;
    max-width: 320px;
  }

  .productInformation {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 10px;
  }

  .priceButtonDesign {
    margin-bottom: 20px;
    margin-top: auto;
  }

  h3 {
    font-size: large;
  }

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
