<template>
 <div>
     <div class="layout ">
      <van-icon class="icon-back" @click="back" name="arrow-left" />
      <p class="title">对话小说</p>
      <van-icon class="share" name="ellipsis" />
    </div>
     <van-divider class="line" />
     <div class="card">
         <div>
             <img class="pic1" src="../../assets/images/时光杀人机.png"/>
             <img class="pic1" src="../../assets/images/无头双尸案.png"/>
             <img class="pic1" src="../../assets/images/四个电话.png"/>
             <img class="pic1" src="../../assets/images/莫拉格的游戏.png"/>
         </div>
     </div>
 </div>
</template>
<script>
export default {
    data() {
    return {
      value1: '',
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
.share{
    color: #8a8a8a;
    font-size: 35px;
    margin-left: 40px;
    margin-top: 7px;
}
.line{
    margin-top: -8px;
}
.card{
    background-color: #e6e6e6;
    width: 100%;
    height: 800px;
    margin-top: -16px;
}
.pic1{
    width: 280px;
    margin-left: -10px;
    margin-top: 20px;
}
</style>