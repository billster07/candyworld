import {
  createRouter, createWebHashHistory
} from 'vue-router'

import HomeView from './views/HomeView.vue'
import ProductsView from './views/ProductsView.vue'
import ProductView from './views/ProductView.vue'




export default createRouter ({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/'
    },
    {
      component: ProductsView,
      path: '/products'
    },
    {
      component: ProductView,
      path: '/product'
      // adressparameter
    },
    // {
    //   component: ShoppingcartView,
    //   path: '/shoppingcart'
    // },

  ]
})
