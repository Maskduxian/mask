import Vue from 'vue'
import Router from 'vue-router'
import Strengthguarantee from '@/components/Strengthguarantee'
import about from '@/components/about'
import Noviceguide from '@/components/Noviceguide'
import fastaccountopening from '@/components/fastaccountopening'
import Presinvestment from '@/components/Presinvestment'
import Periodicproduct from '@/components/Periodicproduct'
import burse from '@/components/burse'
import Buyprivateequity from '@/components/Buyprivateequity'
import Preferential from '@/components/Preferential'
import encounterproblem from '@/components/encounterproblem'
import account from '@/components/account'
import test from '@/components/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      base:'/alc/guide/',
      path: '/test',
      name: 'test',
      component:test
    },
    {
      base:'/alc/guide/',
      path: '/Strengthguarantee',
      name: 'Strengthguarantee',
      component:Strengthguarantee
    },
    {
      base:'/alc/guide/',
      path: '/about',
      name: 'about',
      component:about
    },
    {
      base:'/alc/guide/',
      path: '/Noviceguide',
      name: 'Noviceguide',
      component:Noviceguide 
    },
    {
      base:'/alc/guide/',
      path: '/fastaccountopening',
      name: 'fastaccountopening',
      component:fastaccountopening
    },
    {
      base:'/alc/guide/',
      path: '/Presinvestment',
      name: 'Presinvestment',
      component:Presinvestment
    },
    {
      base:'/alc/guide/',
      path: '/Periodicproduct',
      name: 'Periodicproduct',
      component:Periodicproduct
    },
    {
      base:'/alc/guide/',
      path: '/burse',
      name: 'burse',
      component:burse
    },
    {
      base:'/alc/guide/',
      path: '/Buyprivateequity',
      name: 'Buyprivateequity',
      component:Buyprivateequity
    },
    {
      base:'/alc/guide/',
      path: '/Preferential',
      name: 'Preferential',
      component:Preferential
    },
    // {
    //   base:'/alc/guide/',
    //   path: '/encounterproblem',
    //   name: '/encounterproblem',
    //   component:encounterproblem,
    //    meta:{
    //     title:'encounterproblem',
    //     index:0
    //    }
    // },
    // {
    //   base:'/alc/guide/',
    //   path: '/account',
    //   name: 'account',
    //   component:account,
    //     meta:{
    //       title:'account',
    //       index:1}
    // },
  ]
})
