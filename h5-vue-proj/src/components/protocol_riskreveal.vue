<template>
    <div>
     <div class="hasHe-ader" v-if="pop">
      <div class="problemaccount">
        <div class="particulars">
         <div class="hasHeader">
        <h1>私募投资基金风险揭示书</h1>
        <p>尊敬的投资者：</p>
        <p>投资有风险。当您认购或申购私募基金时，可能获得投资收益，但同时也面临着投资风险。您在做出投资决策之前，请仔细阅读本风险揭示书和基金合同、公司章程或者合伙协议(以下统称基金合同)，充分认识本基金的风险收益特征和产品特性，认真考虑基金存在的各项风险因素，并充分考虑自身的风险承受能力，理性判断并谨慎做出投资决策。</p>
        <p>根据有关法律法规，基金管理人及投资者分别作出如下承诺、风险揭示及声明：</p>
        <h2>一、基金管理人承诺</h2>
        <p>(一)私募基金管理人保证在募集资金前已在中国证券投资基金业协会(以下简称中国基金业协会)登记为私募基金管理人,并取得管理人登记编码。</p>
        <p>(二)私募基金管理人向投资者声明，中国基金业协会为私募基金管理人和私募基金办理登记备案不构成对私募基金管理人投资能力、持续合规情况的认可;不作为对基金财产安全的保证。</p>
        <p>(三)私募基金管理人保证在投资者签署基金合同前已(或已委托基金销售机构)向投资者揭示了相关风险;已经了解私募基金投资者的风险偏好、风险认知能力和承受能力;已向私募基金投资者说明有关法律法规，说明投资冷静期、回访确认的制度安排以及投资者的权利。</p>
        <p>(四)私募基金管理人承诺按照恪尽职守、诚实信用、谨慎勤勉的原则管理运用基金财产，不保证基金财产一定盈利，也不保证最低收益。</p>
        <h2>二、风险揭示</h2>
        <p>(一)特殊风险揭示</p>
        <p>[具体风险应由管理人根据私募基金的特殊性阐明]   若存在以下事项，应特别揭示风险：</p>
        <p>1、基金合同与中国基金业协会合同指引不一致所涉风险;</p>
        <p>2、私募基金未托管所涉风险;</p>
        <p>3、私募基金委托募集所涉风险</p>
        <p>4、私募基金外包事项所涉风险;</p>
        <p>5、私募基金聘请投资顾问所涉风险;</p>
        <p>6、私募基金未在中国基金业协会履行登记备案手续所涉风险。</p>
        <p>(二)一般风险揭示</p>
        <p>1、资金损失风险</p>
        <p>基金管理人依照恪尽职守、诚实信用、谨慎勤勉的原则管理和运用基金财产，但不保证基金财产中的认购资金本金不受损失，也不保证一定盈利及最低收益。</p>
        <p>本基金属于[相应评级水平]风险投资品种，适合风险识别、评估、承受能力[相应评级水平]的合格投资者。</p>
        <p>2、基金运营风险</p>
        <p>基金管理人依据基金合同约定管理和运用基金财产所产生的风险，由基金财产及投资者承担。投资者应充分知晓投资运营的相关风险，其风险应由投资者自担。</p>
        <p>3、流动性风险</p>
        <p>本基金预计存续期限为基金成立之日[ ]起至[存续期限](包括延长期(如有))结束并清算完毕为止。在本基金存续期内，投资者可能面临资金不能退出带来的流动性风险。    根据实际投资运作情况，本基金有可能提前结束或延期结束，投资者可能因此面临委托资金不能按期退出等风险。</p>
         </div>
         </div>
       </div>
     </div>
 </div>
</template>
<script>
export default {
    name:'protocol_riskreveal',
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
div {
  height: 100%;
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
  background: #f4f5fa;
}
.particulars {
  overflow: scroll;
  /* height: 14rem; */
  padding: 1.066667rem 0.48rem 0;
  background-color: #dedede;
}
.hasHeader{
    margin: 0.266667rem 0;
    padding-left: 0.426667rem;
    padding-right: 0.48rem;

        top: 1.706667rem;
    background: #f4f5fa;
}
.hasHeader h1 {
    line-height: 98px;
    margin-bottom: 8px;
    font-size: 32px;
    text-align: center;
}
.hasHeader P {
    text-align: left;
     line-height: 44px;
     font-size: 28px;
     text-indent: 2em;
    color: #9b9b9b;
}
.hasHeader h2 {
         line-height: 86px;
         font-size: 28px;
         text-align: left; 
}
</style>


