<template>
<div>
<!-- <div class="nav1">
      <div class="leftSide" ><i class="icon"  v-bind:style="{backgroundImage: 'url('+ this.jiant+')'}"></i></div>
         关于朝阳爱理财
        </div> -->
        <div class="mainbody">
          <div class="ailicai">  <h3 class="titlet">关于爱理财</h3></div>
          <div class="content">
              <p class="details">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;朝阳爱理财是由朝阳永续旗下冰创信息公司全新打造的一款依托十四年金融大数据积累，提供全品类金融产品，支持一站式便捷交易的线上理财服务平台。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;朝阳爱理财APP秉承着“<b>爱生活就来爱理财</b>”的普惠金融宗旨，致力于为广大有投资需求的用户，提供专业、高效、安全的投资理财顾问服务。</p>
           </div>

          
            <div class="ailicai" style="margin-top:0px !important;"><p></p><h3 class="titlet">产品服务</h3></div>
        <div class="productliist" v-for="item  in levelist" :key="item.id">
            <div class="t-img"><img :src="item.src"/></div>
            <div class="text">
             <h4>{{item.title}}</h4>
             <p>{{item.text}}</p>
            </div>
        </div>

         <div class="ailicai" style="margin-top:0px !important;"><p></p><h3 class="titlet">背景介绍</h3></div>
         <div class="content">
             <p class="details">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上海冰创信息科技有限公司作为朝阳永续旗下的全资子公司，涵盖活期钱包、优选定期、公募基金、高端私募、保险5大理财服务，旨在为用户提供安全、便捷、丰富选择的一站式理财生活平台。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上海朝阳永续基金销售有限公司（简称“朝阳财富”），注册资金1亿元，是一家专注于资本市场产品研究、评价、募资、咨询等服务的财富管理机构。控股母公司是朝阳永续信息技术股份有限公司，其他主要股东包括朝阳永续、国金证券等多家业内知名公司。公司拥有证监会批准的独立基金销售资质，所有投资牌照一应俱全。</p>
             <div class="logo" v-bind:style="{backgroundImage: 'url('+ this.backgroundImage+')'}">
             </div>
         </div>
          <div class="ailicai" style="margin-top:0px !important;"><p></p><h3 class="titlet">朝阳永续大事记</h3></div>
          <div class="breaking">
              <ul>
                  <li class="lis" v-for="(uls,index) in list" :key="uls.id">
                     <div class="quan">
                         <div class="xian" :class="{'xiantwo':index>0}"></div>
                         <div class="yuan"></div>
                     </div>
                     <div class="jian">
                         <h3>{{uls.date}}</h3>
                         <p>{{uls.texts}}</p>
                     </div>
                 </li>
              </ul>
          </div>
     </div>
    </div>
