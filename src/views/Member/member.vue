<template>
  <div>
    <div class="layout">
      <van-image
        class="forum-image"
        round
        src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E5%A4%B4%E5%83%8F.png"
      />
      <div class="forum-information">
        <p class="forum-information-name">kk想你</p>
        <p class="forum-information-level">Lv1 城中平民</p>
      </div>
      <img
        class="icon-rise"
        src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E4%B8%8A%E5%8D%87.png"
      />
      <p class="views">15841418</p>
    </div>
    <div class="card1 ">
      <div class="layout">
        <p class="name1">总资产(钻和贝)</p>
        <van-icon class="jump1" name="arrow" />
      </div>
      <div class="layout">
        <p class="zero">0</p>
        <p class="word1">变现指南</p>
        <van-icon class="jump2" name="arrow" />
      </div>
      <div class="layout">
        <p class="zero2">约 0 元</p>
      </div>
      <div class="layout">
          <p class="open">展开详情</p>
          <van-icon class="pull" name="arrow-down" />
      </div>
      <div class="isle-tab">
        <p
          :class="{ co: isShow }"
          @click="isShow = true"
          style="margin-left: 10px;"
        >
         广场
        </p>
        <p
         :class="{ co: !isShow }"
         @click="isShow = false"
         style="margin-left: 20px;"
        >
        我的
        </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
      data() {
      return {
      activeNames: ['1'],
        isShow: true
    };
  },
  methods: {}
};
</script>

<style>
.layout {
  display: flex;
}
.forum-image {
  margin-left: 5px;
  margin-top: 25px;
  width: 30px;
  height: 30px;
}
.forum-information-name {
  font-size: 13px;
  margin-left: 5px;
  margin-top: 23px;
  width: 50px;
}
.forum-information-level {
  font-size: 8px;
  color: #bfbfbf;
  margin-top: -10px;
  margin-left: 8px;
  width: 60px;
}
.icon-rise {
  margin-top: 34px;
  margin-left: 150px;
  width: 13px;
  height: 13px;
}
.views {
  font-size: 12px;
  margin-top: 34px;
}
.card1 {
  width: 310px;
  height: 100px;
  margin-left: 10px;
  background-color: #f45768;
  border-radius: 10px;
}
.name1 {
  font-size: 10px;
  margin-left: 13px;
  margin-top: 15px;
  color: white;
  width: 80px;
}
.jump1 {
  color: white;
  margin-top: 16px;
  font-size: 12px;
}
.zero {
  font-size: 30px;
  font-weight: bold;
  margin-left: 18px;
  margin-top: 0px;
  color: white;
}
.word1 {
  font-size: 10px;
  margin-top: 8px;
  margin-left: 210px;
  color: white;
}
.jump2 {
  color: white;
  margin-top: 9.3px;
  margin-left: 2px;
  font-size: 12px;
}
.zero2 {
  color: white;
  font-size: 10px;
  margin-left: 16px;
  margin-top:-25px;
}
.open{
    font-size: 10px;
    color: #bfbfbf;
    margin-left: 235px;
    width: 50px;
    margin-top:5px;
}
.pull{
    color: #bfbfbf;
    font-size: 10px;
    margin-top:5px;
    margin-left: 0px;
}
</style>
