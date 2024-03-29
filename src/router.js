import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import ProductsView from "./views/ProductsView.vue";
import ProductView from "./views/ProductView.vue";
import ShoppingCartView from "./views/ShoppingCartView.vue";
import FlagLinks from "./components/FlagLinks.vue";
import PaymentView from "./views/PaymentView.vue";
import FavouritesView from "./views/FavouritesView.vue";
// import FlagLinks from "./components/FlagLinks.vue";
import Confirmation from "./components/Confirmation.vue";
import LoginView from "./views/LoginView.vue";
import SignUpView from "./views/SignUpView.vue";
import RandomProductsView from "./views/RandomProductsView.vue";

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
      component: ShoppingCartView,
      path: "/shoppingcart"
    },
    {
      component: FavouritesView,
      path: "/favourites"
    },
    {
      component: PaymentView,
      path: "/payment",
    },

    {
      component: Confirmation, // routersökväg till den nya sidan efter klick?
      path: "/Confirmation",
    },


    {
      component: LoginView,
      path: "/login",
    },

    {
      component: SignUpView,
      path: "/SignUp",
    },

    {
      component: RandomProductsView,
      path: "/RandomProducts",
    },

    // {
    //   component: ShoppingcartView,
    //   path: '/shoppingcart'
    // },
  ],
});
