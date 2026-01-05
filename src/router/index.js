import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue"
import BikeDetail from "../pages/BikeDetail.vue"
import ReturnBike from "../pages/ReturnBike.vue"

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/bike/:id", component: BikeDetail },
    { path: "/return/:id", component: ReturnBike }
  ]
})
