<template>
    <div>
         <!-- <div class="nav1">
        <div class="leftSide" @click="fhui()">
          <i class="icon" :style="{backgroundImage: 'url('+this.Image+')'}"></i>
          </div>
         新手宝典
        </div> -->
         <div class="hasHeader">
             <div>
                 <p class="guide-step" :class="{ 'guide-step': true, 'jskh': bannerIndex === 4}">
                     <i class="one" :style="{backgroundImage: 'url('+this.one+')'}"></i>
                     极速开户
                     <i class="two" :style="{backgroundImage: 'url('+this.two+')'}"></i>
                 </p>
                 <div class="guide-icon" :class="{ 'guide-step': true, 'jskh': bannerIndex === 4}">
                     <div  :class="{ 'xuhao': true, 'text-danger': bannerIndex === 0 }">1</div>&nbsp;
                     <img src="../assets/arrow2&5100ec9f.png">&nbsp;
                     <div  :class="{ 'xuhao': true, 'text-danger': bannerIndex === 1}">2</div>&nbsp;
                     <img src="../assets/arrow2&5100ec9f.png">&nbsp;
                     <div  :class="{ 'xuhao': true, 'text-danger': bannerIndex === 2 }">3</div>&nbsp;
                     <img src="../assets/arrow2&5100ec9f.png">&nbsp;
                     <div  :class="{ 'xuhao': true, 'text-danger': bannerIndex === 3 }">4</div>
                  </div>
                  <div class="Wholepagecutting">
                    <swiper :options="swiperOption" ref="mySwiper" class="cutting">
                       <swiper-slide  class="slide" v-for="item in Topspeed" :key="item.id">
                         <p class="guide-title1">{{item.title}}</p>
                         <p class="guide-title2">{{item.explain}}</p>
                         <div class="guide-container">
                           <img :src="item.src" class="guide-img">
                         </div> 
                       </swiper-slide>
                    </swiper>
                 </div>  
              </div>
             </div>
         </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "fastaccountopening",
   components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    },
  },
  data() {
    const self = this
    return {
      path:'./Noviceguide',
       bannerIndex: 0,
      swiperOption: {
        initialSlide: 0,
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",
        on: {
          slideChangeTransitionEnd: function() {
            self.bannerIndex = this.activeIndex //切换结束时，告诉我现在是第几个slide
          }
        }
      },
      Image: require("../assets/icon-font-返回.png"),
      one: require("../assets/titleRight&06d009d2.png"),
      two: require("../assets/titleLeft&4c6f6216.png"),
      Topspeed: [
        {
          title: "找到开户入口",
          explain: '"我的"－顶部位置',
          src: require("../assets/step1&588a8f44.jpg")
        },
        {
          title: "提交开户资料",
          explain: "通过身份证验证",
          src: require("../assets/step2&00cb792c.jpg")
        },
        {
          title: "找到开户信息",
          explain: "银行卡验证信息",
          src: require("../assets/step3&261f64ff.jpg")
        },
        {
          title: "输入交易密码",
          explain: "输入此前设置的交易密码",
          src: require("../assets/step4&4f4fbd73.jpg")
        },
          {
          title: "",
          explain: "",
          src: require("../assets/end&548159e4.jpg")
        }
      ]
    };
  },
  mounted(){
    let self = this
    document.addEventListener('message', function (e) {
          let data = JSON.parse(e.data)
          if(data.goBack == 'next'){
            self.$router.push({path:'/Noviceguide'});
          }
   })
  },
  methods:{
      message ( e ) {
            let that = this
            document.addEventListener('message', function (e) {
               this.$router.push({path:'/Noviceguide'})
            });
        },
        sendData ( data ) {
            if (window.originalPostMessage) { 
                window.postMessage('next');
            } else {
                throw Error('none');
            }
        },
    //   fhui(){
    // this.$router.push({path:'/Noviceguide'})
    // }
    }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.nav1 {
  -webkit-box-flex: 1;
  height: 1.733333rem;
  line-height: 2.346667rem;
  width: 100%;
  background-color: #5471b5;
  position: fixed;
  top: 0;
  text-align: center;
  font-size: 38px;
  color: aliceblue;
  z-index: 999;
}
.nav1 .leftSide {
  position: absolute;
  text-align: left;
  width: 1.333333rem;
  padding-left: 0.426667rem;
  margin-top: 0.026667rem;
  height: 1.733333rem;
  z-index: 2;
}
.nav1 .leftSide .icon {
  font-style: normal;
  -webkit-font-smoothing: antialiased;
}
.icon {
  display: inline-block;
  height: 0.6rem;
  width: 0.6rem;
  background-size: 100% 100%;
}
.hasHeader {
  width: 100%;
  background: white;
  text-align: center;
}

.hasHeader div .guide-step {
  padding-top: 0.32rem;
  padding-bottom: 0.32rem;
  text-align: center;
  font-size: 0.48rem;
  color: #666;
}
.hasHeader div .guide-step .one {
  display: inline-block;
  width: 0.346667rem;
  height: 0.346667rem;
  background-size: 100% 100%;
  margin-right: 0.213333rem;
}
.hasHeader div .guide-step .two {
  display: inline-block;
  width: 0.346667rem;
  height: 0.346667rem;
  background-size: 100% 100%;
}
.icon {
  color: #7f9eef;
}
.hasHeader div .guide-icon .xuhao {
  width: 44px;
  height: 44px;
  line-height: 44px;
  display: inline-block;
  border-radius: 50%;
  background: #cdcfd3;
  color: #fff;
  text-align: center;
}
.hasHeader div .guide-icon img {
  display: inline-block;
  width: 0.666667rem;
  -webkit-user-drag: none;
}
.Wholepagecutting {
  visibility: visible !important;
  position: relative;
  visibility: hidden;
  overflow: hidden;
}
.Wholepagecutting .cutting {
  position: relative;
  height: 100%;

  display: flex;
}
.Wholepagecutting .cutting .slide {
  
  width: 750px;
  left: 0px;
  transition-duration: 0ms !important;
  position: relative;
  display: block !important;
  float: left;
  width: 100%;
  height: 100%;
  vertical-align: top;
  display: inline-block;
}
.Wholepagecutting .cutting .slide .guide-title1 {
  font-size: 32px;
  padding-top: 0.4rem;
  color: #323232;
  font-weight: 600;
}
.Wholepagecutting .cutting .slide .guide-title2 {
  font-size: 28px;
  color: #f5a623;
  padding-top: 0.133333rem;
  padding-bottom: 0.16rem;
  font-weight: 600;
  padding-left: 0.64rem;
  padding-right: 0.64rem;
}
.guide-container {
  margin-left: 1.6rem;
  margin-right: 1.6rem;
}
.Wholepagecutting .cutting .slide .guide-container img {
  width: 100%;
  display: block;
  -webkit-user-drag: none;
}
.text-danger{
  background:#7f9eef !important
}
.jskh{
  visibility:hidden;
}
</style>
