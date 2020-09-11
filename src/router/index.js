import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from "@/views/Info";
import Proceso from "@/views/Proceso";

Vue.use(VueRouter)

  const routes = [
      { path: '/', name: 'Home', component: Home },
      { path: '/info', name: 'Informacion', component: Info},
      { path: '/proceso', name: 'Proceso', component: Proceso}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
