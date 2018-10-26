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
import account from '@/components/account'
//新增
// import supp from '@/components/supp'
import common from '@/components/common'
import protocol_riskreveal from '@/components/protocol_riskreveal'
import coupon_regulation from '@/components/coupon_regulation'
// import risk from '@/components/risk'
//协议
import protocol_authorization from '@/components/protocol_authorization'
import protocol_delegation from '@/components/protocol_delegation'
import protocol_esignature from '@/components/protocol_esignature'
import protocol_exceptions from '@/components/protocol_exceptions'
import protocol_qualified from '@/components/protocol_qualified'
import protocol_rights from '@/components/protocol_rights'
import protocol from '@/components/protocol'
Vue.use(Router)

export default new Router({
  routes: [
    {
      base:'/alc/guide/',
      path: '/account',
      name: 'account',
      component:account
    },
    {
      base:'/alc/guide/',
      path: '/protocol_authorization',
      name: 'protocol_authorization',
      component:protocol_authorization
    },
    {
      base:'/alc/guide/',
      path: '/protocol_delegation',
      name: 'protocol_delegation',
      component:protocol_delegation
    },
    {
      base:'/alc/guide/',
      path: '/protocol_esignature',
      name: 'protocol_esignature',
      component:protocol_esignature
    },
    {
      base:'/alc/guide/',
      path: '/protocol_exceptions',
      name: 'protocol_exceptions',
      component:protocol_exceptions
    },
    {
      base:'/alc/guide/',
      path: '/protocol_qualified',
      name: 'protocol_qualified',
      component:protocol_qualified
    },
    {
      base:'/alc/guide/',
      path: '/protocol_rights',
      name: 'protocol_rights',
      component:protocol_rights
    },
    {
      base:'/alc/guide/',
      path: '/protocol',
      name: 'protocol',
      component:protocol
    },
    //  {
    //    base:'/alc/guide/',
    //    path: '/risk',
    //    name: 'risk',
    //    component:risk
    //  },
    {
      base:'/alc/guide/',
      path: '/coupon_regulation',
      name: 'coupon_regulation',
      component:coupon_regulation
    },
    {
      base:'/alc/guide/',
      path: '/protocol_riskreveal',
      name: 'protocol_riskreveal',
      component:protocol_riskreveal
    },
    {
      base:'/alc/guide/',
      path: '/common',
      name: 'common',
      component:common
    },
    // {
    //   base:'/alc/guide/',
    //   path: '/supp',
    //   name: 'supp',
    //   component:supp
    // },
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
  ]
})
