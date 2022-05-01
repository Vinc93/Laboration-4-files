import { createRouter, createWebHashHistory } from 'vue-router'

import ChuckS from './views/ChuckS.vue'
import Yugio from './views/YugioC.vue'
import hello from './views/helloN.vue'
import RandomS from './views/RandomS.vue'



export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: ChuckS,
      path: '/chucks'
    },
    {
      component: Yugio,
      path: '/yugio'
    },{
      component: hello,
      path:'/hello/:name'
    },
    {
      component: RandomS,
      path: '/'
    }

  ]
})
