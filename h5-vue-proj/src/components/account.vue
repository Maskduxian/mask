<template>
  <div>
    <!-- <div class="nav1" v-if="fh">
      <div class="leftSide" @click="fhui()" v-if="imgone">
        <i class="icon" :style="{backgroundImage: 'url('+this.Image+')'}"></i>
      </div>
      <div class="leftSide" @click="gb()" v-if="imgtwo">
        <i class="icon" :style="{backgroundImage: 'url('+this.Imag+')'}"></i>
      </div>
      <span>{{titlest}}</span>
    </div> -->
    <div class="hasHeader" v-if="lies">
      <div v-if="page == 0||page==3" class="zhus">
        <h3 class="wt">账户问题</h3>
        <ul class="uls" v-for="(matter,index) in ulist" :key="matter.index" @click="user(index)">
          <li>{{matter.problem}}
            <i class="iconfont icon-myicon-arrow-right2 more-icon2"></i>
          </li>
        </ul>
      </div>
      <div v-if="page == 1||page==3" class="yinh">
        <h3 class="wt">银行卡问题</h3>
        <ul class="uls" v-for="(matter,index) in bank" :key="matter.index" @click="house(index)">
          <li>{{matter.problem}}
            <i class="iconfont icon-myicon-arrow-right2 more-icon2"></i>
          </li>
        </ul>
      </div>
      <div v-if="page == 3" class="mrsh">
        <h3 class="wt">买入问题</h3>
        <ul class="uls" v-for="(matter,index) in more" :key="matter.index" @click="mr(index)">
          <li>{{matter.problem}}
            <i class="iconfont icon-myicon-arrow-right2 more-icon2"></i>
          </li>
        </ul>
        <h3 class="wt wtt">赎回问题</h3>
        <ul class="uls" v-for="(matter,index) in atone" :key="matter.index" @click="sh(index)">
          <li>{{matter.problem}}
            <i class="iconfont icon-myicon-arrow-right2 more-icon2"></i>
          </li>
        </ul>
      </div>
      <div v-if="page == 2||page==3" class="sez">
        <h3 class="wt">收益问题</h3>
        <ul class="uls" v-for="(matter,index) in income" :key="matter.index" @click="sr(index)">
          <li>{{matter.problem}}
            <i class="iconfont icon-myicon-arrow-right2 more-icon2"></i>
          </li>
        </ul>
      </div>
    </div>
    <!-- 弹出内容 -->
    <div class="hasHe-ader" v-if="pop">
      <div class="problemaccount">
        <div class="particulars">
          <h3>{{account.title}}</h3>
           <!--  <div class="new-bank" v-if="bles">
         <div class="platform">本平台支持以下银行:</div>   
          </div>-->
          <p>
            <span>{{account.text}}</span>
            <span v-if="sp">{{account.particular}}</span>
            <span v-if="sa" class="col">{{account.particular}}</span>
            <span>{{account.sm}}

            </span>
            <span>{{account.xq}}</span>
          </p>
          <table class="table2" v-if="tab">
            <tbody>
              <tr class="thb1">
                <th class="w1">基金类型</th>
                <th class="w2">支持赎回方式</th>
                <th class="w2">到账时间</th>
              </tr>
              <tr>
                <td rowspan="2" style="vertical-align: middle;">朝阳钱包</td>
                <td>快速赎回</td>
                <td>即时</td>
              </tr>
              <tr>
                <td>普通赎回</td>
                <td>2-3个工作日</td>
              </tr>
              <tr class="tdc2">
                <td>货币基金</td>
                <td>普通赎回</td>
                <td>2-3个工作日</td>
              </tr>
              <tr class="tdc2">
                <td>非货币型基金</td>
                <td>普通赎回</td>
                <td>2-7个工作日</td>
              </tr>
              <tr>
                <td>固定收益理财产品</td>
                <td>普通赎回</td>
                <td>3个工作日</td>
              </tr>
              <tr class="tdc2">
                <td>海外型（QDII等）基金</td>
                <td>普通赎回</td>
                <td>8-10个工作日</td>
              </tr>
            </tbody>
          </table>
           
        </div>
           <div @click="closeModel()" class="close-button" v-if="cmodel">
            <i class="icon iconfont icon-myicon-wrong2"></i>
          </div>
        <!-- closeModel -->
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "account",
  data () {
    return {
      page:0,
      currentIndex: 0,
      account: "",
      Image: require("../assets/icon-font-返回.png"),
      Imag: require("../assets/gbi.png"),
      imgone: true,
      imgtwo: false,
      sp: true,
      sa: false,
      zhanghu: false,
      yinhang: false,
      shouyi: false,
      gengduo: false,
      lies:true,
      pop: false,
      listy: true,
      bles: false,
      tab: false,
      hd: false,
      fh: true,
      cmodel: true,
      path: "./supp",
      titlest: "常见问题",
      ulist: [
        { problem: "1、朝阳爱理财安全吗？" },
        { problem: "2、任何时间都能开户？" },
        { problem: "3、如何开通朝阳爱理财账户？" },
        { problem: "4、忘记交易密码？" },
        { problem: "5、我的账户里的个人信息可以修改吗？" },
        { problem: "6、手机和支付密码一起丢失，账户里的资金还安全吗？" },
        { problem: "7、新注册账户登录失败？" },
        { problem: "8、登录密码忘记？" },
        { problem: "9、微信注册需要绑定手机号？" },
        { problem: "10、登录爱理财时提示更新版本？" }
      ],
      bank: [
        { problem: "1、开户可以不绑定银行卡？" },
        { problem: "2、能绑定多张银行卡？" },
        { problem: "3、朝阳爱理财支持银行以及各银行买入限额？" },
        { problem: "4、银行卡丢失，如何换卡？" },
        { problem: "5、网银支付遇到问题怎么办？" }
      ],
      income: [
        { problem: "1、什么是万份收益？" },
        { problem: "2、什么是最近7日收益率？" },
        { problem: "3、取出的资金当日还有收益吗？" },
        { problem: "4、平台的理财产品与同类产品收益对比哪个比较好？" }
      ],
      more: [
        { problem: "1、买入理财产品是否有手续费？" },
        { problem: "2、朝阳爱理财最低买入多少钱？" },
        { problem: "3、可以用别人的银行卡进行买入吗？" },
        { problem: "4、为什么会买入失败？" },
        { problem: "5、银行卡扣款成功后，产品份额未到账怎么办？" }
        //赎回
      ],
      atone: [
        { problem: "1、赎回需要手续费吗？" },
        { problem: "2、赎回资金多久到账？" },
        { problem: "3、赎回后资金未到账怎么办？" }
      ],
      // t弹出的
      accounts: [
        {
          title: "朝阳爱理财安全吗",
          text:
            "朝阳爱理财是朝阳永续旗下的线上理财平台，在安全保障方面一直严格要求。",
          particular:
            " 1、资质方面——中国证监会批准的基金销售机构，基金销售业务资格许可证号：000000368，尽可放心交易。",
          sm:
            " 2、资金方面——朝阳爱理财严格执行资金同卡进出原则，并由民生银行全程监管保障资金安全。 ",
          xq:
            " 3、数据方面——朝阳爱理财依托朝阳永续14年沉淀的金融数据处理技术，实现数据独特加密，确保交易、资产等账户数据安全。"
        },
        {
          title: "任何时间都能开户吗",
          text:
            "朝阳爱理财支持7*24小时开户，您可以在您任何方便的时候进行开户操作。",
          particular: " ",
          sm: "  ",
          xq: ""
        },
        {
          title: "如何开通朝阳爱理财账户",
          text:
            "产品详情页面点击“立即购买”、“认购”或“申购”，进入开户流程，并按页面提示，依次走完开户流程即可。",
          particular: " ",
          sm: " ",
          xq: ""
        },
        {
          title: "忘记交易密码",
          text:
            "朝阳爱理财是朝阳永续旗下的线上理财平台，在安全保障方面一直严格要求。在输入交易密码时，点击“忘记交易密码”，在引导下输入您的身份证、以及柜台预留手机号码，点击获取验证码，通过身份信息的验证后，即可在新的密码页重置您的交易密码。",
          particular: " ",
          sm: "",
          xq: ""
        },
        {
          title: "我的账户里的个人信息可以修改吗",
          text:
            "开户成功后真实姓名、身份证证件号码不支持修改。其他补充资料（邮箱、密保手机、通信地址等）支持修改。",
          particular: " ",
          sm: " ",
          xq: " "
        },
        {
          title: "手机和支付密码一起丢失，账户里的资金还安全吗",
          text: "安全。资金只可以取出到",
          particular: " 您帐户绑定的银行卡",
          sm:
            " 中，因此即使您的手机和支付密码一起丢失，他人仍然不能将资金取出到他处。如果遇到手机和支付密码一起丢失的情况，请第一时间联系我们的客服电话400-699-1888，我们会可及时协助冻结账户等手段保障账户的资金安全。 ",
          xq: ""
        },
        {
          title: "新注册账户登录失败",
          text:
            " 1、首先检查您输入的账号名称及登录密码是否正确。2、其次请确认您的手机号是否在朝阳财富网站或聚友宝注册过账户，若是请在登录/注册页面上点击【老用户】进行激活。3、如以上尝试还是登录失败请联系客服",
          particular: "",
          sm: "",
          xq: ""
        },
        {
          title: "登录密码忘记",
          text:
            "请在输入登录页面底部找到并点击【忘记密码】按钮，并按照页面提示进行密码找回。",
          particular: " ",
          sm: " ",
          xq: " "
        },
        {
          title: "微信注册需要绑定手机号",
          text:
            "为了确保微信注册账户的安全性，注册时需要绑定手机号码。原微信注册用户且未绑定手机号，再次登录时需要绑定手机号码。",
          particular: " ",
          sm: " ",
          xq: " "
        },
        {
          title: "登录爱理财时提示更新版本",
          text: "登录时页面提示更新版本，这时需要您更新后才能登录。",
          particular: " ",
          sm: "",
          xq: ""
        }
      ],
      yinh: [
        {
          title: "开户可以不绑定银行卡",
          text: "依照我国的法律法规等规定，每位用户需年满18周岁且至少绑定",
          particular: " 一张储蓄卡",
          sm: " （不可使用信用卡），同一银行仅能绑定一张储蓄卡。",
          xq: ""
        },
        {
          title: "能绑定多张银行卡",
          text:
            "为方便用户进行不同种类的交易，一个账户在朝阳爱理财上可以绑定多张银行卡，但同一银行仅能绑定一张银行卡。",
          particular: "",
          sm: "  ",
          xq: ""
        },
        {
          title: "",
          text: "",
          particular: " ",
          sm: " ",
          xq: ""
        },
        {
          title: "银行卡丢失，如何换卡",
          text:
            "为确保用户资金同卡进出，用户换卡需要特殊填写换卡申请表，并提供账户相关资料复印件给我们，待我们核实信息无误后，协助用户成功换卡。",
          particular: " ",
          sm: "",
          xq: ""
        },
        {
          title: "网银支付遇到问题怎么办",
          text:
            "请您确认您的网络是否正常。如果网银支付不成功，请重试或联系我们的客服协助，客服电话400-699-1888。 ",
          particular: " ",
          sm: " ",
          xq: " "
        }
      ],
      gduoone: [
        {
          title: "买入理财产品是否有手续费",
          text:
            "朝阳爱理财目前有：朝阳钱包、公募基金、私募基金三类产品，货币基金买入免手续费，其它类型产品买入会据不同产品费率而产生不同手续费。各类产品的手续费收取详情请留意页面提示。",
          particular: " ",
          sm: " ",
          xq: " "
        },
        {
          title: "朝阳爱理财最低买入多少钱",
          text: "朝阳爱理财支持最低1元起买，不同理财产品有不同的起购要求。",
          particular: " ",
          sm: "  ",
          xq: ""
        },
        {
          title: "可以用别人的银行卡进行买入吗",
          text: "进行买入操作的银行卡必须是本人的，不支持用他人银行卡买入。",
          particular: " ",
          sm: " ",
          xq: ""
        },
        {
          title: "为什么会买入失败",
          text:
            "朝阳爱理财是朝阳永续旗下的线上理财平台，在安全保障方面一直严格要求。在输入交易密码时，点击“忘记交易密码”，在引导下输入您的身份证、以及柜台预留手机号码，点击获取验证码，通过身份信息的验证后，即可在新的密码页重置您的交易密码。1、所用支付的银行卡余额不足 2、网络问题导致提交失败 3、券商日终确认失败",
          particular: " ",
          sm: "",
          xq: ""
        },
        {
          title: "银行卡扣款成功后，产品份额未到账怎么办",
          text:
            "1~2个工作日内基金公司会对买入交易进行份额确认，确认后，您即可在交易记录内看到确认份额。",
          particular: " ",
          sm: " ",
          xq: " "
        }
      ],
      gduotwo: [
        {
          title: "赎回需要手续费吗",
          text:
            "货币基金类产品赎回免手续费，其他理财产品赎回需要手续费，具体请留意赎回页面提示",
          particular: " ",
          sm: " ",
          xq: ""
        },
        {
          title: "赎回资金多久到账",
          text: "基金类型不同，到账时间有不同。具体如下表：",
          particular: "",
          sm: "",
          xq: ""
        },
        {
          title: "赎回后资金未到账怎么办",
          text:
            "如果您选择赎回后资金未按照页面提示的正常时间内到账，请查看产品公告或与我们客服取得联系。",
          particular: " ",
          sm: " ",
          xq: " "
        }
      ],
      syi: [
        {
          title: "什么是万份收益",
          text:
            "指每万份基金份额的每天的收益。例如客户持有1万份朝阳钱包份额，某日朝阳钱包的每万份收益为3.0920元，则当天客户的收益就是3.0920元。",
          particular: " ",
          sm: "  ",
          xq: " "
        },
        {
          title: "什么是最近7日收益率",
          text:
            "用最近七天（自然日）货币基金的每万份收益的平均收益折算出来的年收益率，并不是货币基金七日的收益",
          particular: " ",
          sm: "  ",
          xq: ""
        },
        {
          title: "取出的资金当日还有收益吗",
          text:
            "普通取现仍享受当天的收益。快速取现当天15:00前的申请不享受当天货币基金收益，15:00后的申请仍享受当天的收益。",
          particular: " ",
          sm: " ",
          xq: ""
        },
        {
          title: "平台的理财产品与同类产品收益对比哪个比较好",
          text:
            "货币基金的收益每天都会有波动。朝阳爱理财有着国内最优秀的风控和筛选机制，我们更注重为用户提供收益稳健的理财增值服务，提供的每一款产品都精挑细选，优中选优。",
          particular: " ",
          sm: "",
          xq: ""
        }
      ]
    };
  },
  mounted () {
    const { page } = this.$route.query;
    this.page =page;
    // mask+
    //  document.body.addEventListener('touchmove', function (e) {
    //     e.preventDefault() 
    // }, {passive: false})
      if(this.pop==fasle){document.addEventListener('touchmove', function (e) {
  e.returnValue = true;
  },{passive: false});}else{
    document.addEventListener('touchmove', function (e) {
  e.returnValue = true;
  },{passive: false});
  }
  },
  methods: {
    fhui () {
      this.$router.push({ path: "/encounterproblem" });
    },
    user (index) {
      this.currentIndex = index;
      this.pop = true;
      this.lies=false;
      this.account = this.accounts[index];
      this.titlest = "账户问题";
      this.imgone = false;
      if (this.currentIndex == 5) {
        this.sa = true;
        this.sp = false;
      }

      let data = {
        data: 'open'
      }
      window.postMessage(JSON.stringify(data));

          document.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, {passive: false})
    },
    house (index) {
      this.currentIndex = index;
      this.pop = true;
      this.lies=false;
      this.imgone = false;
      this.account = this.yinh[index];
      this.titlest = "银行卡问题";
      if (this.currentIndex == 0) {
        this.sa = true;
        this.sp = false;
      }

      if(this.currentIndex != 2){
        let data = {
          data: 'open'
        }
        window.postMessage(JSON.stringify(data));
      }
     

      document.addEventListener('touchmove', function (e) {
        e.preventDefault() 
      }, {passive: false})

      if (this.currentIndex == 2) {
        window.location.href ='https://dev.alc.com.cn/alc/guide/listsupport.html'
    //  this.$router.push({ path: "/support" });
     this.pop=false;//mask+
      }
      
    },
    gb () {
      this.imgone = true;
      this.imgtwo = false;
      this.titlest = "常见问题";
      this.pop = false;
      this.cmodel = true;
      this.bles = false;

      let data = {
        data: 'open'
      }
      window.postMessage(JSON.stringify(data));
    },
    sr (index) {
      this.currentIndex = index;
      this.pop = true;
      this.lies=false;
      this.account = this.syi[index];
      this.titlest = "收益问题";
      this.imgone = false;

      let data = {
        data: 'open'
      }
      window.postMessage(JSON.stringify(data));
      
          document.addEventListener('touchmove', function (e) {
        e.preventDefault() 
    }, {passive: false})
    },
    mr (index) {
      this.currentIndex = index;
      this.pop = true;
      this.lies=false;
      this.account = this.gduoone[index];
      this.titlest = "买入问题";
      this.imgone = false;
      
      let data = {
        data: 'open'
      }
      window.postMessage(JSON.stringify(data));
       
           document.addEventListener('touchmove', function (e) {
        e.preventDefault() 
    }, {passive: false})
    },
    sh (index) {
      this.currentIndex = index;
      this.pop = true;
      this.lies=false;
      this.account = this.gduotwo[index];
      this.tab = false;
      if (this.currentIndex == 1) {
        this.tab = true;
      }
      this.titlest = "赎回问题";
      this.imgone = false;

      let data = {
        data: 'open'
      }
      window.postMessage(JSON.stringify(data));
      
          document.addEventListener('touchmove', function (e) {
        e.preventDefault() 
    }, {passive: false})
    },
    closeModel () {
      this.lies=true;
      this.listy = true;
      this.pop = false;
      this.titlest = "常见问题";
      this.imgone = true;
      this.tab = false;
      this.sa = false;

      let data = {
        data: 'close'
      }
      window.postMessage(JSON.stringify(data));
      
        document.addEventListener('touchmove', function (e) {
  e.returnValue = true;
  },{passive: false});
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
div{
  height: 100%;
}
.nav1 {
  -webkit-box-flex: 1;
  height: 1.733333rem;
  line-height: 2.346667rem;
  width: 100%;
  background-color: #5471b5;
  position: fixed !important;
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
.nav1 span {
  color: #fff;
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
  padding-top:0.26667rem;
  width: 100%;
  height: 100%;
  text-align: center;
  background: #f4f5fa;
  overflow: scroll;
}
.hasHeader .zhus{
 height: 14.85rem;
}
.hasHeader .yinh{
  height: 8.12rem;
}
.hasHeader .mrsh{
  height: 13.4rem;
}
.hasHeader .sez{
height: 10rem;
}
.problem-account {
  padding-top: 1.706667rem !important;
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
.hasHe-ader {
  /* padding-top: 1.706667rem; */
  width: 100%;
  height: 100% !important;
  text-align: center;
  background: #f4f5fa;
  overflow: scroll;
}

.problemaccount {
  /* padding-top: 1.706667rem !important; */
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
.wt {
  font-size: 28px;
  height: 1.066667rem;
  line-height: 1.066667rem;
  padding-left: 0.453333rem;
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
  color: #4a4a4a !important;
  text-align: left;
  background-color: #fff;
}
.wtt {
  margin-top: 0.213333rem;
}
.uls {
  padding-left: 0.426667rem;
  border-bottom: 1px solid #f1f1f1;
  background-color: #fff;
  /* display: block; */
}
.uls li {
  /* display: block; */
  text-align: left;
  font-size: 26px;
  list-style: none;
  position: relative;
  height: 1.333333rem;
  line-height: 1.333333rem;
  color: #485e86;
  padding-right: 0.533333rem;
}
.uls li .more-icon2 {
  position: absolute;
  right: 0.346667rem;
  top: 0.13rem;
  color: #9b9b9b;
}
.particulars {
  overflow: scroll;
  /* height: 14rem; */
  padding: 1.066667rem 0.48rem 0;
  background-color: #dedede;
}
.particulars h3 {
  font-size: 32px;
  line-height: 1.093333rem;
  text-align: center;
  border-bottom: 1px solid #f1f1f1;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
.particulars p {
  font-size: 32px;
  padding-top: 0.48rem;
  line-height: 0.72rem;
  text-align: left;
}
.particulars .close-button {
  font-size: 42px;
  height: 1.333333rem;
  position: absolute;
  bottom: 1rem;
  margin-bottom: 0.2rem;
  width: 100%;
  text-align: center;
  color: #9b9b9b;
  bottom: 0rem;
  line-height: 1.333333rem;
}
.particulars .table2 {
  text-align: center;
  width: 100%;
  border: 1px solid #dedede;
}
.particulars .table2 .thb1 {
  height: 0.853333rem;
  background: #f1f1f1;
}
.particulars .table2 .tdc2 {
  background: #f9f9f9;
}
.particulars th {
  width: 2.2rem;
  line-height: 0.8rem;
  font-size: 28px;
  text-align: center;
  border: 1px solid #dedede;
}
.particulars tr {
  background: #fff;
}
.particulars td {
  width: 2.2rem;
  line-height: 0.8rem;
  color: #4a4a4a;
  height: 0.813333rem;
  font-size: 24px;
  text-align: center;
  border: 1px solid #dedede;
}
.particulars .table2 .w2 {
  font-size: 24px;
  width: 2.533333rem;
}
.particulars .table2 .w1 {
  width: 3.866667rem;
}
/* .new-bank {
  font-size: 28px;
}
.new-bank .platform {
  text-align: left;
  padding-top: 0.4rem;
  margin-bottom: 0.266667rem;
  color: #4a4a4a;
  height:5%;
}
.new-bank .bank {
  vertical-align: middle;
}
.new-bank th {
  background: #9b9b9b;
  color: #fff;
  height: 0.986667rem;
  line-height: 0.986667rem;
  text-align: center;
  border: 1px solid #fff;
}
.new-bank td {
  background: #f2f3f7;
  height: 0.986667rem;
  line-height: 0.986667rem;
  text-align: center;
  color: #4a4a4a;
  border: 1px solid #fff;
} */
.close-button {
  height: 1.333333rem;
  position: absolute;
  bottom: 1rem;
  margin-bottom: 0.2rem;
  width: 100%;
  text-align: center;
  color: #9b9b9b;
  bottom: 0rem;
  line-height: 1.333333rem;
}
.close-button .icon {
  font-size: 42px;
}
.new-bank td i {
  margin-right: 0.08rem;
}
.col {
  color: red;
}
</style>


