import Vue from 'vue'
import Router from 'vue-router'
import ExpansionPanel from './demo/ExpansionPanel'
import List from './demo/List'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/demo/expansion-panel',
      name: 'expansion-panel',
      component: ExpansionPanel
    },
    {
      path: '/demo/list',
      name: 'list',
      component: List
    }
  ]
})
