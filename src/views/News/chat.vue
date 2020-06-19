<template>
  <div>
    <div class="layout ">
      <van-icon class="icon-back" @click="back" name="arrow-left" />
      <p class="title">官方消息通知</p>
      <van-icon class="share" name="ellipsis" />
    </div>
    <van-divider />
    <div class="card dialog1">
      <p class="time">-20.06.11 19.05-</p>
      <div class="layout">
        <img
          class=" portrait"
          src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%AE%80.png"
        />
        <div class="dialog">
          <p class="text">
            最新#2021QS世界大学排行#发布啦，清华15名创历史新高！来看看你的母校有没有上榜
          </p>
          <p class="text1">>>>https://www.jianshu.com/gp/ e4af18b8bd13ea5a</p>
        </div>
      </div>
      <p class="time">-20.06.12 20.03-</p>
      <div class="layout">
        <img
          class=" portrait"
          src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%AE%80.png"
        />
        <div class="dialog">
          <p class="text">
            程序员修电脑，自媒体代写作业，医生摆摊量血压，你的专业，摆地摊能干什么？点击
          </p>
          <p class="text1">https://www.jianshu.com/gt/ fa38d27d94fc2d3a</p>
          <p class="text2">马上加入话题热议。</p>
        </div>
      </div>
    </div>
    <div class="layout field1">
      <van-cell-group>
        <van-field
          v-model="value1"
          class="field"
          left-icon="smile-o"
          right-icon=""
          placeholder="输入文字"
        />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: ""
    };
  },
  methods: {
    back() {
      this.$router.push("/news");
    }
  }
};
</script>

<style>
.layout {
  display: flex;
}
.icon-back {
  font-size: 23px;
  margin-left: 5px;
  margin-top: 15px;
}
.title {
  font-size: 17px;
  margin-left: 65px;
  margin-top: 13px;
  width: 150px;
}
.share {
  color: #8a8a8a;
  font-size: 35px;
  margin-left: 30px;
  margin-top: 7px;
}
.card {
  width: 100%;
  color: #fefefe;
  margin-top: -40px;
}
.time {
  color: #bfbfbf;
  font-size: 11px;
  padding-top: 10px;
}
.portrait {
  margin-left: 20px;
  width: 30px;
  height: 30px;
}
.dialog {
  background-color: #e8f0fa;
  width: 200px;
  height: 150px;
  margin-left: 10px;
}
.text {
  font-size: 13px;
  text-align: left;
  color: black;
  margin-left: 10px;
}
.text1 {
  font-size: 13px;
  text-align: left;
  color: #506897;
  margin-left: 10px;
}
.text2 {
  font-size: 13px;
  text-align: left;
  color: black;
  margin-left: 10px;
  margin-top: -10px;
}
.expression {
  font-size: 20px;
  margin-top: -100px;
}
.field1 {
  width: 100%;
  height: 300px;
  margin-top: 190px;
}
.field {
  margin-top: 100px;
}
</style>
