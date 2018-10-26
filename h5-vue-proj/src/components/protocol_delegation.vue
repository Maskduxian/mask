<template>
    <div>
        <div class="hasHeader protocol scroll-content" ng-class="{'hasHeaderX':isX}" has-bouncing="false" overflow-scroll="false">
        <div class="scroll">
        <h1>充值代扣委托书通用版</h1>
        <h2>授权人姓名：{{name}}</h2>
        <h2>证件类型：身份证</h2>
        <h2>证件号码：{{card_no}}</h2>
        <h2>朝阳爱理财用户名：{{login_name}}</h2>
        <h2>日期：{{year}}年{{month}}月{{date}}日</h2>
        <p>被授权人：上海朝阳永续基金销售有限公司（“朝阳爱理财”）就授权人向其朝阳爱理财用户名项下账户（“授权人朝阳爱理财账户”）充值的相关事宜向朝阳爱理财授权如下：</p>
        <p>一、授权人授权朝阳爱理财根据授权人的充值指令从本授权书第二条所述的授权人的银行账户通过银行或朝阳爱理财指定的第三方支付机构（以下统称为“第三方机构”）主动扣收本授权书第二条所述的等值于充值金额的款项，用于向授权人朝阳爱理财账户充值（“充值服务”）。</p>
        <p>二、授权人的银行账户及充值金额如下：</p>
        <h2>户名：{{bankacconame}}</h2>
        <h2>账号：{{bankacco}}</h2>
        <h2>开户银行：{{bankname}}</h2>
        <h2>充值金额：{{money>0?money.toFixed(2):''}}元（含第三方机构需收的手续费（如有））</h2>
        <p>三、授权人知晓并确认，本授权书系使用授权人朝阳爱理财用户名、以网络在线点击确认的方式向朝阳爱理财发出。 本授权书自授权人在朝阳爱理财网站点击确认时生效，由朝阳爱理财通过第三方机构从授权人的银行账户中代扣相当于充值金额的款项。 授权人已经通过本授权书确认代扣款项的银行账户信息，在代扣的过程中，朝阳爱理财根据本授权书提供的银行账户信息进行相关操作，无需再向授权人确认银行账户信息和密码。本授权书一经生效即不可撤销。授权人确认并承诺，朝阳爱理财根据本授权书所采取的全部行动和措施的法律后果均由授权人承担。</p>
        <p>四、授权人知晓并同意,受授权人银行账户状态、银行、第三方支付机构及网络等原因所限, 本授权书项下充值可能会通过多次代扣交易方可完成,朝阳爱理财不对充值服务的资金到账时间做任何承诺。 朝阳爱理财或第三方机构仅根据本授权书所述的授权人的授权进行相关操作, 朝阳爱理财或第三方机构无义务对其根据本授权书所采取的全部行动和措施的时效性和结果承担任何责任。</p>
        <p>特此授权。</p>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'protocol_delegation',
    data(){
        return{
         name:'',
         card_no:"",
         login_name:"",
         year:"",
         month:"",
         date:"",
        bankacconame:"",
        bankacco:"",
         bankname:"",
         money:"",
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
*{
    margin: 0px;
    padding: 0px;
}
.protocol {
    margin: 0.266667rem 0;
    padding-left: 0.426667rem;
    padding-right: 0.48rem;
}
.hasHeader {
    top: 1.706667rem;
    background: #f4f5fa;
}
.scroll-content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow:  scroll;
    margin-top: -1px;
    padding-top: 1px;
    margin-bottom: -1px;
    width: auto;
    height: auto;
}
.scroll {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    text-size-adjust: none;
    -webkit-transform-origin: left top;
    transform-origin: left top;
}
.scroll h1{
 text-align: center;
 font-size: 36px;
 margin-top: 20px;
 margin-bottom: 10px;
 font-family: none;
}
.protocol h2 {
    text-align: left;
    line-height: 86px;
        font-size: 28px;
}
.protocol p {
    line-height: 44px;
    font-size: 28px;

   text-align: left;
    text-indent: 2em;
    color: #9b9b9b;
}
</style>
