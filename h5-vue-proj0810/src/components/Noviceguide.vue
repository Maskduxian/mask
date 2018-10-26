<template>
    <div>
        <!-- <div class="nav1">
        <div class="leftSide" >
          <i class="icon" :style="{backgroundImage: 'url('+ this.Image+')'}"></i>
          </div>
         新手指引
        </div> -->
         <div class="hasHeader">
             <div class="guide-title">
               <img src="../assets/guideTop&amp;34de82d3.jpg">
               <p>快速掌握各种功能 畅享体验投资流程</p>
             </div>
             <ul class="guide-list">
                 <li v-for="item in list" :key="item.id" @click="dji(item.path)">
                     <div class="guideList-first"><i :style="{backgroundImage: 'url('+first+')'}">{{item.serialnumber}}</i></div>
                     <div class="guideList-second"><p class="first">{{item.title}}</p><p class="second">{{item.texts}}</p></div>
                     <div class="guideList-third"><i class="iconfont icon-gengduo first"></i>
                      <i class="second" :style="{backgroundImage: 'url('+second+')'}"></i>
                      </div>
                 </li>  
             </ul>   
                <div class="button-t">
      <img src="../assets/guideBottom&78867dca.jpg"></div>     
    </div>
  </div>
</template>
<script>
export default {
  name: "Noviceguide",
  data() {
    return {
      Image: require("../assets/icon-font-返回.png"),
      first:require("../assets/tip1&da31e080.png"),
      second:require("../assets/tip2&d058c8af.png"),
      list:[
          {
           serialnumber:"01",
           title:"极速开户",
           texts:"10s极速开户，解锁投资新姿势",
           path: '/fastaccountopening'
          },
          {
           serialnumber:"02",
           title:"投资前准备",
           texts:"风险测评、投资者认证，整装待发",
           path: '/Presinvestment'
          },
          {
           serialnumber:"03",
           title:"股票开户",
           texts:"极速开户，尊享财富",
          },
          {
           serialnumber:"04",
           title:"定期产品",
           texts:"严格风控，一分钟便捷持有",
           path:'/Periodicproduct'
          },
          {
           serialnumber:"05",
           title:"朝阳钱包",
           texts:"海量基金，智能推荐",
            path:'/burse'
          },
          {
           serialnumber:"06",
           title:"私募、高端理财",
           texts:"大额支付，安全交易",
           path:'/Buyprivateequity'
          },
          {
           serialnumber:"07",
           title:"优惠权益",
           texts:"拿收益、省本金，福利多多",
           path:"./Preferential"
          }
      ]
    };
  },
  methods:{
   dji(dizhi){
    this.$router.push({path:`${dizhi}`})
   }
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
.button-t{
      margin-left: .453333rem;
    margin-right: .453333rem;
    text-align: center;
}
.button-t img{
      width: 100%;
      display: block;
}
.hasHeader {
  width: 100%;
  margin-top: 1.706667rem;
  background: #f4f5fa;
  text-align: center;
}
.hasHeader .guide-title {
  -webkit-box-flex: inherit;
  margin-left: 0.453333rem;
  margin-right: 0.453333rem;
  text-align: center;
}
.hasHeader .guide-title img {
  width: 100%;
  display: block;
}
.hasHeader .guide-title p {
  color: #9b9b9b;
  font-size: 0.426667rem;
  padding-bottom: 0.746667rem;
}
.guide-list {
  display: block;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  list-style: none;
}
.guide-list li {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  background: #fff;
  height: 2.133333rem;
  margin-bottom: 0.266667rem;
  box-shadow: 0 0.053333rem 0.106667rem 0 rgba(155, 155, 155, 0.2);
  border-radius: 0.053333rem;
}
.guide-list li .guideList-first {
    display: flex;
  align-items: center;
  -webkit-align-items: center;
  float: left;
  /* webkit-box: 1; */
   -webkit-flex: 1;
    flex: 1;
    position: relative;
}
.guide-list li .guideList-first i {
  font-size: 16px;
  display: block;
  width: 1.066667rem;
  height: 0.96rem;
  background-size: 100% 100%;
  position: absolute;
  top: 0.213333rem;
  color: #fff;
  line-height: 1.013333rem;
  font-weight: 700;
}
.guide-list li .guideList-second {
    flex: 4;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-justify-content: center;
    /* webkit-box: 1; */
    -webkit-flex: 1;
    flex: 5;
}
.guide-list li .guideList-second .first{
    font-size: 32px;
    color: #323232;
    padding-bottom: .266667rem;
    text-align: left;
}
.guide-list li .guideList-second .second{
     font-size: 24px;
     color: #b1b1b1;
     text-align: left;
}
.guide-list li .guideList-third{
    display: -webkit-box;
    flex-direction: column;
    justify-content: center;
    -webkit-justify-content: center;
    position: relative;
     /* webkit-box: 1;  */
    -webkit-flex: 1;
    flex: 1;
}
.guide-list li .guideList-third .first{
     font-size: 32px !important;
     width: 57.0.3125rem;
     height: 0.5335rem;
    background-size: 100%  100%;
}
.guide-list li .guideList-third .first i{
   font-size:32px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #9b9b9b;
}
.guide-list li .guideList-third .second{
    display: block;
    width: .56rem;
    height: .586667rem;
    background-size: 100% 100%;
    position: absolute;
    bottom: -.026667rem;
    right: 0;
}
</style>


