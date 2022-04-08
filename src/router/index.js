import Vue from 'vue'
import Router from 'vue-router'
import Configuration from '../components/Configuration'
import Recherche from '../components/Recherche'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Configuration',
      component: Configuration
    },
    {
      path: '/Recherche',
      name: 'Recherche',
      component: Recherche
    }
  ]
})
