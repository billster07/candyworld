import { defineStore } from "pinia";
import axios from "axios";

export const useCandyStore = defineStore("candy", {
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get(
          "https://pb.nopatan.com/api/collections/produkter/records"
        );
        this.products = response.data.items;
      } catch (error) {
        console.error(error);
      }
    },
    matchProduct(key) {
      this.products.forEach((product) => {
        if (key === product.id) {
          this.selectedProduct = product;
        }
      });
    },
    matchStoredProduct(storedId) {
      const alreadyAdded = this.favouriteProduct.some(
        (product) => product.id === storedId
      );
      if (!alreadyAdded) {
        this.products.forEach((product) => {
          if (storedId === product.id) {
            this.favouriteProduct.push(product);
          }
        });
      }
    },
    addProduct(product) {
      this.checkIfIncluded = false;
      this.shoppingCart.forEach((product_) => {
        if (product_.id === product.id) {
          this.checkIfIncluded = true;
          product_.quantity++;

          sessionStorage.setItem(
            "shoppingCart",
            JSON.stringify(this.shoppingCart)
          );
        }
      });
      if (this.checkIfIncluded === false) {
        product.quantity = 1;

        this.shoppingCart.push(product);
        sessionStorage.setItem(
          "shoppingCart",
          JSON.stringify(this.shoppingCart)
        );
      }
    },
    updateShoppingCart() {
      if (sessionStorage.getItem("shoppingCart")) {
        this.shoppingCart = JSON.parse(sessionStorage.getItem("shoppingCart"));
      }
    },
    totalSum() {
      let sum = 0;
      this.shoppingCart.forEach((product) => {
        sum += Math.round(product.price * product.quantity * 100) / 100;
      });
      return Math.round(sum);
    },
    storeProduct(productId) {
      if (localStorage.getItem("storeId") === null) {
        localStorage.setItem("storeId", "[]");
        let favouriteProducts = JSON.parse(localStorage.getItem("storeId"));
        favouriteProducts.push(productId);
        localStorage.setItem("storeId", JSON.stringify(favouriteProducts));
      } else {
        let favouriteProducts = JSON.parse(localStorage.getItem("storeId"));

        if (favouriteProducts.includes(productId)) {
          favouriteProducts = favouriteProducts.filter(
            (id) => id !== productId
          );
          this.favouriteProduct = this.favouriteProduct.filter(
            (product) => product.id !== productId
          );
        } else {
          favouriteProducts.push(productId);
        }
        localStorage.setItem("storeId", JSON.stringify(favouriteProducts));
      }
      this.getStoredValue();
    },
    getStoredValue() {
      let storedFavouriteProducts = localStorage.getItem("storeId");
      if (storedFavouriteProducts) {
        const getFavouriteProducts = JSON.parse(storedFavouriteProducts);
        if (Array.isArray(getFavouriteProducts)) {
          getFavouriteProducts.forEach((product) => {
            this.matchStoredProduct(product);
          });
        } else {
          console.error("inte en array");
        }
      } else {
        console.warn("inga produkter hittades");
      }
    },
    toggleHeart(product) {
      product.isHeartClicked = !product.isHeartClicked;
      this.saveHeartStatus(product);
    },
    saveHeartStatus(product) {
      localStorage.setItem(
        `heartClicked_${product.id}`,
        product.isHeartClicked
      );
    },

    loadHeartStatus(product) {
      const heartClicked = localStorage.getItem(`heartClicked_${product.id}`);
      if (heartClicked !== null) {
        product.isHeartClicked = JSON.parse(heartClicked);
      }
    },
    checkHeartStatus() {
      this.products.forEach((product) => {
        this.loadHeartStatus(product);
      });
    },
   
    addMultipleProducts(products) {
      products.forEach((product) => {
        this.addProduct(product);
      });
    },

    addMultipleProducts(products) {
      if (Array.isArray(products)) {
        products.forEach((product) => {
          this.addProduct(product);
        });
      } else {
        console.error("addMultipleProducts: Input is not an array");
      }
    },

    addMultipleProducts(products) {
      if (Array.isArray(products)) {
        products.forEach((product) => {
          this.addProduct(product);
        });
      } else {
        console.error("addMultipleProducts: Input is not an array");
      }
    },
    
    addRandomCandies(products) {
      this.addMultipleProducts(products);
    },
  
  },

  state: () => ({
    products: [],
    selectedProduct: {},
    favouriteProduct: [],
    shoppingCart: [],
    checkIfIncluded: false,
  }),
});

export const useAccountStore = defineStore("accounts", {
  actions: {
    newAccount(account) {
      this.accounts.push(account);
    },
  },
  persist: true,
  state: () => ({ accounts: [] }),
});
