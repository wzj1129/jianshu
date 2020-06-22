<template>
  <div>
    <div class="layout">
      <van-icon class="icon-back" @click="back" name="arrow-left" />
      <p class="title">选择兴趣</p>
    </div>
    <van-divider class="line" />
    <p class="title1">选择你感兴趣的类目（至少选择3个，至多选10个）</p>
    <img class="pic" src="../../assets/images/选择1.png" />
    <img class="pic" src="../../assets/images/选择2.png" />
    <img class="pic" src="../../assets/images/选择3.png" />
    <img class="pic" src="../../assets/images/选择4.png" />
    <img class="pic" src="../../assets/images/选择1.png" />
    <img class="pic" src="../../assets/images/选择2.png" />
    <img class="pic" src="../../assets/images/选择3.png" />
    <img class="pic" src="../../assets/images/选择4.png" />
    <div class="card">
      <van-button disabled="" round class="button">选好了，下一步</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2
    };
  },
  methods: {
    back() {
      this.$router.push("/interested");
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
.title1 {
  font-size: 10px;
  color: #8a8a8a;
  text-align: left;
  margin-left: 10px;
}
.pic {
  width: 300px;
}
.button {
  background-color: #f45768;
  width: 280px;
  height: 30px;
  color: white;
  font-size: 13px;
}
.card {
  width: 100%;
  height: 100px;
  margin-top: 50px;
}
</style>
