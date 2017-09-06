import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import Vote from '@/components/Vote.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/vote',
      name: 'Vote',
      component: Vote
    }
  ]
})
