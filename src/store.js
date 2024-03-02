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
      console.log("bbb", this.products);
      const alreadyAdded = this.favouriteProduct.some(
        (product) => product.id === storedId
      );
      if (!alreadyAdded) {
        this.products.forEach((product) => {
          if (storedId === product.id) {
            this.favouriteProduct.push(product);
            console.log("hej", this.favouriteProduct);
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
  },

  state: () => ({
    products: [],
    selectedProduct: {},
    favouriteProduct: [],
    shoppingCart: [],
    checkIfIncluded: false,
  }),
});
