<template>
  <div id="app">
    <router-view/>
      <!-- :class="[isIos ? 'xn-ios':'']" :name="transitionName"  class="iosx" -->
   <!-- <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
    <router-view v-transition class="router-view"/>
      </transition> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import encounterproblem from "./components/encounterproblem.vue"
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'App',
    //   data(){
    //       return {
    //       encounterproblem:false,
    //    }
    // },
  
    // components:{
    //    encounterproblem 
    // },
    // computed: {
    //     direction: {
    //         get() { return this.$store.state.direction },
    //         set(value) { this.$store.commit('UPDATE_DIRECTION', value) }
    //     },
    // },
    // mounted(){
    //           this.getDevice()
    //       },
    // methods: {
    //           getDevice(){
    //               if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
    //                   this.isIos = true;
    //               }
    //           }
    //       },
    // watch: {//使用watch 监听$router的变化
    //         $route(to, from) {
    //              //如果to的索引值为0，不添加任何动画；如果to索引大于from索引,判断为前进状态,反之则为后退状态
    //              if(to.meta.index > 0){
    //                  if( to.meta.index < from.meta.index){
    //                      this.transitionName = 'slide-right';
    //                  }else{
    //                      this.transitionName = 'slide-left';
    //                  }
    //              }else if(to.meta.index == 0 && from.meta.index > 0){
    //                  this.transitionName = 'slide-right';
    //              }
    //      }
    //  }
 }
 
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all .8s;
    height: 100%;
    top: 0;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }

  .vux-pop-out-enter {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }

  .vux-pop-out-leave-active {
    opacity: 1;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-enter {
    opacity: 1;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-leave-active {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }
 /* .slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 16s ease-in-out;
  position: absolute;
  width:100%;
  left:0;
  -webkit-box-flex: inherit;
} 
 .slide-right-enter {
   
  opacity: 1;
  transform:translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
   opacity: 1;
  transform:translate3d(100%, 0, 0);
}
.slide-left-enter {
   opacity: 1;
 transform: translate3d(100%,0,0);
}
.slide-left-leave-active {
   opacity: 1;
  transform: translate3d(-100%,0,0);
}  */
</style>
