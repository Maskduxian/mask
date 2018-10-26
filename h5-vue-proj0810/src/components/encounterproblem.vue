<template>
    <div>
         <div class="nav1">
        <div class="leftSide" @click="fhui()" >
          <i class="icon" :style="{backgroundImage: 'url('+this.Image+')'}"></i>
          </div>
         客服与反馈
        </div>
          <div class="hasHeader">
            <div class="scroll">
                <p>任何疑问或建议,可通过以下方式咨询</p>
                <ul>
    			<li @click="online()">
    				<img class="consult-l" src="../assets/online.png">
    				<p>在线客服</p>
    			</li>
    			<li @click="doDial()">
    				<img class="consult-r" src="../assets/dianh.png">	
    				<p>电话客服</p>
    			</li>
    		</ul>
            </div>
            <div class="problem">
    		<p>猜您遇到以下问题</p>
    		<ul v-for="(item,index) in list" :key="item.index"  @click="account(index)">
    			<li>{{item.title}}<i class="iconfont icon-gengduo more-icon2"></i></li>
    		</ul>
    	</div>
          </div>
    </div>
</template>
<script>
import VueEvent from '../assets/VueEvent.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name:"encounterproblem",
    data(){
        return{
            Image: require("../assets/icon-font-返回.png"),
            path:'./account',
            list:[
                {title:'账户问题'},
                {title:'银行卡问题'},
                {title:'收益问题'},
                {title:'更多常见问题'},
            ],
        } 
    },
     methods:{
   fhui(){
    // this.$router.push({path:`${dizhi}`})
   },
   account(index){
       this.$emit('account', index)
         this.$router.push({path:'/account', query:{index}});
   }
  }
}
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
  text-align: center;
  background: #f4f5fa
}
.scroll{margin-top: 1.706667rem !important;}
.hasHeader .scroll p,.hasHeader .problem p{
    text-align: left;
    font-size: 14px;
    line-height: 1.36rem;
    padding-left: 0.426667rem;
    color: #9B9B9B;
}
.hasHeader .scroll ul{
    background: #fff;
    border-top: 1px solid #F1F1F1;
    border-bottom: 1px solid #F1F1F1;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    padding-top: 0.533333rem;
    
}
.hasHeader .scroll ul li{
        list-style: none;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    text-align: center;
    }
.hasHeader .scroll ul li img{
    width: 1.6rem;
    height: 1.6rem;
    margin-left: 1.866667rem;
    display: block;
}
.hasHeader .scroll ul li p{
    font-size: 28px;
    line-height: 1;
    margin-top: 0.4rem;
    margin-bottom: 0.533333rem;
    color: #4A4A4A;
    text-align: center;
}
.problem ul {
    border-bottom: 1px solid #F1F1F1;
    padding-left: 0.426667rem;
    background: #fff;
    }
.problem ul li {
    text-align:left;
    font-size: 32px;
    position: relative;
    height: 1.306667rem;
    line-height: 1.306667rem;
    -padding-left: 0.426667rem;
    color: #4A4A4A;
    list-style: none;
}
.problem ul li .more-icon2 {
    position: absolute;
    right: 0.426667rem;
    color: #9B9B9B;
}
</style>

