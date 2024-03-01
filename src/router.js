import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import ProductsView from "./views/ProductsView.vue";
import ProductView from "./views/ProductView.vue";
import FlagLinks from "./components/FlagLinks.vue";
import PaymentView from "./views/PaymentView.vue";
import FavouritesView from "./views/FavouritesView.vue"
// import FlagLinks from "./components/FlagLinks.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: "/",
    },
    {
      component: ProductsView,
      name: "products",
      path: "/products/:category",
    },
    {
      component: ProductView,
      path: "/products/:category/:productId",
      // adressparameter
    },
    {
      component: PaymentView,
      path: "/payment",
    },
    {
      component: FavouritesView,
      path: '/favourites'
    }
    // {
    //   component: ShoppingcartView,
    //   path: '/shoppingcart'
    // },
  ],
});
