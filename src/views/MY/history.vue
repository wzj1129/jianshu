<template>
  <div>
    <div class="layout">
      <van-icon class="icon-back" @click="back" name="arrow-left" />
      <div class="day layout">
        <p
          :class="{ co: isShow }"
          @click="isShow = true"
          style="margin-left: 10px;"
        >
          今日
        </p>
        <p
          :class="{ co: !isShow }"
          @click="isShow = false"
          style="margin-left: 20px;"
        >
          更早
        </p>
      </div>
      <p class="question">全部清空</p>
    </div>
    <van-divider class="line1" />
    <div v-if="isShow">
      <img v-if="isShow" class="pic" src="../../assets/images/历史记录.png" />
    </div>
    <div v-if="!isShow">
      <p class="time">
        06.19
      </p>
      <div class="layout">
        <p class="title1">我该如何发表一篇付费文章？</p>
        <p class="time1">11:20读过</p>
      </div>
      <img v-if="!isShow" class="" src="../../assets/images/分隔线.png" />
      <p class="time2">
        06.17
      </p>
      <div class="layout">
        <p class="title1">如何创建并玩转属于你自己的专题</p>
        <p class="time3">10:14读过</p>
      </div>
      <img v-if="!isShow" class="" src="../../assets/images/分隔线.png" />
      <p class="time2">
        06.19
      </p>
      <div class="layout">
        <p class="title1">我该如何发表一篇付费文章？</p>
        <p class="time1">11:20读过</p>
      </div>
      <img v-if="!isShow" class="" src="../../assets/images/分隔线.png" />
      <p class="time2">
        06.17
      </p>
      <div class="layout">
        <p class="title1">如何创建并玩转属于你自己的专题</p>
        <p class="time3">10:14读过</p>
      </div>
      <img v-if="!isShow" class="" src="../../assets/images/分隔线.png" />
      <p class="time">
        06.19
      </p>
      <div class="layout">
        <p class="title1">我该如何发表一篇付费文章？</p>
        <p class="time1">11:20读过</p>
      </div>
      <img v-if="!isShow" class="" src="../../assets/images/分隔线.png" />
      <p class="time2">
        06.17
      </p>
      <div class="layout">
        <p class="title1">如何创建并玩转属于你自己的专题</p>
        <p class="time3">10:14读过</p>
      </div>
      <img v-if="!isShow" class="" src="../../assets/images/分隔线.png" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true
    };
  },
  methods: {
    back() {
      this.$router.push("/my");
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
  margin-left: 85px;
  margin-top: 13px;
  width: 150px;
}
.question {
  color: #f45768;
  font-size: 13px;
  margin-left: 45px;
  margin-top: 18px;
  width: 100px;
}
.day {
  padding-left: 60px;
}
.co {
  color: #f45768;
}
.line1 {
  margin-top: -10px;
}
.pic {
  width: 220px;
  height: 150px;
  margin-top: 100px;
}
.time {
  color: #bfbfbf;
  font-size: 11px;
  text-align: left;
  margin-left: 20px;
  margin-top: -10px;
}
.time2 {
  color: #bfbfbf;
  font-size: 11px;
  text-align: left;
  margin-left: 20px;
  margin-top: 10px;
}
.title1 {
  font-size: 12px;
  text-align: left;
  margin-top: 0px;
  margin-left: 20px;
}
.time1 {
  color: #bfbfbf;
  font-size: 11px;
  margin-left: 75px;
  margin-top: 0px;
}
.time3 {
  color: #bfbfbf;
  font-size: 11px;
  margin-left: 50px;
  margin-top: 0px;
}
</style>
