<template>
    <div> 
          <div class="hasHe-ader" v-if="pop">
      <div class="problemaccount">
        <div class="particulars">
         <div class="new-bank" v-if="bles">
            <div class="platform">本平台支持以下银行:</div>
            <table style="width: 100%;">
              <tbody>
                <tr>
                  <th colspan="2" rowspan="2" class="bank">银行</th>
                  <th colspan="5">单笔限额</th>
                </tr>
                <tr>
                  <th colspan="1">私募</th>
                  <th colspan="1">公募</th>
                  <th colspan="1">定期</th>
                </tr>
                <tr v-for='xs in lists' :key='xs.id'>
                  <td colspan="2" class="bank">
                    <i class="img biconfont " :class="['icon-'+ xs.bank_no]" :style="{ color: xs.bg_color.length > 1? xs.bg_color:'#ccc'}" style="position: relative; top: 3px; font-size: 23px;color:#0b266b"></i>{{xs.bank_name}}</td>
                  <td colspan="1" class="bank">{{xs.sm_limit_per_payment? xs.sm_limit_per_payment+'万': '不限'}}</td>
                  <td colspan="1" class="bank">{{xs.gm_limit_per_payment ? xs.gm_limit_per_payment+'万': '不限'}}</td>
                  <td colspan="1" class="bank">{{xs.dq_limit_per_payment&&xs.peony_bank_state==1 ? xs.dq_limit_per_payment+'万': (xs.peony_bank_state==2?xs.peony_bank_state_desc:'不限')}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
          </div>
          </div>
    </div>
</template>
<script>
export default {
  name: "supp",
  data() {
    const self = this;
    // const font=this;
    return {
      pop: true,
      bles: true,
      lists: [],
      activeId: 0
    };
  },
  mounted() {
    let self = this;
    document.addEventListener("message", function(e) {
      let data = JSON.parse(e.data);
      if (data.goBack == "next") {
        self.$router.push({ path: "/accout" });
      }
    });
    //银行
    this.bankForm();
  },
  methods: {
    message(e) {
      let that = this;
      document.addEventListener("message", function(e) {
        this.$router.push({ path: "/accout" });
      });
    },
    sendData(data) {
      if (window.originalPostMessage) {
        window.postMessage("next");
      } else {
        throw Error("none");
      }
    },
    bankForm() {
      let _this = this;
      let formData = new FormData();
      formData.append("token", "2c25d11b9b3043e288f2748e40f4fe4d");
      formData.append("termina_type", "");
      formData.append("clientid", "6136560d18df4c1ea8ae96fdde677842");
      fetch("https://dev.alc.com.cn/bcappzx//account/openacco/bankForm.json", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData
      }).then(res => {
        if (res.ok) {
          res.json().then(data => {
            const mydata = data.data.bankChannelList;
            let bg_color;
             let bank_no;
             let bank_icon;
              let bank_name;
              let gm_limit_per_payment;
              let sm_limit_per_payment;
              let dq_limit_per_payment;
              let peony_bank_state_desc;
            mydata.forEach(element => {
              bg_color=element.bg_color;
              bank_no=element.bank_no;
              bank_icon=element.bank_icon;
              bank_name=element.bank_name;
              gm_limit_per_payment=element.gm_limit_per_payment;
              sm_limit_per_payment=element.sm_limit_per_payment;
              dq_limit_per_payment=element.dq_limit_per_payment;
              peony_bank_state_desc=element.peony_bank_state_desc;
              _this.lists.push(element);
            });
            console.log(this.lists);
          });

        }
      });
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
  background: #f4f5fa;padding-top: 0.213333rem;
  background: #f4f5fa;
}
.particulars {
  overflow: scroll;
  /* height: 14rem; */
  padding: 1.066667rem 0.48rem 0;
  background-color: #dedede;
}
table {
      border-collapse: collapse;
    border-spacing: 0;

  border-color: #fff !important;
   
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: grey;

    border-spacing: 0;
    border-collapse: collapse;
}
.new-bank {
  font-size: 28px;
}
.new-bank .platform {
  text-align: left;
  padding-top: 0.4rem;
  margin-bottom: 0.266667rem;
  color: #4a4a4a;
  height: 5%;
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
  border: 2px solid #fff;
}
.new-bank td {
  background: #f2f3f7;
  height: 0.986667rem;
  line-height: 0.986667rem;
  text-align: center;
  color: #4a4a4a;
  border: 2px solid #fff;
}
.new-bank td i {
  margin-right: 0.08rem;
}
tbody tr{
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font: inherit;
    font-size: 100%;

    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}
</style>

