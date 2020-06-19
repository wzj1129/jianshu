<template>
  <div>
    <div class="layout">
      <van-icon class="icon-back" @click="back" name="arrow-left" />
      <p class="title">通用设置</p>
    </div>
    <div class="card">
      <p class="name">消息推送</p>
    </div>
    <div class="layout">
      <img class="pic1" src="../../assets/images/文章更新.png" />
      <p>文章更新推送</p>
      <van-icon class="jump1" name="arrow" />
    </div>
    <van-divider class="line1" />
    <div class="layout">
      <img
        class="pic2"
        src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E9%93%83%E9%93%9B.png"
      />
      <p class="word">新消息推送</p>
      <van-icon class="jump2" name="arrow" />
    </div>
    <div class="card">
      <p class="name">偏好设置</p>
      <div class="layout">
        <img
          class="pic3"
          src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%BC%96%E8%BE%91.png"
        />
        <p class="word1">个人资料</p>
        <van-icon class="jump3" name="arrow" />
      </div>
      <van-divider class="line1" />
      <div class="layout">
        <img
          class="pic2"
          src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E5%AD%97%E4%BD%93.png"
        />
        <p class="word">阅读字号</p>
        <p class="word2">中字号</p>
      </div>
      <van-divider class="line1" />
      <div class="layout">
        <img
          class="pic2"
          src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E9%94%AE%E7%9B%98.png"
        />
        <p class="word4">默认编辑器</p>
        <p class="word3">富文本</p>
      </div>
      <van-divider class="line1" />
      <div class="layout">
        <img
          class="pic2"
          src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E6%8F%8F%E8%BF%B0.png"
        />
        <p class="word4">文章加图默认有图片描述</p>
        <van-switch
          class="switch"
          v-model="checked"
          active-color="#f45768"
          inactive-color="#ffffff"
        />
      </div>
      <van-divider class="line1" />
      <div class="layout">
        <img class="pic2" src="../../assets/images/移动网络.png" />
        <p class="word4">移动网络下不下载图片</p>
        <van-switch
          class="switch1"
          v-model="checked"
          active-color="#ffffff"
          inactive-color="#f45768"
        />
      </div>
      <van-divider class="line1" />
      <div class="layout">
        <img
          class="pic2"
          src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E6%B7%BB%E5%8A%A0.png"
        />
        <p class="word4">添加“写文章”到桌面</p>
        <van-icon class="jump4" name="arrow" />
      </div>
    </div>
    <div class="card1">
      <p class="name">其他</p>
    </div>
    <div class="layout">
      <p class="word5">回收站</p>
      <van-icon class="jump5" name="arrow" />
    </div>
    <van-divider class="line" />
    <div class="layout">
      <p class="word6">黑名单设置</p>
      <van-icon class="jump6" name="arrow" />
    </div>
    <van-divider class="line" />
    <div class="layout">
      <p class="word6">007写不出就出局 徽章兑换</p>
      <van-icon class="jump7" name="arrow" />
    </div>
    <van-divider class="line" />
    <div class="layout">
      <p class="word6">FDAA授权</p>
      <van-icon class="jump8" name="arrow" />
    </div>
    <van-divider class="line" />
    <div class="layout">
      <p class="word6">清除缓存</p>
      <van-icon class="jump9" name="arrow" />
    </div>
    <van-divider class="line" />
    <div class="layout">
      <p class="word6">赞赏设置</p>
      <van-icon class="jump9" name="arrow" />
    </div>
    <van-divider class="line" />
    <div class="layout">
      <p class="word6">给简书评分</p>
      <van-icon class="jump10" name="arrow" />
    </div>
    <van-divider class="line" />
    <div class="layout">
      <p class="word6">分享简书App</p>
      <van-icon class="jump11" name="arrow" />
    </div>
    <van-divider class="line" />
    <div class="layout">
      <p class="word6">关于我们</p>
      <van-icon class="jump12" name="arrow" />
    </div>
    <van-divider class="line" />
    <img class="line3" src="../../assets/images/分隔线.png" />
    <p class="exit">退出当前账号</p>
    <img class="line4" src="../../assets/images/分隔线.png" />
  </div>
</template>

<script>
export default {
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
  color: #8a8a8a;
}
.title {
  font-size: 17px;
  margin-left: -5px;
  margin-top: 13px;
  width: 280px;
}
.line {
  margin-top: -10px;
}
.line1 {
  margin-top: 0px;
}
.line3 {
  height: 20px;
  margin-top: -10px;
}
.line4 {
  height: 100px;
  margin-top: -10px;
}
.card {
  width: 100%;
  height: 40px;
  background-color: #f4f4f4;
  margin-top: -20px;
}
.name {
  font-size: 15px;
  text-align: left;
  padding-top: 15px;
  margin-left: 15px;
  color: #8a8a8a;
}
.pic1 {
  margin-left: 10px;
  margin-top: 8px;
  width: 35px;
  height: 40px;
}
.pic2 {
  margin-left: 10px;
  margin-top: -8px;
  width: 30px;
  height: 30px;
}
.pic3 {
  margin-left: 13px;
  margin-top: 8px;
  width: 28px;
  height: 25px;
}
.jump1 {
  margin-left: 160px;
  margin-top: 20px;
  color: #bfbfbf;
}
.jump2 {
  margin-left: 172px;
  margin-top: 5px;
  color: #bfbfbf;
}
.jump3 {
  margin-left: 185px;
  margin-top: 10px;
  color: #bfbfbf;
}
.jump4 {
  margin-left: 110px;
  margin-top: 0px;
  color: #bfbfbf;
}
.jump5 {
  margin-left: 230px;
  margin-top: 15px;
  color: #bfbfbf;
}
.jump6 {
  margin-left: 198.3px;
  margin-top: -6px;
  color: #bfbfbf;
}
.jump7 {
  margin-left: 87px;
  margin-top: -6px;
  color: #bfbfbf;
}
.jump8 {
  margin-left: 203px;
  margin-top: -6px;
  color: #bfbfbf;
}
.jump9 {
  margin-left: 214px;
  margin-top: -6px;
  color: #bfbfbf;
}
.jump10 {
  margin-left: 197px;
  margin-top: -6px;
  color: #bfbfbf;
}
.jump11 {
  margin-left: 184px;
  margin-top: -6px;
  color: #bfbfbf;
}
.jump12 {
  margin-left: 211px;
  margin-top: -6px;
  color: #bfbfbf;
}
.word {
  margin-top: 0px;
  margin-left: 8px;
}
.word1 {
  margin-left: 8px;
  margin-top: 10px;
}
.word2 {
  color: #8a8a8a;
  margin-left: 160px;
  margin-top: 0px;
}
.word3 {
  color: #8a8a8a;
  margin-left: 143px;
  margin-top: 0px;
}
.word4 {
  margin-top: -5px;
  margin-left: 8px;
}
.word5 {
  margin-top: 13px;
  margin-left: 15px;
}
.word6 {
  margin-top: -10px;
  margin-left: 14px;
}
.switch {
  font-size: 25px;
  margin-left: 40px;
}
.switch1 {
  font-size: 25px;
  margin-left: 55px;
}
.card1 {
  background-color: #f4f4f4;
  width: 100%;
  height: 40px;
  margin-top: 310px;
}
.exit {
  color: #f45768;
  font-size: 18px;
  text-align: center;
}
</style>
