<template>
    <div>
        <!-- <div class="nav1">
        <div class="leftSide" ><i class="icon"  v-bind:style="{backgroundImage: 'url('+ this.backgroundImage+')'}"></i></div>
         实力保障
        </div> -->
        <div class="hasHeader">
            <div class="publictop"  v-bind:style="{backgroundImage: 'url('+ this.anquanbaozhang+')'}"></div>
            <div class="honor">
                <h3 class="title">我们的资质</h3>
                <div class="certificates">
                    <ul class="list">
                        <li v-for="(item, index) in imglists" :key="index">
                            <div class="imglist"><img :src="item.src"></div>
                            <p>{{item.title}}</p>
                        </li>
                    </ul>
                </div>
            
        </div>
        <div class="honor">
             <h3 class="title">我们的荣誉</h3>
             <div class="certificates">
                    <ul class="list" style="width:25.8rem">
                        <li v-for="item in ryu" :key="item.index">
                            <div class="imglist"><img :src="item.src"/></div>
                            <p>{{item.title}}</p>
                        </li>
                    </ul>
            </div>    
        </div>  
        <div class="honor"> 
            <h3 class="title">服务体系</h3>
            <div class="system">
                <h3>专业、完善的理财顾问服务体系</h3>
                <p>确定产品意向、揭示风险、确认购买流程、介绍售后服务</p>
                <div class="system-t"  :style="{backgroundImage: 'url('+ this.systemtx+')'}"></div>
             </div>
        </div>
     </div>
    </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      imglists: [
        {
          src: require("../assets/ziz3&9c8d64de.jpg"),
          title: "基金销售业务资格证"
        },
        {
          src: require("../assets/ziz1&ee9e7934.jpg"),
          title: "经营证券期货业务许可证"
        },
        {
          src: require("../assets/ziz2&ef3d77f4.jpg"),
          title: "增值电信业务经营许可证"
        },
        {
          src: require("../assets/ziz4&32766f69.jpg"),
          title: "广播电视节目制作经营许可证"
        },
        {
          src: require("../assets/ziz5&21303968.jpg"),
          title: "网络文化经营许可证"
        }
      ],
      backgroundImage: require("../assets/icon-font-返回.png"),
      anquanbaozhang: require("../assets/group&e327d64c.png"),
      systemtx:require("../assets/aboutBitmap&fb61d0d5.png"),
      ryu: [
        {
          src: require("../assets/honorBitmap_6&e33c5fa1.png"),
          title: "中国金融交易技术大会2016中国最佳金融数据服务商"
        },
        {
          src: require("../assets/honorBitmap_7&39cc741e.png"),
          title: "中国金融交易技术大会中国最佳金融数据创新应用奖"
        },
        {
          src: require("../assets/honorBitmap_1&08e4923c.png"),
          title: "最佳互联网基金理财创新奖"
        },
        {
          src: require("../assets/honorBitmap_2&77655fb9.png"),
          title: "全国财富管理机构TOP10最具发展潜力财富管理机构"
        },
        {
          src: require("../assets/honorBitmap_4&32d7d93e.png"),
          title: "金贝奖 2015优质品牌建设财富管理公司"
        },
        {
          src: require("../assets/honorBitmap_5&f64409b5.png"),
          title: "2015中国独立财富最佳品牌奖"
        }
      ]
    };
  },
    mounted(){
    let that = this
    document.addEventListener('message', function (e) {
        if (window.originalPostMessage) { 
          window.postMessage(JSON.stringify({goBack: 'next'}));
        } else {
          throw Error('none');
        }
    });
  },
  methods:{
       message ( e ) {
            let that = this
            document.addEventListener('message', function (e) {
               this.$router.push({path:'/Noviceguide'})
               that.sendData()
            });
        },
        sendData ( ) {
            if (window.originalPostMessage) { 
                window.postMessage('next');
            } else {
                throw Error('none');
            }
        },
        //新用户点击事件
    // dji(dizhi){
    //   // if(dizhi) 
    //   this.$router.push({path:`${dizhi}`})
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
  top: 1.706667rem;
  background: #f4f5fa;
  overflow: auto;
}
.hasHeader .publictop {
  /* margin-top: 1.706667rem; */
  height: 8.8rem;
  background-size: cover;
}
.honor{
overflow-x: hidden;
}
 .certificates::-webkit-scrollbar {
        display: none;
    }
.honor .title {
   background: #fff;
  font-size: 30px;
  margin-top: 0.213333rem;
  height: 1.306667rem;
  width: 100%;
  line-height: 1.306667rem;
  padding-left: 0.466667rem;
  box-sizing: border-box;
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
  color: #465b76;
  text-align: left;
}
.certificates {
   background: #fff;
  display: block;
  margin-top: -1px;
  overflow: auto !important;
  padding: 0.373333rem 0 0.48rem 0.106667rem;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  border-bottom: 1px solid #f1f1f1;
}
.certificates .list {
  width: 20.8rem;
  position: relative;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 0;
  margin-bottom: 20px;
}
.certificates .list:last-child {
  margin-bottom: 0;
}
.certificates .list li {
  display: inline-block;
  list-style: none;
  width: 3.733333rem;
  float: left;
  margin-left: 0.4rem;
  /* color: #4a4a4a; */
}
.list li .imglist {
  width: 3.733333rem;
  height: 2.666667rem;
  margin-bottom: 0.2rem;
  background-size: cover;
}
.imglist img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.list li p {
  width: 100%;
  line-height: 0.48rem;
  font-size: 0.293333rem;
  text-align: center;
}
.system {
   background: #fff;
  padding: 0.226667rem 0.293333rem 0.4rem 0.48rem;
}
.system h3 {
    text-align: left;
  line-height: 0.8rem;
  font-size: 0.4rem;
}
.system p {
  width: 8.72rem;
  font-size: 0.346667rem;
  line-height: 0.586667rem;
  color: #9b9b9b;
}
.system .system-t{
    width: 9.386667rem;
    height: 3.253333rem;
    background-size: cover;
    margin-top: .186667rem;
}
</style>


