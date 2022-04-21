import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import GStore from '@/store'
import ClueService from '@/services/ClueService.js'
import HuntTemplate from '../views/hunt/Template.vue';
import EnterCode from '../views/hunt/EnterCode.vue';
import Clue from '../views/hunt/Clue.vue';

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
        component: Clue,
        props: true,
        beforeEnter: (to) => {
          return ClueService.getClue(to.params.code).then(res => {
            if (res.data.length == 0) {
              GStore.clue = {
                msg: 'That code does not exist.',
                showClueNum: false,
                incLink: false
              };
            } else {
              GStore.clue = res.data[0];
            }
          }).catch(err => {
            GStore.clue = {
                msg: 'Sorry, an unexpected error occurred.',
                showClueNum: false,
                incLink: false
              };;
          })
        }
      }
    ]
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

NProgress.configure({
  showSpinner: false,
  trickle: true,
  trickleSpeed: 200
});

router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;