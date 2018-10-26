<template>
    <div>
            <!-- <div class="hasHe-ader" v-if="pop">
      <div class="problemaccount">
        <div class="particulars"> -->
              <div class="hasHeader">
        <div class="cont">
        	<div class="explain-card">
        		<h3><span class="title">体验金</span>使用说明</h3>
        		<ul>
        			<li><span>体验金是朝阳爱理财平台设立的一个专门用于提供给平台用户进行平台项目投资体验的虚拟理财金；</span></li>
        			<li><span>体验金适用于投资平台上的新手产品，项目到期体验金由平台自动收回，投资收益归用户所有；</span></li>
        			<li><span>体验金只在有效期内可用，不可拆分，不可提现，逾期作废；</span></li>
        			<li><span>如用户在使用体验金之前购买了平台的其他定期产品，则体验金将失效，无法使用。</span></li>
        		</ul>
        	</div>
        	<div class="explain-card">
        		<h3><sapn class="title">财迷卡</sapn>使用说明</h3>
        		<ul>
        			<li><span>在各类活动中所得全部“现金奖励“金额将充值进财迷卡中；</span></li>
        			<li><span>财迷卡中的金额可抵扣部分购买非新手定期产品时的相应金额；</span></li>
        			<li><span>财迷卡中的金额不支持提现；</span></li>
        			<li><span>财迷卡可与代金券叠加使用；</span></li>
					<li><span>财迷卡中的金额为永久有效；</span></li>
					<li><span>每笔投资可使用财迷卡数额将有所限制，限额根据实际运营情况而定。</span></li>
        		</ul>
        	</div>
        	<div class="explain-card">
        		<h3><sapn class="title">代金券</sapn>使用说明</h3>
        		<ul>
        			<li><span>代金券适用于除新手产品外的所有指定定期产品，使用代金券可以抵扣部分投资本金；</span></li>
        			<li><span>代金券不能兑换现金，可与财迷卡叠加使用；</span></li>
        			<li><span>代金券应在载明的有效期内使用，过期作废，且应在载明的项目范围内使用；</span></li>
					<li><span>每张代金券仅能使用一次，且每笔购买仅能使用一张代金券。</span></li>
        		</ul>
        	</div>
        </div>
		<p>以上规则朝阳爱理财将根据实际运营情况进行调整</p>
    </div>
        </div>
        <!-- </div>
        </div>
    </div> -->
</template>
<script>
export default {
    name:'coupon_regulation',
    data(){
        return{
         pop:true,
        }
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
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.hasHe-ader {
  padding-top: 1.706667rem;
  width: 100%;
  height: 100% !important;
  text-align: center;
  background: #f4f5fa;
  overflow: scroll;
}

.problemaccount {
  overflow: scroll !important;
  background: #f4f5fa !important;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  margin-top: -1px;
  padding-top: 1px;
  margin-bottom: -1px;
  width: auto;
  height: auto;
}
.problemaccount div {
  padding-top: 0.213333rem;
  /* background: #f4f5fa; */
}
.particulars {
  overflow: scroll;
  /* height: 14rem; */
  padding: 1.066667rem 0.48rem 0;
  /* background-color: #dedede; */
}
.hasHeader{
        padding-top: 0.266667rem;
        top: 1.706667rem;
    background: #f4f5fa;
}
.hasHeader .cont {
    padding: 0.293333rem 0.2rem 0.426667rem 0.64rem;
    background: #FFFFFF;
    height: 100%;
    border-top: 1px solid #F1F1F1;
}
.hasHeader .cont .explain-card {
    margin-bottom: 0.466667rem;
}
.hasHeader .cont .explain-card h3 {
    text-align: left;
    font-size: 28px;
    line-height: 0.853333rem;
    color: #4A4A4A;
}
.hasHeader .cont .explain-card h3 .title {
    color: #E16253;
}
.hasHeader .cont .explain-card ul {
    list-style-position: inside;
    margin-left: 0.453333rem;
        list-style: none;
}
.hasHeader .cont .explain-card ul li {
    text-align: left;
    font-size: 24px;
    color: #E16253;
    list-style: disc;
}
.hasHeader .cont .explain-card ul li span {
    text-align: left;
    font-size: 24px;
    color: #6D6D6D;
    line-height: 0.64rem;
}
.hasHeader p {
    font-size: 24px;
    text-align: center;
    color: #3D3D3D;
    line-height: 1.066667rem;
}
</style>
