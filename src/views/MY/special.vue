<template>
  <div>
     <div class="layout">
      <van-icon class="icon-back" @click="back" name="arrow-left" />
      <p class="title">我的小岛/专题/文集</p>
     </div>
     <van-tabs v-model="active">
  <van-tab title="小岛">
      <img class="none" src="../../assets/images/none.png"/>
  </van-tab>
  <van-tab title="专题">
      <div class="layout">
          <van-icon class="add" name="add-o" />
          <p>新建一个专题</p>
      </div>
      <div class="opinion layout">
        <p class="name">0个专题</p>
        <p class="set">我创建的</p>
        <van-icon class="jump" name="arrow-down" />
      </div>
      <div>
          <img class="none1" src="../../assets/images/none1.png"/>
            <van-button plain hairline class="button">立即创建 ></van-button>
           <div class="layout">
            <img class="line1" src="../../assets/images/新手指南1.png"/>
            <p class="new">新手指南</p>
            <img class="line2" src="../../assets/images/新手指南2.png"/>
          </div>
            <img class="pic" src="../../assets/images/创建专题1.png"/>
            <img class="pic" src="../../assets/images/创建专题2.png"/>

      </div>
  </van-tab>
  <van-tab title="文集">
      <div class="layout">
          <van-icon class="add" name="add-o" />
          <p>新建一个文集</p>
      </div>
      <div class="opinion layout">
        <p class="name1">2个文集（第一个文集是你新建的默认文集</p>
         <van-button plain hairline class="button1">排序</van-button>
      </div>
      <div class="layout">
          <img class="diary" src="../../assets/images/日记本.png"/>
          <div>
              <p class="title1">日记本</p>
              <p class="title2">Desire_r56c · 0篇文章 ·0人关注</p>
          </div>
      </div>    
      <van-divider />
         <div class="layout1">
          <img class="diary" src="../../assets/images/日记本.png"/>
          <div>
              <p class="title1">随笔</p>
              <p class="title2">Desire_r56c · 0篇文章 ·0人关注</p>
          </div>
      </div>  
      <div class="card">
      </div>  
  </van-tab>
</van-tabs>
   </div>
</template>

<script>
export default {
      data() {
    return {
      active: 2,
    };
  },
  methods: {
    back() {
      this.$router.push("/my");
    },
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
.none{
    width: 120px;
    height: 140px;
    margin-top: 250px;
}
.add{
    color: #69b94b;
    font-size: 25px;
    margin-left: 100px;
    margin-top: 15.5px;
}
.opinion{
    width: 100%;
    height: 30px;
    background-color: #f4f4f4;
    margin-top: 0px;
}
.name{
    font-size: 13px;
    padding-top:0px;
    padding-left: 20px;
    text-align: left;
    color: #8a8a8a;
}
.name1{
    font-size: 10px;
    padding-top:0px;
    padding-left: 20px;
    text-align: left;
    color: #8a8a8a;
    width: 190px;
}
.set{
    font-size: 13px;
    padding-top: 0px;
    padding-left: 180px;
    color: #8a8a8a;
}
.set1{
    font-size: 13px;
    padding-top: 0px;
    padding-left: 10px;
    color: #8a8a8a;
}
.jump{
    color: #8a8a8a;
    font-size: 13px;
    margin-top: 15px;
}
.none1{
    width: 250px;
    height: 150px;
    margin-top: 80px;
}
.button{
    margin-left: 0px;
    margin-top: 7px;
    color: #f45768;
    background-color:transparent;
    width: 100px;
    height: 50px;
}
.button1{
    margin-left:60px;
    margin-top: -7px;
    color: #69b94b;
    background-color:transparent;

}
.line1{
    width: 100px;
    height: 30px;
    margin-left: 40px;
    margin-top: 50px;
}
.line2{
    width: 100px;
    height: 30px;
    margin-left: 5px;
    margin-top: 50px;
}
.new{
    font-size: 14px;
    color: #8a8a8a;
    margin-top: 58px;
    margin-left: 0px;
}
.pic{
    width: 90%;
}
.diary{
    margin-left: 30px;
    margin-top: 15px;
    width: 35px;
    height: 35px;
}
.title1{
    font-size: 13px;
    text-align: left;
    margin-left:5px;
}
.title2{
    font-size: 11px;
    text-align: left;
    color: #8a8a8a;
    margin-left: 5px;
    margin-top: -5px;
}
.layout1{
    display:flex;
    margin-top: -30px;
}
.card{
    background-color: #f4f4f4;
    width: 100%;
    height: 500px;
    margin-top: 00px;
}
</style>