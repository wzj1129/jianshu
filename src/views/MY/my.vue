<template>
  <div>
    <img class="my" src="../../assets/images/my.png" />
    <div class="layout"></div>
    <div class="layout" @click="packet">
      <P class="money">我的钱包</P>
      <van-icon class="jump1" name="arrow" />
    </div>
    <div class="layout">
      <P class="money">简书活动</P>
      <van-icon class="jump1" name="arrow" />
    </div>
    <div class="layout isle" @click="special">
      <P class="money">我的小岛/专题/文集</P>
      <van-icon class="jump2" name="arrow" />
    </div>
    <div class="layout" @click="history">
      <P class="money">浏览历史</P>
      <van-icon class="jump1" name="arrow" />
    </div>
    <van-divider class="line" />
    <div class="layout system">
      <P class="money">夜间模式跟系统保持一致</P>
      <van-switch
        class="switch"
        v-model="checked"
        active-color="#f45768"
        inactive-color="#ffffff"
      />
    </div>
    <div class="layout" @click="setting">
      <P class="money">设置</P>
      <van-icon class="jump3" name="arrow" />
    </div>
    <div class="layout" @click="help">
      <P class="money">帮助反馈</P>
      <p class="q">有问题找这里</p>
      <van-icon class="jump4" name="arrow" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    packet() {
      this.$router.push("/packet");
    },
    setting() {
      this.$router.push("/setting");
    },
    special() {
      this.$router.push("/special");
    },
    help() {
      this.$router.push("/help");
    },
    history() {
      this.$router.push("/history");
    }
  }
};
</script>

<style>
.layout {
  display: flex;
}
.my {
  width: 328px;
}
.money {
  text-align: left;
  margin-left: 12px;
  margin-top: 0px;
}
.jump1 {
  font-size: 15px;
  margin-top: 5px;
  margin-left: 225px;
  color: #bfbfbf;
}
.isle {
  width: 390px;
}
.jump2 {
  font-size: 15px;
  margin-top: 5px;
  margin-left: 152px;
  color: #bfbfbf;
}
.line {
  margin-top: 10px;
}
.system {
  width: 440px;
}
.switch {
  font-size: 25px;
  margin-left: 75px;
}
.jump3 {
  font-size: 15px;
  margin-top: 5px;
  margin-left: 255px;
  color: #bfbfbf;
}
.q {
  color: #8a8a8a;
  margin-left: 150px;
  font-size: 12px;
  margin-top: 0px;
}
.jump4 {
  color: #bfbfbf;
}
</style>
