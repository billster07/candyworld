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
  },
  state: () => ({ products: [] }),
});
