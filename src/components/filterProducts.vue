<script setup>
import { ref, defineProps } from "vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCandyStore } from "/src/store.js";
import BuyButton from "./BuyButton.vue";

const store = useCandyStore();
// store.fetchProducts();
// getStoredValue()

fetchData()

async function fetchData() {
  await store.fetchProducts();
  getStoredValue();
  checkHeartStatus()
}


// checkProducts()
const props = defineProps({ filterCategory: { type: String } })

// const isHeartClicked = ref({})

const toggleHeart = (product) => {
  product.isHeartClicked = !product.isHeartClicked
  saveHeartStatus(product);

}
const saveHeartStatus = (product) => {
  localStorage.setItem(`heartClicked_${product.id}`, product.isHeartClicked);
};

const loadHeartStatus = (product) => {
  const heartClicked = localStorage.getItem(`heartClicked_${product.id}`);
  if (heartClicked !== null) {
    product.isHeartClicked = JSON.parse(heartClicked);
  } else {
    console.log('tom array')
  }
};

function checkHeartStatus() {
  store.products.forEach((product) => {
    loadHeartStatus(product)
  })
}



function storeProduct(productId) {
  if (localStorage.getItem('storeId') === null) {
    localStorage.setItem('storeId', '[]')
    let favouriteProducts = JSON.parse(localStorage.getItem('storeId'))
    favouriteProducts.push(productId)
    localStorage.setItem('storeId', JSON.stringify(favouriteProducts))
  } else {
    let favouriteProducts = JSON.parse(localStorage.getItem('storeId'))

    if (favouriteProducts.includes(productId)) {
      favouriteProducts = favouriteProducts.filter((id) => id !== productId)
      store.favouriteProduct = store.favouriteProduct.filter((product) => product.id !== productId)
    } else {
      favouriteProducts.push(productId)



    }
    localStorage.setItem('storeId', JSON.stringify(favouriteProducts))

  }
  getStoredValue()

}
function getStoredValue() {
  let storedFavouriteProducts = localStorage.getItem('storeId')
  if (storedFavouriteProducts) {

    const getFavouriteProducts = JSON.parse(storedFavouriteProducts)
    console.log(getFavouriteProducts)
    if (Array.isArray(getFavouriteProducts)) {
      getFavouriteProducts.forEach(product => {
        store.matchStoredProduct(product)

      })

    } else {
      console.error('inte en array')
    }

  } else {
    console.warn('inga produkter hittades')
  }
}





// onMounted(() => {
//   store.products.forEach((product) => {
//     loadHeartStatus(product);
//   });
// });


</script>

<template>
  <div class="mainContainer">
    <div class="productContainer">
      <div v-if="props.filterCategory === 'Alla'" class="productCard" v-for="product in store.products" :key="product.id">

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
              @click="store.matchProduct(product.id), $router.push(`/products/${product.category}/${store.selectedProduct.productName}`)">
              {{ product.productName }}</h3>
            <i @click="storeProduct(product.id), toggleHeart(product)"
              :class="{ 'bi bi-heart': !product.isHeartClicked, 'bi bi-heart-fill': product.isHeartClicked }"></i>
            <!--  -->
          </div>
          <p> {{ product.description_sum.slice(0, 50) }}...</p>

          <div class="priceButtonDesign">
            <p>{{ product.price }}:-</p>
            <BuyButton @click="store.addProduct(product)" button-text="Köp" button-size="sm" />
          </div>
        </div>
      </div>

      <div @click="store.matchProduct(product.id)" v-else class="productCard"
        v-for="product in store.products.filter(product => product.category === props.filterCategory)">

        <div class="image" @click="$router.push(`/products/${product.category}/${product.id}`)">
          <img :src="'https://pb.nopatan.com/api/files/02eld6u8qdz3cgq/' +
            product.id +
            '/' +
            product.image
            " />
        </div>
        <div class="productInformation">
          <h3 @click="$router.push(`/products/${product.category}/${product.id}`)">{{ product.productName }}</h3>
          <p> {{ product.description_sum.slice(0, 50) }}...</p>
          <div class="priceButtonDesign">
            <p>{{ product.price }}:-</p>
            <BuyButton @click="store.addProduct(product)" button-text="Köp" button-size="sm" />
          </div>
        </div>


      </div>
    </div>
  </div>
</template>
<style scoped>
.productContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.productCard {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  padding-top: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 14px;
  width: 90%;
}

.productCard:nth-child(odd) {
  background-color: #fdebfb;
}

h3 {
  cursor: pointer;
}

.bi-heart {
  cursor: pointer;
}

.bi-heart-fill {
  cursor: pointer;
}

.headlineHeartContainer {
  display: flex;
  justify-content: space-between;
  margin-right: 1em;
}

.productInformation {
  width: 100vw;
  margin-right: 10px;
  height: 100%;
}

.priceButtonDesign {
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  margin-right: 20px;
}

img {
  cursor: pointer;
  width: 100px;
  max-height: 100px;

}

.image {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-right: 10px;
  width: 30%;
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
    max-width: 320px;
    height: 200px;
    margin: 15px 20px 0 20px;
  }

  .productInformation {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .priceButtonDesign {
    margin-top: auto;
    margin-bottom: 20px;
  }

  h3 {
    font-size: large;
  }

}
</style>
