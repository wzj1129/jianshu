<template>
  <div>
     <div class="layout">
      <van-icon class="icon-back" @click="back" name="arrow-left" />
      <p class="title">充值问题</p>
      <p class="feedback">快捷反馈</p>
    </div>
    <div class="opinion">
        <p class="name">问题和意见</p>
    </div>
    <div class="Textbox">
        <van-field
          v-model="value"
          placeholder="您在充值过程中遇到了什么问题"
          input-align="left"
        />
    </div>
    <div class="opinion">
        <p class="if">若反馈充值未到账，请上传充值结果截图（如成功扣费的短信、苹果的收据邮件截图等）</p>
    </div>
    <div class="Textbox">
        <img class="pic" src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E4%B8%8A%E4%BC%A0%E5%9B%BE%E7%89%87.png"/>
    </div>
     <div class="contact">
        <p class="name">联系方式（选填）</p>
    </div>
    <div class="vx">
         <van-field
          v-model="value"
          placeholder="微信/QQ/邮箱"
          input-align="left"
        />
    </div>
    <div class="card">
       <van-button disabled class="button" color="#aad79b">提交反馈</van-button
      >
    </div>
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
}
.title {
  font-size: 17px;
  margin-left: 85px;
  margin-top: 13px;
  width: 150px;
}
.feedback {
  color: #f45768;
  font-size: 13px;
  margin-left: 45px;
  margin-top: 18px;
  width: 100px;
}
.opinion{
    width: 100%;
    height: 40px;
    background-color: #f4f4f4;
    margin-top: -20px;
}
.name{
    font-size: 13px;
    padding-top: 13px;
    padding-left: 10px;
    text-align: left;
    color: #8a8a8a;
}
.Textbox{
    width: 100%;
    height: 200px;
}
.if{
    font-size: 11px;
    padding-top: 5px;
    padding-left: 10px;
    text-align: left;
    color: #8a8a8a;
}
.pic{
    width: 70px;
    height: 70px;
    padding-top: 20px;
    margin-left:-230px;
}
.contact{
    width: 100%;
    height: 40px;
    margin-top: -100px;
    background-color: #f4f4f4;
}
.vx{
    width: 100%;
    height: 40px;

}
.button{
    width: 300px;
    height: 40px;
    margin-top: 30px;
}
.card{
  width: 100%;
  height: 300px;
  background-color: #f4f4f4;
}
</style>