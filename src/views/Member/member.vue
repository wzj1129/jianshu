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
      <div class="member-tab">
        <p
          :class="{ co: isShow }"
          @click="isShow = true"
          style="margin-left: 10px;"
        >
         昨日收益
        </p>
        <p
         :class="{ co: !isShow }"
         @click="isShow = false"
         style="margin-left: 20px;"
        >
        累计收益
        </p>
        </div>
        <div class="layout">
          <p class="front">买会员，立享持钻奖励，</p>
          <p class="after">快速提升收益</p>
        </div>
        <div class="card2">
          <p class="zero3 layout"> 0（约 0 元）</p>
          <div class="layout">
            <p class="profit1">PoC收益</p>
            <p class="reward1">持钻奖励</p>
            <van-icon class="icon-q" name="question-o" />
          </div>
          <div class="layout">
            <p class="profit2">每天点赞文章赚收益！</p>
            <van-icon class="jump3" name="arrow" />
            <p class="reward2">收益率高至31.98%！</p>
            <van-icon class="jump3" name="arrow" />
          </div>
           <div class="layout">
            <p class="profit1">推广收益</p>
            <p class="reward1">旗下会员持钻奖励</p>
           </div> 
           <div class="layout">
               <p class="profit3">邀好友赚收益！</p>
               <p class="reward3">会员大使专属~</p>
           </div>
          <div class="layout">
            <p class="profit4">去邀请</p>
            <van-icon class="jump4" name="arrow" />
            <p class="reward4">了解详情</p>
            <van-icon class="jump3" name="arrow" />
          </div>
        </div>
        <div>
          <div class="layout">
            <p class="earn">我要赚收益</p>
            <p class="Bonus">22.000个收益加成卡待领取</p>
            <van-icon class="jump5" name="arrow" />
          </div>
          <div class="layout">
            <img class="earn1" src="../../assets/images/任务中心.png"/>
            <img class="earn2" src="../../assets/images/持钻奖励.png"/>
            <img class="earn3" src="../../assets/images/天天抽奖.png"/>
            <img class="earn4" src="../../assets/images/排行榜.png"/>
          </div>
          <div class="layout">
            <img class="earn6" src="../../assets/images/打榜.png"/>
            <img class="earn5" src="../../assets/images/邀请有奖.png"/>
          </div>
          <div class="layout">
            <p class="earn">我要变现</p>
          </div>
          <div class="layout">
            <img class="earn6" src="../../assets/images/贝市场.png"/>
            <img class="earn5" src="../../assets/images/福利商城.png"/>
            <img class="earn5" src="../../assets/images/变现指南.png"/>
          </div>
          <img class="Rotation" src="../../assets/images/简书钻轮播图.png"/>
           <img class="line2" src="../../assets/images/分隔线.png" />
           <div>
             <p class="drill-title">什么是简书钻</p>
             <div class="layout">
               <p class="drill-word">简书钻，是简书社区全新推出的-种独特的、用于衡量用户在简书社区做出贡献和价值的虚拟道具，具有公开透明、不可篡改的特点。</p>
             </div>
              <p class="drill-title1">简书钻有什么用</p>
              <div class="layout">
                <img class="drill-pic1" src="../../assets/images/简书钻1.png"/>
                <img class="drill-pic2" src="../../assets/images/简书钻2.png"/>
              </div>
              <p class="drill-title1">如何获得简书钻</p>
              <div class="layout">
                <img class="drill-pic3" src="../../assets/images/文章点赞.png"/>
                <img class="drill-pic4" src="../../assets/images/加成卡.png"/>
                <img class="drill-pic4" src="../../assets/images/简书贝.png"/>
              </div>
              <div class="layout">
                <p class="know">点击了解更多</p>
                <img class="jump-know" src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E8%B7%B3%E8%BD%AC.png"/>
              </div>
           </div>
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
.member-tab{
  display: flex;
  color: #a5a5a5;
}
.co{
  color: black;
  font-weight: bold;
  border-bottom: 4px solid #f45768 ;
  padding-bottom:5px;
}
.front{
  font-size: 10px;
  color: #bfbfbf;
  margin-top:-5px;
  margin-left: 8px;
}
.after{
  font-size: 10px;
  color: #f45768;
  margin-top: -5px;
}
.card2{
  width: 310px;
  height: 210px;
  margin-top:-18px;
  background-color:#f5f6f9;
  border-radius: 10px;
}
.zero3{
  margin-left: 20px;
}
.line{
  height: 30px;
  margin-top: 50px;
  margin-left: 30px;  
}
.line1{
  height: 1px;
  width: 100px;
}
.profit1{
  font-size: 12px;
  margin-left: 30px;
  margin-top: 8px;
}
.reward1{
  font-size: 12px;
  margin-top:8px;
  margin-left: 110px;
}
.icon-q{
  font-size: 12px;
  color: #bfbfbf;
  margin-top:11px;
  margin-left: 2px;
}
.profit2{
  font-size: 10px;
  color: #a5a5a5;
  margin-left: 30px;
  margin-top:5px;
  width: 80px;
}
.jump3{
  font-size: 10px;
  color: #a5a5a5;
  margin-top: 7px;
  margin-left: 3px;
}
.reward2{
  font-size: 10px;
  margin-top:5px;
  margin-left: 65px;
  color: #a5a5a5;
}
.profit3{
  font-size: 10px;
  color: #a5a5a5;
  margin-left: 24px;
  margin-top:5px;
  width: 80px;
}
.reward3{
  font-size: 10px;
  margin-top:5px;
  margin-left: 83px;
  color: #a5a5a5;
}
.profit4{
  font-size: 10px;
  color: #a5a5a5;
  margin-left: 4px;
  margin-top:5px;
  width: 80px;
}
.reward4{
  font-size: 10px;
  margin-top:5px;
  margin-left: 118px;
  color: #a5a5a5;
}
.jump4{
  font-size: 10px;
  color: #a5a5a5;
  margin-top: 7px;
  margin-left: -23px;
}
.earn{
  font-size: 15px;
  margin-left: 10px;
  font-weight: bold;
}
.Bonus{
  font-size: 10px;
  margin-top:18px;
  margin-left: 80px;
  color: #a5a5a5;
}
.jump5{
  font-size: 10px;
  color: #a5a5a5;
  margin-top: 20px;
  margin-left: 3px;
}
.earn1{
  width: 50px;
  height: 60px;
  margin-left: 15px;
}
.earn2{
  width: 55px;
  height: 56px;
  margin-left: 30px;
  margin-top: -1px;
}
.earn3{
  width: 53px;
  height: 57px;
  margin-left: 30px;
}
.earn4{
  width: 50px;
  height: 58px;
  margin-left: 30px;
  margin-top: 0px;
}
.earn5{
  width: 53px;
  height: 57px;
  margin-left: 35px;
  margin-top: 10px;
}
.earn6{
  width: 43px;
  height: 57px;
  margin-left: 17px;
  margin-top: 10px;
}
.Rotation{
  width: 300px;
  margin-top: 20px;
}
.line2{
  width: 380px;
  height: 10px;
  margin-left: -10px;
  margin-top: 20px;
}
.drill-title{
  font-size: 16px;
  font-weight: bold;
}
.drill-word{
  font-size: 13px;
  text-align: left;
  width: 280px;
  margin-left: 20px;
}
.drill-title1{
  font-size: 16px;
  font-weight: bold;
  margin-top:20px;
}
.drill-pic1{
  width: 130px;
  height: 190px;
  margin-left: 20px;
}
.drill-pic2{
  width: 130px;
  height: 190px;
  margin-left: 10px;
}
.drill-pic3{
  width: 80px;
  height: 100px;
}
.drill-pic4{
  width: 80px;
  height: 100px;
  margin-left: 30px;
}
.know{
  font-size: 15px;
  color: #a5a5a5;
  margin-left: 100px;
  margin-top: 30px;
}
.jump-know{
  width: 15px;
  height: 15px;
  margin-top:33px;
  margin-left: 5px;
}
</style>
