<template>
    <div style="height:100%">
       <div class="hasHeader">
           <div class="main">
            <ul>
                <li>
                    <h3>什么是‘限定性集合资产管理计划’？</h3>
                    <p>限定性集合资产管理计划是集合客户的资产，由专业的证券公司/基金子公司进行管理，主要用于投资国债、国家重点建设债券、债券型证券投资基金、在证券交易所上市的企业债券、其他信用度高且流动性强的固定收益类金融产品；投资于业绩优良、成长型高、流动性强的股票等权益类证券以及股票型证券投资的资产，不得超过该计划资产净值的百分之二十，并应当遵循分散投资风险的原则。</p>
                </li>
                <li>
                    <h3>投资券商产品后是否可以撤单？封闭期可提前赎回？</h3>
                    <p>支付完成投资后不接受撤单申请。在封闭期内不可提前赎回。</p>
                </li>
                <li>
                    <h3>券商产品需要手动操作赎回？</h3>
                    <p>带【到期自动滚存】标记的券商产品，到期日需要手动操作赎回，未赎回则会滚存至下一期。没有带【到期自动滚存】标记的券商产品，到期系统会自动赎回，不需要手动操作。</p>
                </li>
                <li>
                    <h3>券商产品到期赎回后，资金什么时候能到账？</h3>
                    <p>一般会在2-3工作日到账，具体以银行到账时间为准。</p>
                </li>
                <li>
                    <h3>投资者预期收益如何计算？</h3>
                    <p>预期收益=投资金额×业绩基准（年化）×（实际计息天数/365），业绩基准（年化）详见产品公告，实际收益到期后兑付值为准。所述预测结果仅供客户参考，不构成对客户的承诺。</p>
                </li>
                <li>
                    <h3>购买券商产品是否能使用财迷卡和代金券？</h3>
                    <p>券商产品暂不支持使用财迷卡，同时也不支持使用代金券。</p>
                </li>
            </ul>
           </div> 
       </div>
    </div>
</template>
<script>
export default {
    name:'common',
    data(){
        return{

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
.hasHeader{
        /* top: 1.706667rem !important; */
        background: #f4f5fa;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin-top: -1px;
        padding-top: 1px;
        margin-bottom: -1px;
        width: auto;
        height: 100%;
}
.hasHeader .main{
    text-align: left;
    padding-top: 0.24rem;
} 
.hasHeader .main ul{
    border-top: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
    background: #fff;   
}
ul li {
    list-style: none;
}
.hasHeader .main ul li {
    padding: 0.346667rem 0.56rem 0.32rem 0.426667rem;
    border-bottom: 1px solid #f1f1f1;
}
ul li p{
    font-size: 26px;
    color: #9b9b9b;
    line-height:  0.506667rem;
    text-align: left;
}
ul li h3 {
    /* font-weight:normal; */
    font-size: 0.38rem;
    line-height: 0.72rem;
    color: #4a4a4a;
}

</style>
