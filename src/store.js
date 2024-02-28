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
          console.log(this.shoppingCart);
          sessionStorage.setItem(
            "shoppingCart",
            JSON.stringify(this.shoppingCart)
          );
        }
      });
      if (this.checkIfIncluded === false) {
        product.quantity = 1;
        this.shoppingCart.push(product);
        console.log(this.shoppingCart);
        sessionStorage.setItem(
          "shoppingCart",
          JSON.stringify(this.shoppingCart)
        );
      }
    },
  },
  state: () => ({
    products: [],
    shoppingCart: [],
    checkIfIncluded: false,
    // counter: 0,
  }),
  getters: {
    getShoppingCart(state) {
      return (state.shoppingCart = JSON.parse(
        sessionStorage.getItem("shoppingCart")
      ));
    },
    // amountOfProducts() {
    //   this.counter = 0;
    //   this.shoppingCart.map(
    //     (product) => (this.counter = this.counter + product.quantity)
    //   );
    //   return this.counter;
    // },
  },
});
