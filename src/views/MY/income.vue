<template>
    <div>
        <div class="layout">
         <van-icon class="icon-back" @click="back" name="arrow-left" />
         <p class="title">我的收入</p>
    </div>
     <img class="line1" src="../../assets/images/分隔线.png" />
     <div class="layout">
         <p class="title1">累计收入</p>
         <p class="money">￥ 0.00</p>
     </div>
     <img class="line1" src="../../assets/images/分隔线.png" />
     <div class="layout">
         <p class="time">2020年6月收入</p>
         <p class="money1">￥0.00</p>
     </div>
     <van-divider class="line1" />
    <div class="layout">
         <p class="time1">2020年5月收入</p>
         <p class="money2">￥0.00</p>
     </div>
     <van-divider class="line1" />       
     <div class="layout">
         <p class="time1">2020年4月收入</p>
         <p class="money2">￥0.00</p>
     </div>
     <van-divider class="line1" />     
          <div class="layout">
         <p class="time1">2020年3月收入</p>
         <p class="money2">￥0.00</p>
     </div>
     <van-divider class="line1" />  
          <div class="layout">
         <p class="time1">2020年2月收入</p>
         <p class="money2">￥0.00</p>
     </div>
     <van-divider class="line1" />  
          <div class="layout">
         <p class="time1">2020年1月收入</p>
         <p class="money2">￥0.00</p>
     </div>
     <van-divider class="line1" />  
          <div class="layout">
         <p class="time1">2019年12月收入</p>
         <p class="money3">￥0.00</p>
     </div>
     <van-divider class="line1" />  
          <div class="layout">
         <p class="time1">2020年11月收入</p>
         <p class="money3">￥0.00</p>
     </div>
     <van-divider class="line1" />  
          <div class="layout">
         <p class="time1">2020年10月收入</p>
         <p class="money3">￥0.00</p>
     </div>
     <van-divider class="line1" />  
          <div class="layout">
         <p class="time1">2020年9月收入</p>
         <p class="money2">￥0.00</p>
     </div>
     <van-divider class="line1" />  
    </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.push("/packet");
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
  margin-left: 55px;
  margin-top: 13px;
  width: 150px;
}
.line {
  margin-top: -10px;
}
.line1{
    height: 20px;
    margin-top: -10px;
}
.title1{
    font-size: 13px;
    margin-top: 10px;
    margin-left: 20px;
}
.money{
    font-size: 20px;
    margin-left: 180px;
    margin-top: 5px;
}
.time{
    font-size: 12px;
    margin-top: 5px;
    margin-left: 17px;
}
.time1{
    font-size: 12px;
    margin-top: -18px;
    margin-left: 17px;
}
.money1{
    font-size: 12px;
    margin-left: 180px;
    margin-top: 5px;
    color: #8a8a8a;
}
.money2{
    font-size: 12px;
    margin-left: 180px;
    margin-top: -18px;
    color: #8a8a8a;
}
.money3{
    font-size: 12px;
    margin-left: 174px;
    margin-top: -18px;
    color: #8a8a8a;
}
</style>