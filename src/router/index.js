import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../public/pages/home.component.vue'

// Lazy loading Components
const TutorialsComponent = () => import('../learning/pages/tutorial-list.component.vue');
const AboutComponent = () => import('../public/pages/about.component.vue');

// Application Routes
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      alias: '/',
      component: HomeComponent
    },
    {
      path: '/about',
      name: 'about',
      component: AboutComponent
    },
    {
      path: '/tutorials',
      name: 'tutorials',
      component: TutorialsComponent
    }
  ]
})

export default router
