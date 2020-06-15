<template>
  <div>
    <div class="layout">
      <p class="title">消息</p>
      <p class="setting">设置</p>
    </div>
    <div class="line">
      <van-divider />
    </div>
    <div class="layout">
      <img class="icon-news" src="../../assets/images/消息.png" />
      <img class="icon-drill" src="../../assets/images/简书钻石.png" />
      <img class="icon-remind" src="../../assets/images/提醒.png" />
    </div>
    <div class="layout">
      <p class="word-news">互动消息</p>
      <p class="word-drill" @click="detailed">简书钻</p>
      <p class="word-remind">其它提醒</p>
    </div>
    <img class="line1" src="../../assets/images/分隔线.png" />
    <div class="layout">
      <p class="letter">简信</p>
      <p class="newletter">新简信</p>
    </div>
    <img class="letter1" src="../../assets/images/简信1.png" />
    <img class="letter2" src="../../assets/images/简信2.png" />
    <div class="layout card">
      <img class="smile" src="../../assets/images/笑脸.png" />
      <p class="smile-word">我是有底线的</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    detailed() {
      this.$router.push("/detailed");
    }
  }
};
</script>



<style>
.layout {
  display: flex;
}
.title {
  margin-left: 145px;
}
.setting {
  color: #f45768;
  font-size: 13px;
  margin-left: 115px;
  margin-top: 18px;
}
.line {
  margin-top: -25px;
}
.icon-news {
  width: 40px;
  height: 28px;
  margin-left: 45px;
}
.icon-drill {
  width: 38px;
  height: 32px;
  margin-left: 58px;
  margin-top: -3px;
}
.icon-remind {
  width: 35px;
  height: 36px;
  margin-left: 60px;
  margin-top: -3px;
}
.word-news {
  font-size: 13px;
  margin-left: 38px;
  margin-top: 2px;
}
.word-drill {
  font-size: 13px;
  margin-left: 51px;
  margin-top: 2px;
}
.word-remind {
  font-size: 13px;
  margin-left: 52px;
  margin-top: 2px;
}
.letter {
  font-size: 13px;
  margin-left: 10px;
}
.newletter {
  font-size: 13px;
  color: #f45768;
  margin-left: 245px;
}
.letter1 {
  width: 328px;
}
.letter2 {
  width: 328px;
  margin-left: 5px;
}
.card {
  background-color: #f4f4f4;
  width: 328px;
  height: 1900px;
}
.line1 {
  width: 328px;
}
.smile {
  width: 15px;
  height: 15px;
  margin-left: 120px;
  margin-top: 15px;
}
.smile-word {
  color: #bfbfbf;
  font-size: 12px;
  margin-top: 14px;
  margin-left: 2px;
}
</style>
