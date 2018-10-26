<template>
    <div>
    <div class="hasHeader protocol scroll-content" ng-class="{'hasHeaderX':isX}" has-bouncing="false" overflow-scroll="false">
        <!-- <div class="scroll"> -->
        <h1>合格投资者承诺</h1>
        <p>本人承诺：</p>
        <p>本人是具备相应风险识别能力和风险承担能力，投资于单只私募基金的金额不低于100 万元且符合下列相关标准的个人/单位：</p>
        <p>（1）金融资产不低于300 万元或者最近三年个人年均收入不低于50 万元的个人；或净资产不低于1000 万元的单位；</p>
        <p>（2）符合法律、行政法规及中国证监会关于合格投资者其他要求。</p>
        <p>若管理人或销售机构认为必要，本人将根据要求提供相关资料，证明上述承诺内容真实无误。</p>
        <!-- <div> -->
    </div>
    </div>
</template>
<script>
export default {
    name:'protocol_qualified',
    data(){
        return{}
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
     overflow-y:hidden;
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
    overflow: hidden;
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
.protocol h1 {
    line-height: 58px;
    margin-bottom: 16px;
    font-size: 32px;
     text-align: center;
} 
.protocol p {
    line-height: 44px;
    font-size: 28px;
    text-align: left;
    text-indent: 2em;
    color: #9b9b9b;
}
</style>
