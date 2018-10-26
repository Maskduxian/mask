<template>
    <div>
         <div class="hasHeader protocol scroll-content" ng-class="{'hasHeaderX':isX}" has-bouncing="false" overflow-scroll="false">
        <div class="scroll">
        <h1>电子签名约定书</h1>
        <h2>甲方（姓名/名称）：{{name}}</h2>
        <h2>证件号码：{{card_no}}</h2>
        <h2>乙方: 上海朝阳永续基金销售有限公司</h2>
        <p>根据《中华人民共和国合同法》、《中华人民共和国电子签名法》关于民事合同使用数据电文、电子签名的规定，采用电子签名签订的电子签名合同、风险揭示书具有与纸质合同、纸质风险揭示书同等的法律效力。以此作为法律依据，本着提高合同签署效率的目的，甲乙双方就甲方参与乙方所管理的场外市场产品过程中使用电子签名事宜，经协商达成如下一致意见：</p>
        <p>一、甲乙双方同意自本约定书签订之日起，在甲方参与乙方所管理的所有使用电子签名合同的场外市场产品过程中，使用电子签名。甲方通过身份验证登陆乙方指定的网络系统，确认同意接受相关电子签名合同、风险揭示书或其他文书的，视为签署合同、签署风险揭示书或其他文书，与在纸质合同、纸质风险揭示书或其他文书上手写签名或者盖章具有同等的法律效力，无须另行签署纸质合同或纸质风险揭示书或其他文书。</p>
        <p>二、甲方应妥善保管密码，经甲方密码登陆甲方账户后的所有操作视同甲方本人行为，甲方承担由此产生的一切法律后果。</p>
        <p>三、本约定书一经签署对各方即具有法律约束力，将适用于签署乙方推出的所有使用电子签名合同的场外市场产品。</p>
        <p>四、投资有风险，请谨慎选择。委托人投资由管理人所管理的场外市场产品可能面临市场风险、流动性风险、管理风险、不可抗力因素导致的风险等风险。管理人承诺以诚实守信、审慎尽责的原则管理和运用所管理的场外市场产品，但不保证场外市场产品本金一定不受损失，不保证一定盈利，也不保证最低收益，同时管理人的过往业绩并不构成对场外市场产品将来投资结果的承诺。投资者购买场外市场产品前，应仔细阅读产品合同、说明书、风险揭示书等法律文件，了解产品的具体情况。投资者应综合考虑自身的资产与收入状况、投资经验、风险偏好，选择与自己风险承受能力相匹配的产品。</p>
        <p>五、因本约定书引起的或与本约定书有关的任何争议，甲乙双方可以自行协商解决，协商不成的，甲乙双方一致同意提请中国证券业协会、或者乙方所属地方协会的调解机构进行调解。调解不成的，甲乙双方一致同意提交上海仲裁委员会并按其仲裁规则进行仲裁。</p>
        <h2 style="text-align: right;">{{year}}年{{month}}月{{date}}日</h2>
        <p>备注：</p>
        <p>1、临柜签署本约定书时，甲方应提供身份证明资料。</p>
        <p>个人投资者的证明文件包括：身份证；</p>
        <p>机构投资者的证明文件包括：有效企业营业执照副本及其复印件（加盖公章）或有效注册登记证书副本及其复印件（加盖公章）、法定代表人授权委托书（加盖公章）并由法定代表人签字或盖章、经办人有效身份证件及其复印件。</p>
        <p>甲方应提供真实的身份证明资料并遵守监管的相关规定，如有违反，乙方有权停止全部或部分本约定书约定的电子签名服务，并有权不与其签订或解除相关场外市场产品合同及其他文书。</p>
        <p>2、合同、说明书及风险揭示书标准文本查询：推广机构营业网点放置了合同、说明书及风险揭示书标准文本供客户阅读，同时在上海证券网站提供合同、说明书及风险揭示书标准文本，客户应仔细查阅后方可签署风险揭示书及电子签名合同。</p>
        <p>3、电子签名合同签署情况查询：</p>
        <p>(1)前往推广机构营业网点提供相关证件请柜台工作人员协助查询；</p>
        <p>(2)登录推广机构指定的网络系统查询电子签名合同的签署情况；</p>
        <p>(3)登录上海证券网站进行查询或拨打上海证券客服热线，请客服人员协助查询。</p>
        <p>4、甲乙双方均认可在乙方或推广机构提供的电子信息平台上以电子方式签署本约定书的效力。</p>
        <p>5、乙方有权对本约定书进行修订。修订前已签约本约定书的，无须再次签约，如继续根据本约定书约定的电子签名事项签署相关合同的，视为同意履行修订后的约定书。</p>
        <p>6、乙方的软（硬）件系统出现下列任一状况而无法正常运作，致使甲方无法通过本约定书约定的方式进行电子签名或其他操作的，乙方均不承担任何违约或赔偿责任，该状况包括但不限于：</p>
        <p>（1）在乙方提供的网站维护期间。</p>
        <p>（2）电信设备出现故障不能进行数据传输的。</p>
        <p>（3）因台风、地震、海啸、洪水、停电、战争、恐怖袭击等不可抗力之因素，造成签名系统障碍不能执行业务的。</p>
        <p>（4）由于黑客攻击、电信部门和信息技术依赖的相关部门、单位技术调整或故障、网站升级等原因而造成的服务中断或者延迟。</p>
        <p>7、本合同有效期内，因国家相关主管部门颁布、变更的法律、法规、规章、规定、指引、通知、政策及其他规范性文件等致使甲方无法按照本约定书约定的方式进行电子签名或其他操作的，不视为乙方违约，各方可根据相关规定变更协议内容或提前终止本合同。</p>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:"protocol_esignature",
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

