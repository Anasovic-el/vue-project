import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/clients',
    name: 'Clients',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "clients" */ '../views/Clients.vue')
  },
  {
    path: '/clients/nouveau-client',
    name: 'NouveauClient',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "clients" */ '../views/NouveauClient.vue')
  },
  {
    path: '/clients/client_validation',
    name: 'AncienClient',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "clients" */ '../views/AncienClient.vue')
  },
  {
    path: '/techniciens',
    name: 'Techniciens',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "clients" */ '../views/Techniciens.vue')
  },
  {
    path: '/client/:name-:id',
    name: 'ClientModify',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "clients" */ '../views/ClientModify.vue')
  },
  {
    path: '/client/:name-:id/formule',
    name: 'ModifyMyReapir',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "clients" */ '../views/ModifyMyReapir.vue')
  },
  {
    path: '/client/:name-:id/mes_reparations',
    name: 'MesReparations',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "clients" */ '../views/MesReparations.vue')
  },
  {
    path: '/techniciens/:id',
    name: 'TechniciensChoose.vue',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "clients" */ '../views/TechniciensChoose.vue')
  },
  {
    path: '/techniciens/:id/modifications',
    name: 'ModifyReapirs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "clients" */ '../views/ModifyRepairs.vue')
  },
  {
    path: '/techniciens/:id/mes_reparations',
    name: 'myReparations',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "clients" */ '../views/myReprations.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
