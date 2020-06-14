<template>
  <div>
    <div class="header">
      <van-search
        class="search"
        v-model="value"
        shape="round"
        placeholder="搜索文章、专题、用户、文集、连载"
      />
      <p class="cancel" @click="back">取消</p>
    </div>
    <div class="layout">
      <img
        class="logo"
        src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%81%AB.png"
      />
      <p class="word1">搜索趋势</p>
    </div>
    <div class="layout">
      <p class="num1">1</p>
      <p class="word2">一个劣迹艺人的东山再起</p>
      <p class="word3">阅读 12361</p>
    </div>
    <div class="line">
      <van-divider />
    </div>
    <div class="layout">
      <p class="num1">2</p>
      <p class="word4">父母为什么不愿意呆在城里</p>
      <p class="word3">阅读 6390</p>
    </div>
    <div class="line">
      <van-divider />
    </div>
    <div class="layout">
      <p class="num1">3</p>
      <p class="word4">你说：读书到底有什么？</p>
      <p class="word3">阅读 5766</p>
    </div>
    <div class="line">
      <van-divider />
    </div>
    <div class="layout">
      <p class="num2">4</p>
      <p class="word4">Swift的函数派发机制</p>
      <p class="word3">阅读 4910</p>
    </div>
    <div class="line">
      <van-divider />
    </div>
    <div class="layout">
      <p class="num2">5</p>
      <p class="word4">自学编程的6个致命误区</p>
      <p class="word3">阅读 959</p>
    </div>
    <div class="line">
      <van-divider />
    </div>
    <div class="layout">
      <p class="num2">6</p>
      <p class="word4">分手的起因是怪我看你的手机</p>
      <p class="word3">阅读 1450</p>
    </div>
    <div class="line">
      <van-divider />
    </div>
    <div class="layout">
      <p class="num2">7</p>
      <p class="word4">小新30岁了，没有爸爸了</p>
      <p class="word3">阅读 1408</p>
    </div>
    <div class="line">
      <van-divider />
    </div>
    <div class="layout">
      <p class="num2">8</p>
      <p class="word4">一个劣迹艺人的东山再起</p>
      <p class="word3">阅读 1350</p>
    </div>
  </div>
</template>

<script>
export default {
   methods: {
    back() {
      this.$router.push("/home");
    }
  }
};
</script>

<style>
.header {
  margin-top: 10px;
  margin-left: 10px;
  width: 328px;
  display: flex;
}
.cancel {
  font-size: 17px;
  margin-left: 5px;
  color: #f45768;
}
.search {
  width: 280px;
}
.layout {
  display: flex;
}
.logo {
  width: 20px;
  height: 20px;
  margin-top: 10px;
  margin-left: 15px;
}
.word1 {
  font-size: 18px;
  margin-top: 8px;
  margin-left: 8px;
}
.num1 {
  font-size: 22px;
  color: #f45768;
  margin-top: 1px;
  margin-left: 23px;
}
.num2 {
  font-size: 22px;
  margin-top: 1px;
  margin-left: 23px;
}
.word2 {
  font-size: 16px;
  margin-top: 2px;
  margin-left: 20px;
}
.word3 {
  font-size: 12px;
  margin-left: 10px;
  margin-top: 6px;
  color: #afafaf;
  text-align: left;
}
.word4 {
  font-size: 16px;
  margin-top: 2px;
  margin-left: 20px;
  text-align: left;
}
.line {
  margin-top: -40px;
}
</style>
