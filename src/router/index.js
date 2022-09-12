import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView
    },
    {
      path: '/requirements',
      name: 'requirements',
      component: () => import('../views/RequirementsView.vue')
    },
    {
      path: '/fruits',
      name: 'fruits',
      component: () => import('../views/FruitsView.vue')
    },
  ]
})

export default router
