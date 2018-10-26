<template>
    <div>
       <div class="riskArea">
      <div>
        <p class="indexTitle">
          <span>{{currentIndex + 1}}</span>
          <span>/{{totalrecords}}</span>
        </p>
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
          <swiper-slide v-for="swip in questions" :key='swip.id'>
            <div ref="listGroup" class="bounceInRight">
              <p class="riskquestion">{{swip.question_content}}</p>
              <ul class="riskAnswers">
                <li v-for="(item,index) in swip.questionOptions" :key='item.index' @click="handleSelected(item, index)">
                  <div>{{item.option_content}}</div>
                  <span v-if="item.checked">√</span>
                </li>
              </ul>
            </div>
          </swiper-slide>
        </swiper>
        <div class="riskBack">
          <span @click="handlePrev" class="backTrue" v-if="currentIndex !== 0">
            ＜ 上一题
            <i class="iconfont icon-myicon-arrow-left"></i>
          </span>
          <span @click="handleNext" class="nextFalse" :class="{ 'nextTrue': canNext, 'nextFalse': !canNext }" v-if="currentIndex !== questions.length -1">
            下一题 ＞
            <i class="iconfont icon-myicon-arrow-right"></i>
          </span>
        </div>
        <div v-if="buttonVisible">
          <a class="formButton-light" @click="handleConfirm">确认</a>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
    name:"risk",
    data(){
        return{
   currentIndex: 0, // 初始第几题
        totalrecords: 0, // 总条数
        questions: [], // 所有题目 (13道题)
        answers: [], // 传给后台的答案
        swiperOption: {
          initialSlide: 0,
          prevButton: ".swiper-button-prev",
          nextButton: ".swiper-button-next"
        }
        }
    },
        computed: {
        canNext() {
          let list = []
          if (this.questions.length && this.questions[this.currentIndex]) {
            list = this.questions[this.currentIndex].questionOptions.filter(item => {
              return item.checked === true
            })
          }
          return list.length > 0
        },
        swiper() {
          return this.$refs.mySwiper.swiper
        },
        // 标题
        question_content() {

          const ques = this.questions[this.currentIndex] || {}
          return ques.question_content
        },
        // 题目列表
        questionOptions() {
          const ques = this.questions[this.currentIndex] || {}
          return ques.questionOptions
        },
        // 展示按钮
        buttonVisible() {
          let list = []
          if (this.questions.length && this.questions[this.currentIndex]) {
            list = this.questions[this.currentIndex].questionOptions.filter(item => {
              return item.checked === true
            })
          }
          return ((this.currentIndex + 1) === this.totalrecords - 0) && list.length > 0
        }
      },
    mounted(){
         const self = this
        document.addEventListener('message', function (e) {
          if(!e) return
          let data = JSON.parse(e.data);
          self.fetchData(data)
        });
        this.fetchData();
    },
    methods:{
         callback() {},
        // 获取数据
        async fetchData(data) {
          let _this = this;
      let formData = new FormData();
      formData.append("token", "2c25d11b9b3043e288f2748e40f4fe4d");
      formData.append("type","1");
      formData.append("termina_type", "");
      formData.append("clientid", "6136560d18df4c1ea8ae96fdde677842");
       fetch("https://dev.alc.com.cn/bcappzx/account/risk/getModifyRiskForm.json", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData
      }).then(res=>{
         if (res.ok) {
          res.json().then(data => {
              this.questions = data;
               this.totalrecords = this.questions.length
          })
         }
      })
          // 题目(13道题)
         // this.questions = data
          // 总体数
         // this.totalrecords = this.questions.length
        },
        // 选中答题
        handleSelected(item, index) {
          const { option_no, question_no } = item
          // 排他
          this.questions[this.currentIndex].questionOptions.forEach((it) => {
            it.checked = false
          })
          // 选中
          item.checked = true
          if (this.currentIndex < this.totalrecords - 1) {
            this.currentIndex++;
            this.swiper.slideTo(this.currentIndex, 600);
          }
          if (this.currentIndex <= this.totalrecords - 1) {
            this.answers[this.currentIndex] = {
              index: this.currentIndex, // 第几题
              question_no, // 题目编号
              option_no, // 选项编号
            }
          }
          // 触发数组更新
          this.questions.splice(this.currentIndex,0)
        },
        // 上一题
        handlePrev() {
          if (this.currentIndex > 0) {
            this.currentIndex--
              this.swiper.slideTo(this.currentIndex, 600);
          }
        },
        // 下一题
        handleNext() {
          // 是否可以下一题
          if (!this.canNext) {
            return
          }
          // 排他
          this.questions[this.currentIndex].questionOptions.forEach((it) => {
            it.checked
          })
          if (this.currentIndex < this.totalrecords - 1) {
            this.currentIndex++
              this.swiper.slideTo(this.currentIndex, 600);
          }
        },
        //  确认
        handleConfirm() {
          let list = []
          this.answers.length && this.answers.forEach(item => {
            list.push(`${item.question_no} : ${item.option_no}`)
          })
          console.log(JSON.stringify(list))
          if (window.originalPostMessage) { 
              window.postMessage(JSON.stringify(list));
          } else {
              throw Error('postMessage接口还未注入');
          }
        }
    }
}
</script>
<style>
 
</style>
