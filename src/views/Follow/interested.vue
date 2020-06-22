<template>
  <div>
    <div class="layout">
      <van-icon class="icon-back" @click="back" name="arrow-left" />
      <p class="title">认识更多朋友</p>
      <img
        class="icon-search"
        src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E6%90%9C%E7%B4%A2.png"
      />
    </div>
    <img class="pic" src="../../assets/images/感兴趣的内容.png" />
    <img src="../../assets/images/分隔线.png" />
    <div class="layout">
      <img class="icon-seek" src="../../assets/images/通讯录.png" />
      <div class="seek-word">
        <p class="seek">查找通讯录好友</p>
        <p class="look">看看有没有熟人也在简书</p>
      </div>
      <van-icon class="jump1" name="arrow" />
    </div>
    <img src="../../assets/images/分隔线.png" />
    <div class="layout">
      <img class="icon-collection" src="../../assets/images/收藏.png" />
      <div class="interest-word" @click="choice">
        <p class="interest">按兴趣找好友</p>
        <p class="interest-friend">按兴趣选择，找到志同道合的简友</p>
      </div>
      <van-icon class="jump2" name="arrow" />
    </div>
    <img class="line1" src="../../assets/images/分隔线.png" />
    <div class="layout">
      <img
        class="vx"
        src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E5%BE%AE%E4%BF%A1.png"
      />
      <p class="invitation">邀请微信好友</p>
      <hr class="line" />
      <img
        class="qq"
        src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/qq.png"
      />
      <p class="invitation">邀请QQ好友</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push("/follow");
    },
    choice() {
      this.$router.push("/choice");
    }
  }
};
</script>

<style>
.layout {
  display: flex;
}
.icon-back {
  font-size: 27px;
  margin-top: 20px;
  margin-left: 10px;
  color: #bfbfbb;
}
.title {
  font-size: 18px;
  margin-left: 70px;
  margin-top: 20px;
}
.icon-search {
  width: 23px;
  height: 23px;
  margin-top: 22px;
  margin-left: 70px;
}
.pic {
  width: 328px;
}
.icon-seek {
  width: 73px;
  height: 65px;
  margin-top: 10px;
  margin-left: 10px;
}
.seek {
  font-size: 17px;
  text-align: left;
  font-weight: bold;
}
.look {
  font-size: 13px;
  text-align: left;
  margin-top: -10px;
  color: #898989;
}
.jump1 {
  font-size: 12px;
  margin-left: 84px;
  margin-top: 35px;
  color: #bfbfbf;
}
.interest {
  font-size: 17px;
  text-align: left;
  font-weight: bold;
}
.icon-collection {
  width: 70px;
  height: 68px;
  margin-top: 10px;
  margin-left: 10px;
}
.interest-friend {
  font-size: 13px;
  text-align: left;
  margin-top: -10px;
  color: #898989;
  width: 250px;
}
.jump2 {
  font-size: 12px;
  margin-left: -23px;
  margin-top: 35px;
  color: #bfbfbf;
}
.line1 {
  height: 20px;
}
.vx {
  margin-left: 30px;
  margin-top: 30px;
  width: 30px;
  height: 30px;
}
.invitation {
  font-size: 13px;
  margin-top: 35px;
  margin-left: 10px;
}
.line {
  height: 20px;
  margin-left: 20px;
  margin-top: 32px;
}
.qq {
  margin-top: 30px;
  width: 30px;
  height: 30px;
}
</style>
