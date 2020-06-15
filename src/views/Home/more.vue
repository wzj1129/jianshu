<template>
  <div>
    <div class="layout">
      <van-icon class="icon-back" @click="back" name="arrow-left" />
      <p class="title">全部小岛</p>
      <p class="set" @click="establish">创建小岛</p>
    </div>
    <van-divider class="line" />
    <div>
      <div class="layout">
        <img class="head" src="../../assets/images/小岛头像.png" />
        <div>
          <p class="name">新人报道中心</p>
          <p class="member">27089个成员 · 19110个帖子</p>
          <div class="layout">
            <img
              class="message"
              src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%95%99%E8%A8%80.png"
            />
            <p class="q1">有需要被点赞的简友们吗？</p>
          </div>
          <div class="layout">
            <img
              class="message"
              src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%95%99%E8%A8%80.png"
            />
            <p class="q1">欢迎互相关注哟！有关必回</p>
          </div>
          <van-divider class="line" />
        </div>
        <p class="join1">+加入</p>
      </div>
    </div>
    <div>
      <div class="layout">
        <img class="head" src="../../assets/images/小岛头像1.png" />
        <div>
          <p class="name">笔尖那点事儿</p>
          <p class="member">25104个成员 · 18025个帖子</p>
          <div class="layout">
            <img
              class="message"
              src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%95%99%E8%A8%80.png"
            />
            <p class="q1">不下笔，不知道多枯涩；不比...</p>
          </div>
          <div class="layout">
            <img
              class="message"
              src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%95%99%E8%A8%80.png"
            />
            <p class="q1">我还是很喜欢你，像风走...</p>
          </div>
          <van-divider class="line" />
        </div>
        <p class="join">+加入</p>
      </div>
    </div>
    <div>
      <div class="layout">
        <img class="head" src="../../assets/images/小岛头像2.png" />
        <div>
          <p class="name">我想我是个诗人</p>
          <p class="member">69135个成员 · 33538个帖子</p>
          <div class="layout">
            <img
              class="message"
              src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%95%99%E8%A8%80.png"
            />
            <p class="q1">上联：窗前有滴相思泪</p>
          </div>
          <div class="layout">
            <img
              class="message"
              src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%95%99%E8%A8%80.png"
            />
            <p class="q1">上：等不来地老天荒</p>
          </div>
          <van-divider class="line" />
        </div>
        <p class="join1">+加入</p>
      </div>
    </div>
    <div>
      <div class="layout">
        <img class="head" src="../../assets/images/小岛头像3.png" />
        <div>
          <p class="name">简·生活</p>
          <p class="member">17263个成员 · 17114个帖子</p>
          <div class="layout">
            <img
              class="message"
              src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%95%99%E8%A8%80.png"
            />
            <p class="q1">我叫若儿</p>
          </div>
          <div class="layout">
            <img
              class="message"
              src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%95%99%E8%A8%80.png"
            />
            <p class="q1">天晴在地里干农活</p>
          </div>
          <van-divider class="line" />
        </div>
        <p class="join1">+加入</p>
      </div>
    </div>
    <div>
      <div class="layout">
        <img class="head" src="../../assets/images/小岛头像4.png" />
        <div>
          <p class="name">今天你有什么感悟？</p>
          <p class="member">10890个成员 · 15041个帖子</p>
          <div class="layout">
            <img
              class="message"
              src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%95%99%E8%A8%80.png"
            />
            <p class="q1">拉黑删除是小孩子才做的事</p>
          </div>
          <div class="layout">
            <img
              class="message"
              src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%95%99%E8%A8%80.png"
            />
            <p class="q1">过度考虑别人的感受，是一种...</p>
          </div>
          <van-divider class="line" />
        </div>
        <p class="join">+加入</p>
      </div>
    </div>
    <div>
      <div class="layout">
        <img class="head" src="../../assets/images/小岛头像5.png" />
        <div>
          <p class="name">学习使我快乐</p>
          <p class="member">10420个成员 · 6612个帖子</p>
          <div class="layout">
            <img
              class="message"
              src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%95%99%E8%A8%80.png"
            />
            <p class="q1">有钱的害怕别人说他抠，没钱...</p>
          </div>
          <div class="layout">
            <img
              class="message"
              src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%95%99%E8%A8%80.png"
            />
            <p class="q1">摆渡人里有句话...</p>
          </div>
          <van-divider class="line" />
        </div>
        <p class="join">+加入</p>
      </div>
    </div>
    <div>
      <div class="layout">
        <img class="head" src="../../assets/images/小岛头像6.png" />
        <div>
          <p class="name">大家来拍花</p>
          <p class="member">4260个成员 · 5614个帖子</p>
          <div class="layout">
            <img
              class="message"
              src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%95%99%E8%A8%80.png"
            />
            <p class="q1">种在小院池塘边的红橙色百合...</p>
          </div>
          <div class="layout">
            <img
              class="message"
              src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%95%99%E8%A8%80.png"
            />
            <p class="q1">有没有认识的啊</p>
          </div>
          <van-divider class="line" />
        </div>
        <p class="join">+加入</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push("/home");
    },
    establish() {
      this.$router.push("/establish");
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
  font-size: 15px;
  margin-left: 93px;
}
.set {
  margin-left: 80px;
  margin-top: 16px;
  color: #f45768;
  font-size: 13px;
}
.line {
  margin-top: -10px;
}
.head {
  width: 50px;
  height: 50px;
  margin-left: 10px;
  margin-top: 3px;
}
.name {
  font-size: 15px;
  font-weight: bold;
  margin-top: 7px;
  margin-left: 10px;
  text-align: left;
}
.member {
  font-size: 11px;
  color: #bfbfbf;
  margin-top: -10px;
  margin-left: 10px;
  text-align: left;
}
.join {
  font-size: 15px;
  color: #6fbd53;
  margin-left: 60px;
}
.message {
  width: 10px;
  height: 10px;
  margin-top: 0px;
  margin-left: 10px;
}
.q1 {
  font-size: 10px;
  color: #bfbfbf;
  margin-top: -3px;
  margin-left: 3px;
}
.join1 {
  font-size: 15px;
  color: #6fbd53;
  margin-left: 75px;
}
</style>
