<template>
    <div>
      <div class="hasHeader protocol scroll-content" ng-class="{'hasHeaderX':isX}" has-bouncing="false" overflow-scroll="false">
        <p>朝阳爱理财作为交易服务平台进行信息发布，不对任何投资人及/或任何交易提供任何担保，无论是明示、默示或法定的。朝阳爱理财平台提供的各种信息及资料仅供参考，投资人应依其独立判断做出决策。投资人据此进行投资交易的，产生的投资风险由投资人自行承担，朝阳爱理财不承担任何责任。</p>
    </div>
    </div>
</template>
<script>
export default {
    name:'protocol_exceptions',
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
.protocol p {
    text-align: left;
    font-size: 28px;
    line-height: 44px;
    text-indent: 2em;
    color: #9b9b9b;
}
</style>
