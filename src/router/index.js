import Vue from 'vue'
import Router from 'vue-router'
import Configuration from '../components/Configuration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Configuration',
      component: Configuration
    }
  ]
})
