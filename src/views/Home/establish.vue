<template>
  <div>
    <div class="layout">
      <van-icon class="icon-back" @click="back" name="arrow-left" />
      <p class="title">创建小岛</p>
    </div>
    <div>
        <img class="pic" src="../../assets/images/创建小岛.png"/>
        <img class="pic1" src="../../assets/images/创建小岛1.png"/>
        <img class="pic1" src="../../assets/images/创建小岛2.png"/>
        <img class="pic1" src="../../assets/images/创建小岛3.png"/>
    </div>
    <div class="card">
        <van-button disabled class="button" round="" color="#8a8a8a">暂不符合申请条件</van-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push("/more");
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
  margin-left: 93px;
  margin-top: 13px;
}
.pic{
    width: 328px;
}
.pic1{
    width: 328px;
    margin-top:-5.5px;
}
.card{
    background: white;
    width: 328px;
    height: 100px;
}
.button{
    width: 300px;
    font-size: 16px;
}
</style>
