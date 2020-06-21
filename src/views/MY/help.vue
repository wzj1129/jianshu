<template>
  <div>
    <div class="layout">
      <van-icon class="icon-back" @click="back" name="arrow-left" />
      <p class="title">常见帮助</p>
      <p class="question" @click="feedback">去反馈</p>
    </div>
    <van-divider class="line1" />
    <div class="layout">
      <img
        class="line"
        src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%AB%96%E7%BA%BF.png"
      />
      <p class="title1">热门问题</p>
      <p class="entrance">封号快捷申诉入口</p>
    </div>
    <van-divider class="line2" />
    <div class="layout">
      <p class="q1">为什么文章会被锁定，被锁定如何解锁？</p>
      <van-icon class="jump1" name="arrow" />
    </div>
    <van-divider class="line2" />
    <div class="layout">
      <p class="q1">如何更换绑定的手机号，原有手机号不用了 怎么办？</p>
      <van-icon class="jump2" name="arrow" />
    </div>
    <van-divider class="line2" />
    <div class="layout">
      <p class="q1">如何开启【禁止转载】功能</p>
      <van-icon class="jump3" name="arrow" />
    </div>
    <van-divider class="line2" />
    <div class="layout">
      <p class="q1">如何注销简书账号</p>
      <van-icon class="jump4" name="arrow" />
    </div>
    <van-divider class="line2" />
    <div class="layout">
      <p class="q1">遇到贝市场相关问题怎么办？</p>
      <van-icon class="jump5" name="arrow" />
    </div>
    <van-divider class="line2" />
    <div class="layout">
      <p class="q1">为什么文章会被锁定，被锁定如何解锁？</p>
      <van-icon class="jump1" name="arrow" />
    </div>
    <van-divider class="line2" />
    <div class="layout">
      <p class="q1">如何更换绑定的手机号，原有手机号不用了 怎么办？</p>
      <van-icon class="jump2" name="arrow" />
    </div>
    <van-divider class="line2" />
    <div class="layout">
      <p class="q1">如何开启【禁止转载】功能</p>
      <van-icon class="jump3" name="arrow" />
    </div>
    <van-divider class="line2" />
    <div class="layout">
      <p class="q1">如何注销简书账号</p>
      <van-icon class="jump4" name="arrow" />
    </div>
    <van-divider class="line2" />
    <div class="layout">
      <p class="q1">遇到贝市场相关问题怎么办？</p>
      <van-icon class="jump5" name="arrow" />
    </div>
    <van-divider class="line2" />
    <div class="layout">
      <p class="q1">为什么文章会被锁定，被锁定如何解锁？</p>
      <van-icon class="jump1" name="arrow" />
    </div>
    <van-divider class="line2" />
    <div class="layout">
      <p class="q1">如何更换绑定的手机号，原有手机号不用了 怎么办？</p>
      <van-icon class="jump2" name="arrow" />
    </div>
    <van-divider class="line2" />
    <div class="layout">
      <p class="q1">如何开启【禁止转载】功能</p>
      <van-icon class="jump3" name="arrow" />
    </div>
    <van-divider class="line2" />
    <div class="layout">
      <p class="q1">如何注销简书账号</p>
      <van-icon class="jump4" name="arrow" />
    </div>
    <van-divider class="line2" />
    <div class="layout">
      <p class="q1">遇到贝市场相关问题怎么办？</p>
      <van-icon class="jump5" name="arrow" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push("/my");
    },
    feedback() {
      this.$router.push("problem");
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
.line {
  height: 20px;
  width: 35px;
  margin-left: 8px;
  margin-top: 5px;
}
.line1 {
  margin-top: -10px;
}
.title1 {
  font-size: 13px;
  margin-left: -5px;
  margin-top: 5px;
}
.entrance {
  color: #f45768;
  font-size: 10px;
  margin-left: 130px;
  margin-top: 5px;
  width: 100px;
}
.line2 {
  margin-top: -5px;
}
.q1 {
  font-size: 13px;
  text-align: left;
  margin-left: 20px;
  margin-top: -10px;
}
.jump1 {
  font-size: 15px;
  margin-top: -9px;
  margin-left: 58px;
  color: #bfbfbb;
}
.jump2 {
  font-size: 15px;
  margin-top: -9px;
  margin-left: 35px;
  color: #bfbfbb;
}
.jump3 {
  font-size: 15px;
  margin-top: -9px;
  margin-left: 135px;
  color: #bfbfbb;
}
.jump4 {
  font-size: 15px;
  margin-top: -9px;
  margin-left: 187px;
  color: #bfbfbb;
}
.jump5 {
  font-size: 15px;
  margin-top: -9px;
  margin-left: 120px;
  color: #bfbfbb;
}
</style>
