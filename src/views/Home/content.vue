<template>
  <div>
    <div class="layout ">
      <van-icon class="icon-back" @click="back" name="arrow-left" />
      <van-icon class="share" name="ellipsis" />
    </div>
    <van-divider class="line" />
    <div class="home-text1">
      <div>
        <van-image
          class="forum-image"
          round
          src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E5%A4%B4%E5%83%8F.png"
        />
      </div>
      <div class="forum-information">
        <p class="forum-information-name">kk想你</p>
        <p class="forum-information-time">前天 21:20</p>
      </div>
      <van-button round type="primary" class="button2">关注</van-button>
    </div>
    <div class="home-text2">
      <p>上联：孤独的人晚回家</p>
    </div>
    <div class="home-text3">
      <p class="text2">下联：</p>
    </div>
    <img class="home-text1 img5" src="../../assets/images/推荐5.png" />
    <div class="buttom1">
      <img
        class="img6"
        src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E4%BA%95%E5%8F%B7.png"
      />
      <p class="word">晒对联，写对联</p>
    </div>
    <div class="layout box">
      <img class="poet" src="../../assets/images/我想我是个诗人.png" />
    </div>
      <img class="line1" src="../../assets/images/分隔线.png" />
      <p class="title2">精彩评论 3</p>
       <van-divider class="line" />
    <div class="layout">
        <van-image
          class="image"
          round
          src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E5%A4%B4%E5%83%8F.png"
        />
        <div>
            <p class="name">茉莉姑娘</p>
            <p class="text1">上联：孤独的人晚回家</p>
            <p class="text1">下联：快乐的人不回家</p>
            <p class="text1">横批：都是夜归人</p>
            <p class="text3">47楼 前天 21.11</p>
        </div> 
           <p class="comment-word">65</p>
           <img
                class="comment"
                src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E8%AF%84%E8%AE%BA.png"
              />
           <p class="comment-word1">57</p>
           <van-icon class="Fabulous" name="good-job-o" />
      </div>
       <van-divider class="line" />
    <div class="layout">
        <van-image
          class="image"
          round
          src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E5%A4%B4%E5%83%8F.png"
        />
        <div>
            <p class="name">茉莉姑娘</p>
            <p class="text1">上联：孤独的人晚回家</p>
            <p class="text1">下联：快乐的人不回家</p>
            <p class="text1">横批：都是夜归人</p>
            <p class="text3">47楼 前天 21.11</p>
        </div> 
           <p class="comment-word">65</p>
           <img
                class="comment"
                src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E8%AF%84%E8%AE%BA.png"
              />
           <p class="comment-word1">57</p>
           <van-icon class="Fabulous" name="good-job-o" />
      </div>
       <van-divider class="line" />
    <div class="layout">
        <van-image
          class="image"
          round
          src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E5%A4%B4%E5%83%8F.png"
        />
        <div>
            <p class="name">茉莉姑娘</p>
            <p class="text1">上联：孤独的人晚回家</p>
            <p class="text1">下联：快乐的人不回家</p>
            <p class="text1">横批：都是夜归人</p>
            <p class="text3">47楼 前天 21.11</p>
        </div> 
           <p class="comment-word">65</p>
           <img
                class="comment"
                src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E8%AF%84%E8%AE%BA.png"
              />
           <p class="comment-word1">57</p>
           <van-icon class="Fabulous" name="good-job-o" />
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
      this.$router.push("/home");
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
.line {
  margin-top: 0px;
}
.share {
  color: #8a8a8a;
  font-size: 35px;
  margin-left: 240px;
  margin-top: 7px;
}
.buttom1 {
  border-radius: 20px;
  width: 100px;
  height: 20px;
  display: flex;
  background-color: #f0f0f0;
  margin-top: 10px;
  margin-left: 15px;
}
.img6 {
  width: 13px;
  height: 13px;
  display: flex;
  margin-left: 5px;
  margin-top: 3px;
}
.forum-image {
  margin-left: 5px;
  margin-top: -10px;
  width: 30px;
  height: 30px;
}
.forum-information-name {
  font-size: 13px;
  margin-left: 5px;
  margin-top: -10px;
  width: 50px;
}
.forum-information-time {
  font-size: 8px;
  color: #bfbfbf;
  margin-top: -10px;
  margin-left: 8px;
  width: 50px;
}
.icon-cha1 {
  width: 8px;
  height: 8px;
  margin-left: 230px;
  margin-top: 20px;
}
.home-text1 {
  display: flex;
  margin-left: 10px;
}
.home-text2 {
  display: flex;
  margin-left: 13px;
  margin-top: -10px;
}
.home-text3 {
  display: flex;
  margin-left: 13px;
  margin-top: 0px;
}
.text2 {
  margin-top: -10px;
}
.img5 {
  width: 110px;
  height: 150px;
  margin-left: 15px;
}
.word {
  color: #f45768;
  font-size: 5px;
  margin-left: 5px;
  margin-top: 2px;
}
.button2 {
  width: 55px;
  height: 20px;
  margin-top: 0px;
  margin-left: 150px;
  font-size: 8px;
}
.poet {
  width: 300px;
  margin-left: 10px;
  margin-top: 5px;
}
.title2{
    font-size: 12px;
    font-weight: bold;
    text-align: left;
    margin-left: 15px;
}
.image{
  margin-left: 14px;
  margin-top: -10px;
  width: 30px;
  height: 30px;
}
.name{
    margin-top: -8px;
    margin-left: 10px;
    font-size: 12px;
    text-align: left;
    font-weight: bold;
}
.text1{
    text-align: left;
    font-size: 12px;
    margin-left: 8px;
    margin-top: -10px;
}
.text3{
    color: #8a8a8a;
    text-align: left;
    font-size: 8px;
    margin-left: 8px;
    margin-top: 10px;
}
.comment{
    width: 10px;
    height: 10px;
    color: #8a8a8a;
    margin-top: 75px;
    margin-left: 5px;
}
.comment-word{
    font-size: 8px;
    margin-top: 75px;
    margin-left: 60px;
    color: #8a8a8a;
}
.comment-word1{
    font-size: 8px;
    margin-top: 75px;
    margin-left: 10px;
    color: #8a8a8a;
}
.Fabulous{
    color: #8a8a8a;
    margin-top: 70px;
}
</style>
