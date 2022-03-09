import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/',name: 'home', component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue') },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue') },
  {
    path: '/generation',
    name: 'generation',
    component: () => import(/* webpackChunkName: "layout-generacion" */ '@/views/Pokemon/Layout/LayoutPokemon.vue'),
    children:[
      { path : ':id', name : 'generation-list-view', component: () => import(/* webpackChunkName: "generation-list" */ '@/views/Pokemon/GenerationView.vue'),}
    ]
  },

  { path: '/:pathMatch(.*)*', name : '404',component : () => import('@/views/PageNotFound.vue')},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
