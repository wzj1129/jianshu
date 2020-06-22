<template>
  <div>
    <div class="layout">
      <van-icon class="icon-back" @click="back" name="arrow-left" />
      <p class="title">简书钻发放总榜</p>
      <p class="share">分享</p>
    </div>
    <img class="pic" src="../../assets/images/榜单.png" />
    <div class="day layout">
      <p
        :class="{ co: isShow }"
        @click="isShow = true"
        style="margin-left: 10px;"
      >
        文章排名
      </p>
      <p
        :class="{ co: !isShow }"
        @click="isShow = false"
        style="margin-left: 100px;"
      >
        用户排名
      </p>
    </div>
    <div v-if="isShow">
      <div class="layout">
        <img class="rank" src="../../assets/images/1.png" />
        <div>
          <p class="name">故事优选||你的树，我的神</p>
          <p class="author">七公子小刀</p>
        </div>
        <div>
          <p class="num">6002.14</p>
          <p class="income">累计收益</p>
        </div>
      </div>
      <van-divider class="line" />
      <div class="layout">
        <img class="rank1" src="../../assets/images/2.png" />
        <div>
          <p class="name1">成了嫌疑人</p>
          <p class="author1">是非不再</p>
        </div>
        <div>
          <p class="num2">3002.27</p>
          <p class="income2">累计收益</p>
        </div>
      </div>
      <van-divider class="line" />
      <div class="layout">
        <img class="rank1" src="../../assets/images/3.png" />
        <div>
          <p class="name1">原创【德胜传】第七十七章</p>
          <p class="author1">大熊之影</p>
        </div>
        <div>
          <p class="num3">2002.31</p>
          <p class="income3">累计收益</p>
        </div>
      </div>
      <van-divider class="line" />
      <div class="layout">
        <p class="rank2">4</p>
        <div>
          <p class="name2">岁月|父亲的爱</p>
          <p class="author2">许家大公子</p>
        </div>
        <div>
          <p class="num4">1502.33</p>
          <p class="income4">累计收益</p>
        </div>
      </div>
      <van-divider class="line" />
      <div class="layout">
        <p class="rank2">5</p>
        <div>
          <p class="name2">一颗精灵树（下）</p>
          <p class="author2">北城锦瑟</p>
        </div>
        <div>
          <p class="num5">1202.35</p>
          <p class="income5">累计收益</p>
        </div>
      </div>
      <van-divider class="line" />
    </div>
    <div v-if="!isShow">
      <div class="lists layout">
        <van-button round class="button">用户收益总榜</van-button>
        <van-button round class="button">创作收益榜</van-button>
        <van-button round class="button">投票收益榜</van-button>
      </div>
      <div class="layout">
        <img class="rank" src="../../assets/images/1.png" />
        <div>
          <p class="name">故事优选||你的树，我的神</p>
          <p class="author">七公子小刀</p>
        </div>
        <div>
          <p class="num">6002.14</p>
          <p class="income">累计收益</p>
        </div>
      </div>
      <van-divider class="line" />
      <div class="layout">
        <img class="rank1" src="../../assets/images/2.png" />
        <div>
          <p class="name1">成了嫌疑人</p>
          <p class="author1">是非不再</p>
        </div>
        <div>
          <p class="num2">3002.27</p>
          <p class="income2">累计收益</p>
        </div>
      </div>
      <van-divider class="line" />
      <div class="layout">
        <img class="rank1" src="../../assets/images/3.png" />
        <div>
          <p class="name1">原创【德胜传】第七十七章</p>
          <p class="author1">大熊之影</p>
        </div>
        <div>
          <p class="num3">2002.31</p>
          <p class="income3">累计收益</p>
        </div>
      </div>
      <van-divider class="line" />
      <div class="layout">
        <p class="rank2">4</p>
        <div>
          <p class="name2">岁月|父亲的爱</p>
          <p class="author2">许家大公子</p>
        </div>
        <div>
          <p class="num4">1502.33</p>
          <p class="income4">累计收益</p>
        </div>
      </div>
      <van-divider class="line" />
      <div class="layout">
        <p class="rank2">5</p>
        <div>
          <p class="name2">一颗精灵树（下）</p>
          <p class="author2">北城锦瑟</p>
        </div>
        <div>
          <p class="num5">1202.35</p>
          <p class="income5">累计收益</p>
        </div>
      </div>
      <van-divider class="line" />
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
      this.$router.push("/member");
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
  font-size: 14px;
  margin-left: 75px;
  margin-top: 15px;
  width: 150px;
}
.share {
  color: #f45768;
  font-size: 13px;
  margin-left: 45px;
  margin-top: 18px;
  width: 100px;
}
.pic {
  width: 100%;
}
.day {
  padding-left: 50px;
  font-size: 13px;
}
.co {
  color: #f45768;
}
.rank {
  width: 25px;
  height: 25px;
  margin-top: 15px;
  margin-left: 5px;
}
.rank1 {
  width: 25px;
  height: 25px;
  margin-top: -5px;
  margin-left: 5px;
}
.rank2 {
  font-size: 15px;
  color: #8a8a8a;
  margin-top: 8px;
  margin-left: 10px;
}
.name {
  font-size: 13.5px;
  font-weight: bolder;
  margin-left: 5px;
}
.name1 {
  font-size: 13.5px;
  font-weight: bolder;
  margin-top: -5px;
  margin-left: 5px;
}
.name2 {
  font-size: 13.5px;
  font-weight: bolder;
  margin-top: -5px;
  margin-left: 15px;
}
.author {
  font-size: 10px;
  color: #bfbfbf;
  text-align: left;
  margin-top: -10px;
  margin-left: 5px;
}
.author1 {
  font-size: 10px;
  color: #bfbfbf;
  text-align: left;
  margin-top: -5px;
  margin-left: 5px;
}
.author2 {
  font-size: 10px;
  color: #bfbfbf;
  text-align: left;
  margin-top: -5px;
  margin-left: 15px;
}
.num {
  color: red;
  font-size: 15px;
  margin-left: 70px;
}
.num1 {
  color: red;
  font-size: 15px;
  margin-left: 70px;
  margin-top: -5px;
}
.num2 {
  color: red;
  font-size: 15px;
  margin-left: 158px;
  margin-top: -5px;
}
.num3 {
  color: red;
  font-size: 15px;
  margin-left: 64px;
  margin-top: -5px;
}
.num4 {
  color: red;
  font-size: 15px;
  margin-left: 140px;
  margin-top: -5px;
}
.num5 {
  color: red;
  font-size: 15px;
  margin-left: 115px;
  margin-top: -5px;
}
.income {
  font-size: 10px;
  color: #bfbfbf;
  margin-left: 80px;
  margin-top: -10px;
}
.income1 {
  font-size: 10px;
  color: #bfbfbf;
  margin-left: 80px;
  margin-top: -5px;
}
.income2 {
  font-size: 10px;
  color: #bfbfbf;
  margin-left: 165px;
  margin-top: -5px;
}
.income3 {
  font-size: 10px;
  color: #bfbfbf;
  margin-left: 70px;
  margin-top: -5px;
}
.income4 {
  font-size: 10px;
  color: #bfbfbf;
  margin-left: 150px;
  margin-top: -5px;
}
.income5 {
  font-size: 10px;
  color: #bfbfbf;
  margin-left: 128px;
  margin-top: -5px;
}
.line {
  margin-top: 0px;
}
.lists {
  background-color: #e9e9e9;
  width: 100%;
  height: 40px;
}
.button {
  background-color: white;
  height: 25px;
  font-size: 11px;
  margin-top: 7px;
  margin-left: 10px;
}
</style>