</template>
<script type="text/javascript">
export default {
  name: "Strengthguarantee",
  data() {
    return {
      backgroundImage: require("../assets/logo&123ff71e.png"),
      jiant: require("../assets/icon-font-返回.png"),
      levelist: [
        {
          src: require("../assets/in1&bbf5caf3.png"),
          title: "朝阳钱包",
          text: "1元也能快乐理财，轻松上手，充值0费用，取现秒到账。"
        },
        {
          src: require("../assets/in2&cc811a1a.png"),
          title: "高端理财",
          text: "专业风控评审，产品优中选优，支持大额实时在线交易。"
        },
        {
          src: require("../assets/in3&4bfc4ea0.png"),
          title: "优选定期",
          text: "精选定期类固收产品，多种期限随心选，轻松增值抗通胀。"
        },
        {
          src: require("../assets/in4&98cdcb34.png"),
          title: "智能投顾",
          text: "量化预测市场趋势，智能推荐投资组合，助您实现全球资产配置。"
        },
        {
          src: require("../assets/in5&d8fae7e2.png"),
          title: "金牌服务",
          text:
            "金融大咖、私募大佬直播分享投资理念，多位精英理财师提供VIP服务。"
        }
      ],
      list: [
        {
          id: 1,
          date: "2016-06",
          texts: "蚂蚁金服入股朝阳永续"
        },
        {
          id: 2,
          date: "2015-06",
          texts: "朝阳财富获证券投资基金销售业务证书"
        },
        {
          id: 3,
          date: "2014-12",
          texts: "向日葵投资获私募基金管理人牌照"
        },
        {
          id: 4,
          date: "2012-10",
          texts: "朝阳永续与《福布斯》联合推出“中国最佳分析师”系列榜单"
        },
        {
          id: 5,
          date: "2006-05",
          texts: "朝阳永续举办首届中国私募基金风云榜"
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
  text-align: center;
  font-size: 38px;
  color: aliceblue;
  top: 0;
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
.mainbody {
  height: 1.733333rem;
  display: block;
  padding-top: 0.293333rem;
  margin-bottom: -1px;
  top: 1.706667rem;
  /* margin-top: 1.733333rem; */
  width: 100%;
  background: #f4f5fa;
}
.ailicai{
  background-color: white;
  margin-top: 22px;
  border-bottom: 1px solid #f1f1f1;
}
.ailicai p{
   height: 0.293333rem;
   background: #f4f5fa;
}
.mainbody .ailicai .titlet {
  display: block;
  height: 98px;
  line-height: 98px;
  width: 100%;
  color: #465b76;
  padding-left: 0.466667rem;
  text-align: left;
  box-sizing: border-box;
}
.content {
  background-color: white;
  padding: 0.426667rem 0.56rem 0.426667rem 0.426667rem;
  border-bottom: 1px solid #f1f1f1;
  box-sizing: border-box;
  width: 100%;
}
.content p {
  text-align: left;
  font-size: 0.346667rem;
  line-height: 0.64rem;
}
.content .logo {
  width: 8.933333rem;
  height: 1.173333rem;
  background-size: cover;
  margin-top: 0.186667rem;
}
.productliist {
  background-color: white;
  padding: 0.4rem 0 0.4rem 0.453333rem;
  border-bottom: 1px solid #f1f1f1;
}
.productliist .t-img {
  float: left;
  vertical-align: baseline;
  width: 1.36rem;
}
.productliist .t-img img {
  display: block;
  width: 1.066667rem;
  height: 1.066667rem;
  background-size: cover;
}
.productliist .text {
  display: inline-block;
  width: 7.546667rem;
}
.productliist .text h4 {
  text-align: left;
  height: 0.746667rem;
  line-height: 0.746667rem;
  font-size: 0.4rem;
  margin: 0;
}
.productliist .text p {
  text-align: left;
  font-size: 0.346667rem;
  color: #9b9b9b;
  line-height: 0.586667rem;
}
.breaking {
  padding: 0.266667rem 0.733333rem 0 0.426667rem;
}
.breaking ul {
  list-style: none;
}
.breaking ul .lis {
    display: -webkit-box;
    display: flex;
  vertical-align: baseline;
}
.breaking ul .lis .quan {
      -webkit-box-flex: 0;
    flex: 0;
  position: relative;
  float: left;
  width: 0.053333rem;
  padding: 0 0.106667rem;
  height: 1.92rem;
}
.breaking ul .lis .quan .xian {
  margin-top: 0.186667rem;
  box-sizing: border-box;
  height: 1.733333rem;
  background: #ededed;
  width: 0.053333rem;
}
.xiantwo {
  margin-top: 0 !important;
  height: 2.56rem !important;
}
.breaking ul .lis .quan .yuan {
  top: 0.186667rem;
  float: left;
  position: absolute;
  left: 0px;
  width: 0.266667rem;
  height: 0.266667rem;
  background: #92a1cc;
  border-radius: 50%;
}
.breaking ul .lis .jian {
  -webkit-box-flex: 1;
    flex: 1;
  text-align: left;
  float: left;
  width: 8.293333rem;
  height: 1.92rem;
  padding-left: 0.2rem;
}
.breaking ul .lis .jian h3 {
  font-size: 26px;
  line-height: 0.64rem;
}
.breaking ul .lis .jian p {
  line-height: 0.64rem;
  color: #8b8b8b;
  font-size: 28px;
}
</style>