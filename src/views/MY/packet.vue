<template>
  <div>
    <div class="layout">
      <van-icon class="icon-back" @click="back" name="arrow-left" />
      <p class="title">我的钱包</p>
      <p class="question" @click="feedback">充值问题</p>
    </div>
    <div class="background">
      <div class="currency">
        <img
          class="icon-currency"
          src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E9%92%B1%E5%B8%81.png"
        />
        <div class="layout">
          <p class="word">简书币</p>
          <p class="zero">0.00</p>
          <van-button plain hairline class="button">充值</van-button>
        </div>
      </div>
      <div class="balance">
        <img
          class="icon-currency"
          src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%BA%A2%E5%8C%85.png"
        />
        <div class="layout">
          <p class="word1">余额</p>
          <p class="zero1">0.00</p>
          <van-button plain hairline class="button">提现</van-button>
        </div>
      </div>
    </div>
    <div class="layout">
      <img class="coupon" src="../../assets/images/优惠券.png" />
      <p class="coupon-name">优惠券</p>
      <van-icon class="coupon-jump" name="arrow" />
    </div>
    <van-divider class="line" />
    <div class="layout layout1" @click="income">
      <img class="coupon" src="../../assets/images/我的收入.png" />
      <p class="coupon-name">我的收入</p>
      <van-icon class="income-jump" name="arrow" />
    </div>
    <van-divider class="line" />
    <div class="layout layout1">
      <img class="coupon" src="../../assets/images/交易记录.png" />
      <p class="coupon-name">交易记录</p>
      <van-icon class="income-jump" name="arrow" />
    </div>
    <van-divider class="line" />
    <div class="layout layout1">
      <img class="coupon" src="../../assets/images/我的赞赏码.png" />
      <p class="coupon-name">我的赞赏码</p>
      <van-icon class="appreciate-jump" name="arrow" />
    </div>
    <van-divider class="line1" />
    <div class="layout layout1">
      <img class="coupon" src="../../assets/images/设置支付密码.png" />
      <p class="coupon-name">设置支付密码</p>
      <van-icon class="payment-jump" name="arrow" />
    </div>
    <van-divider class="line" />
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push("/my");
    },
    feedback() {
      this.$router.push("/problem");
    },
    income() {
      this.$router.push("/income");
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
.question {
  color: #f45768;
  font-size: 13px;
  margin-left: 45px;
  margin-top: 18px;
  width: 100px;
}
.background {
  background-color: #f4f4f4;
  height: 240px;
  margin-top: -10px;
}
.currency {
  background-color: #6093dd;
  width: 300px;
  opacity: 0.6;
  height: 100px;
  margin-left: 15px;
  border-radius: 10px;
  margin-top: 20px;
}
.icon-currency {
  opacity: 0.6;
  width: 100px;
  height: 100px;
  margin-left: -250px;
  margin-top: 25px;
  opactiy: 50;
}
.word {
  color: white;
  font-size: 19px;
  margin-left: 0px;
  margin-top: -95px;
  width: 100px;
}
.word1 {
  color: white;
  font-size: 19px;
  margin-left: -10px;
  margin-top: -95px;
  width: 100px;
}
.zero {
  font-size: 30px;
  color: white;
  margin-top: -100px;
  margin-left: 0px;
}
.zero1 {
  font-size: 30px;
  color: white;
  margin-top: -100px;
  margin-left: 10px;
}
.button {
  margin-left: 60px;
  margin-top: -97px;
  color: #ffffff;
  background-color: transparent;
  width: 58 px;
  height: 32px;
}
.balance {
  background-color: #df7b66;
  width: 300px;
  opacity: 0.6;
  height: 100px;
  margin-left: 15px;
  border-radius: 10px;
  margin-top: 20px;
}
.coupon {
  width: 38px;
  height: 38px;
  margin-left: 10px;
  margin-top: 20px;
}
.coupon-name {
  font-size: 16px;
  margin-top: 28px;
}
.coupon-jump {
  font-size: 15px;
  margin-top: 30px;
  margin-left: 200px;
  color: #bfbfbf;
}
.line {
  margin-top: 20px;
}
.line1 {
  margin-top: 10px;
}
.layout1 {
  margin-top: -20px;
}
.income-jump {
  font-size: 15px;
  margin-top: 30px;
  margin-left: 185px;
  color: #bfbfbf;
}
.appreciate-jump {
  font-size: 15px;
  margin-top: 30px;
  margin-left: 168px;
  color: #bfbfbf;
}
.payment-jump {
  font-size: 15px;
  margin-top: 30px;
  margin-left: 150px;
  color: #bfbfbf;
}
</style>
