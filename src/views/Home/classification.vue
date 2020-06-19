<template>
  <div>
    <div class="layout ">
      <van-icon class="icon-back" @click="back" name="arrow-left" />
      <p class="title">全部分类</p>
      <van-icon class="share" name="ellipsis" />
    </div>
    <van-divider class="line" />
    <div class="layout">
      <img
        class="icon1"
        src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E5%88%86%E7%B1%BB-%E9%80%89%E4%B8%AD.png"
      />
      <p class="name1">类型小说</p>
      <p class="name1-1">展开全部（34）</p>
      <van-icon class="down" name="arrow-down" />
    </div>
    <div class="layuot">
      <van-button round="" class="button">青春</van-button>
      <van-button round="" class="button1">儿童文学</van-button>
      <van-button round="" class="button1">童话</van-button>
      <van-button round="" class="button1">悬疑</van-button>
    </div>
    <div class="layuot" style="margin-top:10px">
      <van-button round="" class="button">推理</van-button>
      <van-button round="" class="button1">犯罪</van-button>
      <van-button round="" class="button1">惊悚</van-button>
      <van-button round="" class="button1">恐怖</van-button>
    </div>
    <img class="line1" src="../../assets/images/分隔线.png" />
    <div class="layout">
      <img
        class="icon2"
        src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E5%88%86%E6%94%AF.png"
      />
      <p class="name2">流派</p>
      <p class="name2-1">展开全部（11）</p>
      <van-icon class="down" name="arrow-down" />
    </div>
    <div class="layuot">
      <van-button round="" class="button">二次元</van-button>
      <van-button round="" class="button1">ACG</van-button>
      <van-button round="" class="button1">同人</van-button>
      <van-button round="" class="button1">架空</van-button>
    </div>
    <div class="layuot" style="margin-top:10px">
      <van-button round="" class="button">穿越</van-button>
      <van-button round="" class="button1">古风</van-button>
      <van-button round="" class="button1">末世</van-button>
      <van-button round="" class="button1">耽美</van-button>
    </div>
    <img class="line1" src="../../assets/images/分隔线.png" />
    <div class="layout">
      <img
        class="icon2"
        src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%81%AB%E9%94%85%E7%83%A7%E7%83%A4.png"
      />
      <p class="name2">文化</p>
      <p class="name2-1">展开全部（28）</p>
      <van-icon class="down" name="arrow-down" />
    </div>
    <div class="layuot">
      <van-button round="" class="button">文化</van-button>
      <van-button round="" class="button1">海外</van-button>
      <van-button round="" class="button1">读书</van-button>
      <van-button round="" class="button1">写作</van-button>
    </div>
    <div class="layuot" style="margin-top:10px">
      <van-button round="" class="button2">书评</van-button>
      <van-button round="" class="button1">影评</van-button>
      <van-button round="" class="button1">哲学</van-button>
    </div>
    <img class="line1" src="../../assets/images/分隔线.png" />
    <div class="layout">
      <img
        class="icon2"
        src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E5%9C%B0%E7%90%83.png"
      />
      <p class="name2">IT</p>
      <p class="name3-1">展开全部（10）</p>
      <van-icon class="down" name="arrow-down" />
    </div>
    <div class="layuot">
      <van-button round="" class="button">IT</van-button>
      <van-button round="" class="button1">互联网</van-button>
      <van-button round="" class="button1">计算机</van-button>
      <van-button round="" class="button1">产品</van-button>
    </div>
    <div class="layuot" style="margin-top:10px">
      <van-button round="" class="button">设计</van-button>
      <van-button round="" class="button1">运营</van-button>
      <van-button round="" class="button1">电商</van-button>
      <van-button round="" class="button1">区块链</van-button>
    </div>
    <img class="line1" src="../../assets/images/分隔线.png" />
    <div class="layout">
      <img
        class="icon2"
        src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%9B%86%E6%A0%BD.png"
      />
      <p class="name3">生活实用</p>
      <p class="name4-1">展开全部（16）</p>
      <van-icon class="down" name="arrow-down" />
    </div>
    <div class="layuot">
      <van-button round="" class="button">生活</van-button>
      <van-button round="" class="button1">旅行</van-button>
      <van-button round="" class="button1">手绘</van-button>
      <van-button round="" class="button1">手账</van-button>
    </div>
    <div class="layuot" style="margin-top:10px">
      <van-button round="" class="button3">饮食文化</van-button>
      <van-button round="" class="button1">美食</van-button>
      <van-button round="" class="button1">美容化妆</van-button>
      <van-button round="" class="button1">运动健身</van-button>
    </div>
    <img class="line1" src="../../assets/images/分隔线.png" />
    <div class="layout">
      <img
        class="icon2"
        src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%A7%91%E5%AD%A6.png"
      />
      <p class="name2">科学</p>
    </div>
    <div class="layuot">
      <van-button round="" class="button">科普</van-button>
      <van-button round="" class="button1">数学</van-button>
      <van-button round="" class="button1">物理</van-button>
      <van-button round="" class="button1">化学</van-button>
    </div>
    <div class="layuot" style="margin-top:10px">
      <van-button round="" class="button">地理</van-button>
      <van-button round="" class="button1">自然</van-button>
      <van-button round="" class="button1">生物</van-button>
      <van-button round="" class="button1">医学</van-button>
    </div>
    <img class="line1" src="../../assets/images/分隔线.png" />
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
.title {
  font-size: 17px;
  margin-left: 55px;
  margin-top: 13px;
  width: 150px;
}
.share {
  color: #8a8a8a;
  font-size: 35px;
  margin-left: 40px;
  margin-top: 7px;
}
.line {
  margin-top: -8px;
}
.line1 {
  margin-top: 10px;
}
.icon1 {
  width: 25px;
  height: 25px;
  margin-left: 10px;
  margin-top: 0px;
}
.name1 {
  font-size: 15px;
  margin-top: 2px;
}
.name1-1 {
  font-size: 13px;
  color: #8a8a8a;
  margin-left: 105px;
  margin-top: 2px;
}
.down {
  font-size: 15px;
  color: #8a8a8a;
  margin-top: 3px;
}
.button {
  background-color: #f1f1f1;
  width: 75px;
  height: 40px;
  margin-left: 0px;
  font-size: 12px;
}
.button1 {
  background-color: #f1f1f1;
  width: 80px;
  height: 40px;
  margin-left: 3px;
  font-size: 12px;
}
.button2 {
  background-color: #f1f1f1;
  width: 75px;
  height: 40px;
  margin-left: -83px;
  font-size: 12px;
}
.button3 {
  background-color: #f1f1f1;
  width: 75px;
  height: 40px;
  margin-left: 0px;
  font-size: 10px;
}
.icon2 {
  width: 18px;
  height: 18px;
  margin-left: 10px;
  margin-top: 2px;
}
.name2 {
  font-size: 15px;
  margin-top: 2px;
  margin-left: 5px;
}
.name3 {
  font-size: 13px;
  margin-top: 2px;
  margin-left: 2px;
}
.name2-1 {
  font-size: 13px;
  color: #8a8a8a;
  margin-left: 138px;
  margin-top: 2px;
}
.name3-1 {
  font-size: 13px;
  color: #8a8a8a;
  margin-left: 157px;
  margin-top: 2px;
}
.name4-1 {
  font-size: 13px;
  color: #8a8a8a;
  margin-left: 123px;
  margin-top: 2px;
}
</style>
