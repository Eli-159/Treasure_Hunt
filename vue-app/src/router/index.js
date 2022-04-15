import { createRouter, createWebHistory } from 'vue-router'
import HuntTemplate from '../views/hunt/Template.vue'
import EnterCode from '../views/hunt/EnterCode.vue'
import Clue from '../views/hunt/Clue.vue'

const routes = [
  {
    path: '/',
    redirect: {name: 'EnterCode'}
  },
  {
    path: '/hunt',
    name: 'HuntTemplate',
    component: HuntTemplate,
    children: [
      {
        path: '',
        redirect: {name: 'EnterCode'}
      },
      {
        path: 'enter-code',
        name: 'EnterCode',
        component: EnterCode
      },
      {
        path: 'clue/:code',
        name: 'Clue',
        component: Clue
      }
    ]
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router