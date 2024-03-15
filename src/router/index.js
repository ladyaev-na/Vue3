import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: "/reg",
      name: 'reg',
      component: () => import('../views/Reg.vue')
    }
  ]
})

export default router
