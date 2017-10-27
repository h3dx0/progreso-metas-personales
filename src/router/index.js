import Vue from 'vue'
import Router from 'vue-router'
import CreateMetaResagada from '@/components/CreateMetaResagada'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CreateMetaResagada',
      component: CreateMetaResagada
    }
  ]
})
