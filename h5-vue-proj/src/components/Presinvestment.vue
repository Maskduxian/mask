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
                 <p class="guide-step" :class="{ 'guide-step': true, 'jskh': bannerIndex === 5}">
                     <i class="one" :style="{backgroundImage: 'url('+this.one+')'}"></i>
                     投资前准备
                     <i class="two" :style="{backgroundImage: 'url('+this.two+')'}"></i>
                 </p>
                 <div class="guide-icon" :class="{ 'guide-step': true, 'jskh': bannerIndex === 5}">
                     <div  :class="{ 'xuhao': true, 'text-danger': bannerIndex === 0 }">1</div>&nbsp;
                     <img src="../assets/arrow2&5100ec9f.png">&nbsp;
                     <div  :class="{ 'xuhao': true, 'text-danger': bannerIndex === 1}">2</div>&nbsp;
                     <img src="../assets/arrow2&5100ec9f.png">&nbsp;
                     <div  :class="{ 'xuhao': true, 'text-danger': bannerIndex === 2 }">3</div>&nbsp;
                     <img src="../assets/arrow2&5100ec9f.png">&nbsp;
                     <div  :class="{ 'xuhao': true, 'text-danger': bannerIndex === 3 }">4</div>
                      <img src="../assets/arrow2&5100ec9f.png">&nbsp;
                     <div  :class="{ 'xuhao': true, 'text-danger': bannerIndex === 4 }">5</div>
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
  name: "Presinvestment",
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
      path:'/Noviceguide',
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
          title: "做好投资者的准备",
          explain: '"我的"－菜单栏目',
          src: require("../assets/step1&32ac6924.jpg")
        },
        {
          title: "完成风险测试",
          explain: "为了便于您了解自身的风险承受能力，选择合理的理财产品，请先完成风险测评",
          src: require("../assets/step2&29f5382a.jpg")
        },
        {
          title: "完成投资者基本信息",
          explain: "购买定期、公募基金产品前",
          src: require("../assets/step3&1f0ffb8d.jpg")
        },
        {
          title: "",
          explain: "",
          src: require("../assets/middle&ab56d0e8.jpg")
        },
         {
          title: "完成专业投资者认证",
          explain: "购买私募产品前需完成",
          src: require("../assets/step4&898250ac.jpg")
        },
          {
          title: "",
          explain: "",
          src: require("../assets/end&909bcd65.jpg")
        }
      ]
    };
  },
   mounted(){
        let self = this
    document.addEventListener('message', function (e) {
       let data = JSON.parse(e.data)
          if(data.goBack == 'next'){
               this.$router.push({path:'/Noviceguide'})
          }
            });
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
  /* margin-top: 1.706667rem; */
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
  /* width: 3740px; */
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
  font-size: 24px;
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
