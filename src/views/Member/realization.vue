<template>
    <div>
        <div class="layout">
          <van-icon class="icon-back" @click="back" name="arrow-left" />
          <p class="title">简书钻和简书贝变现</p>
        </div>
        <img class="pic" src="../../assets/images/变现.png"/>
        <div class="card">
            <div class="card1 layout">
                <img class="pic1" src="../../assets/images/变现1.png"/>
                <div>
                    <p class="text1">转化简书贝</p>
                    <p class="text2">简书钻变成人民需要</p>
                    <p class="text2">先转换为简书贝</p>
                </div>
                <van-button round class="button">钻转贝</van-button>
            </div>
              <div class="card3 layout">
                <img class="pic2" src="../../assets/images/变现2.png"/>
                <div>
                    <p class="text3">交易市场</p>
                    <p class="text4">通过【简书贝交易市场】</p>
                    <p class="text4">与其他用户交易，讲简书</p>
                    <p class="text4">贝变现</p>
                </div>
                <van-button round class="button1">去交易</van-button>
            </div>
                    <div class="card2 layout">
                <img class="pic2" src="../../assets/images/变现3.png"/>
                <div>
                    <p class="text1">转换成FTN</p>
                    <p class="text2">通过【简书贝】转换为</p>
                    <p class="text2">FTN，之后转换为人民币</p>
                </div>
                <van-button round class="button3">去转换</van-button>
            </div>
            <p class="look">查看我的FDAA</p>
               <div class="card1 layout">
                <img class="pic2" src="../../assets/images/变现4.png"/>
                <div>
                    <p class="text1">简书贝购买商品</p>
                    <p class="text2">使用【简书贝】购买商品</p>
                    <p class="text2">变现</p>
                </div>
                <van-button round class="button3">去购买</van-button>
            </div>
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
  margin-left: 55px;
  margin-top: 15px;
  width: 150px;
}
.pic{
    width: 100%;
}
.card{
    background-color: #f1c1b2;
    width: 100%;
    height: 500px;
    margin-top: -4px;
}
.card1{
    border:2px solid #e9edfc;
    border-radius:10px;
    width: 300px;
    height: 80px;
    background-color: #fdf9f7;
    margin-left: 12px;
}
.card2{
    border:2px solid #e9edfc;
    border-radius:10px;
    width: 300px;
    height: 80px;
    background-color: #fdf9f7;
    margin-left: 12px;
    margin-top: 10px;
}
.card3{
    border:2px solid #e9edfc;
    border-radius:10px;
    width: 300px;
    height: 100px;
    background-color: #fdf9f7;
    margin-left: 12px;
    margin-top: 10px;
}
.pic1{
    width: 70px;
    height: 65px;
    margin-left: 5px;
    margin-top: 10px;
}
.pic2{
    width: 55px;
    height: 50px;
    margin-left: 10px;
    margin-top: 20px;
}
.text1{
    font-size: 12px;
    font-weight: bold;
    color: #ee8f83;
    margin-left: 10px;
    text-align: left;
}
.text3{
    font-size: 12px;
    font-weight: bold;
    color: #ee8f83;
    margin-left: 10px;
    margin-top: 10px;
    text-align: left;
}
.text2{
    font-size: 11px;
    text-align: left;
    margin-left: 10px;
    margin-top: -8px;
}
.text4{
    font-size: 11px;
    text-align: left;
    margin-left: 10px;
    margin-top: -8px;
}
.button{
    width: 70px;
    height: 30px;
    background-color: #ee8f83;
    font-weight: bold;
    font-size: 12.5px;
    color: white;
    margin-top: 25px;
    margin-left: 30px;
}
.button1{
    width: 70px;
    height: 30px;
    background-color: #ee8f83;
    font-weight: bold;
    font-size: 12.5px;
    color: white;
    margin-top: 35px;
    margin-left: 20px;
}
.button2{
    width: 70px;
    height: 30px;
    background-color: #ee8f83;
    font-weight: bold;
    font-size: 12.5px;
    color: white;
    margin-top: 35px;
    margin-left: 20px;
}
.button3{
    width: 70px;
    height: 30px;
    background-color: #ee8f83;
    font-weight: bold;
    font-size: 12.5px;
    color: white;
    margin-top: 25px;
    margin-left: 20px;
}
.look{
    font-size: 11px;
    color: white;
    text-align: center;
    border-bottom:1px solid white;
    padding-bottom: -10px;
    width: 80px;
    margin-left: 120px;
}
</style>