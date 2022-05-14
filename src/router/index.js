import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../views/Add.vue'
import Edit from '../views/Edit.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-to-do',
    name: 'Add',
    component: Add
  },
  {
    name: 'Edit',
    path: '/edit-to-do/:id',
    component: Edit
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
