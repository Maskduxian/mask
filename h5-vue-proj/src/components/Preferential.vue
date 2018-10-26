<template>
    <div>
         <!-- <div class="nav1">
        <div class="leftSide" @click="fhui()" >
          <i class="icon" :style="{backgroundImage: 'url('+this.Image+')'}"></i>
          </div>
         新手宝典
        </div> -->
         <div class="hasHeader">
               <div class="one"><img src="../assets/step1&9df696dd.jpg" class="guide-step6">
                <img src="../assets/step2&1de21797.jpg" class="guide-step6"> 
                <img src="../assets/step3&82192b7a.jpg" class="guide-step6">
                 <img src="../assets/step4&97a606e5.jpg" class="guide-step6">
                 </div>
             </div>
         </div>
</template>
<script>
export default {
  name: "Periodicproduct",
  data() {
    return {
      path:'./Noviceguide',
      Image: require("../assets/icon-font-返回.png"),
    
  }
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
  /* margin-top: 1.706667rem; */
  background: white;
  text-align: center;
  background: #f4f5fa;
}
.guide-step6{
    width: 100%;
    height: block !important;
    vertical-align: middle;
}
</style>
