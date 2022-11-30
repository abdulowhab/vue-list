import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventDetails from "../views/events/Details.vue"
import EventRegister from "../views/events/Register.vue"
import EventEdit from "../views/events/Edit.vue"

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/event/:id',
    props: true,
    name: 'EventDetails',
    component: EventDetails
  },
  {
    path: '/event/:id/register',
    props: true,
    name: 'EventRegister',
    component: EventRegister
  },
  {
    path: '/event/:id/edit',
    props: true,
    name: 'EventEdit',
    component: EventEdit
  },
  {
    path: '/about',
    name: 'AboutView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
