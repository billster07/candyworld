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
        this.shoppingCart = JSON.parse(sessionStorage.getItem("shoppingCart"))
      }
    },
    onClickPlus(product) {
      this.shoppingCart.forEach((product_) => {
        if(product_.id === product.id) {
          product_.quantity++
        }
      })
    },
    onClickSubtract(product, key) {
      if (key === 0 && product.quantity === 1) {
        this.shoppingCart.shift()
      } else if (product.quantity === 1) {
        this.shoppingCart.splice(key, key)
      } else {
        this.shoppingCart.forEach((product_) => {
          if(product_.id === product.id) {
            product_.quantity--
          }
        })
      }
    }
  },
  state: () => ({
    products: [],
    shoppingCart: [],
    checkIfIncluded: false,
  }),
  },
);