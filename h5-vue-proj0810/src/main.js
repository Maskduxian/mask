// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/styles/iconfont.css'
import store from './store'
import vueg from 'vueg'  
import 'vueg/css/transition-min.css'


 const options={
   duration: '.4', //转场动画时长，默认为0.3，单位秒
   firstEntryDisable: false, //值为true时禁用首次进入应用时的渐现动画，默认为false
   firstEntryDuration: '.6', //首次进入应用时的渐现动画时长，默认为.6
   forwardAnim: 'fadeOutRight', //前进动画，默认为fadeInRight
   backAnim: 'fadeOutRight', //后退动画，默认为fedeInLeft
   sameDepthDisable: false, //url深度相同时禁用动画，默认为false
   tabs: [{
     name:'home'
   },{
     name:'my'
   }], //默认为[]，'name'对应路由的name,以实现类似app中点击tab页面水平转场效果，如tabs[1]到tabs[0]    ，会使用backAnim动画，tabs[1]到tabs[2]，会使用forwardAnim动画
   tabsDisable: false, //值为true时，tabs间的转场没有动画，默认为false
   shadow:false, //值为false，转场时没有阴影的层次效果
   disable: false, //禁用转场动画，默认为false，嵌套路由默认为true
   nuxt: false //若使用后端渲染框架Nuxt，需要将此设为true，默认为false
 }    

 Vue.use(vueg, router, options) //←注意这一句应该在router实例化之后
 Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach(function (to, from, next) {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('UPDATE_DIRECTION', {direction: 'forward'})
    } else {
      store.commit('UPDATE_DIRECTION', {direction: 'reverse'})
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('UPDATE_DIRECTION', {direction: 'forward'})
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
