<template>
    <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <encounterproblem @account="account" />
      </swiper-slide>
      <swiper-slide>
        <account :itemIndex="index"/>
      </swiper-slide>
   </swiper>
    </div>
</template>
<script>
import VueEvent from "../assets/VueEvent.js";
import encounterproblem from "./encounterproblem";
import account from "./account";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "test",
  components: {
    swiper,
    swiperSlide,
    encounterproblem,
    account
  },
  computed: {
    index(){
        return this.itemIndex
    },  
    // 拿到轮播图 DOM
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  data() {
    const self = this;
    return {
    itemIndex: 0,
      bannerIndex: 0,
      swiperOption: {
        initialSlide: 0, // 默认展示第零项
        on: {
          slideChangeTransitionEnd: function() {
            // 拿到当前轮播索引
            self.bannerIndex = this.activeIndex;
          }
        }
      }
    };
  },
  methods: {
    handlePrev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        // 滑动到第几个
        this.swiper.slideTo(this.currentIndex, 600);
      }
    },
    account(index){
        this.itemIndex = index 
        alert(this.itemIndex)
        this.swiper.slideTo(1, 600)
    }
  }
};
</script>
<style>
</style>


