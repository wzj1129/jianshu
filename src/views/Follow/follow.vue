<template>
  <div>
    <div class="layout">
      <van-icon
        class="icon-add"
        @click="jump"
        name="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E6%B7%BB%E5%8A%A0.png"
        dot
      />
      <p class="follow-word">关注</p>
      <img
        class="icon-search"
        src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E6%90%9C%E7%B4%A2.png"
      />
    </div>
    <div class="line">
      <van-divider />
    </div>

    <div>
      <img class="icon-follow1" src="../../assets/images/关注1.png" />
      <van-button
        color="#f45768"
        @click="jump"
        plain
        hairline
        round
        class="button1"
        >快去发现感兴趣的内容</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    jump() {
      this.$router.push("/interested");
    }
  }
};
</script>

<style>
.layout {
  display: flex;
}
.icon-add {
  width: 18px;
  margin-left: 10px;
  margin-top: 15px;
  font-size: 22px;
}
.follow-word {
  font-size: 16px;
  margin-left: 120px;
  margin-top: 14px;
}
.icon-search {
  width: 18px;
  height: 18px;
  margin-left: 110px;
  margin-top: 14px;
}
.icon-follow1 {
  width: 280px;
  height: 150px;
  margin-top: 120px;
  margin-left: 0px;
}
.button1 {
  color: #f45768;
  margin-top: 20px;
}
.line {
  margin-top: -15px;
}
</style>
