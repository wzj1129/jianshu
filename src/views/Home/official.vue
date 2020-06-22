<template>
    <div>
       <div class="layout">
         <van-icon class="icon-back" @click="back" name="arrow-left" />
         <p class="title">推荐专题</p>
    </div>
     <van-divider class="line1" />
     <div class="layout">
         <img class="title1" src="../../assets/images/专题1.png"/>
         <div>
             <p class="name">自然科普</p>
             <div class="layout">
               <img class="icon" src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E6%96%87%E7%AB%A0%20%281%29.png"/>
               <p class="word">机器学习、优化理论、统计分析、数据...</p>
             </div>
              <div class="layout">
               <img class="icon" src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E6%96%87%E7%AB%A0%20%281%29.png"/>
               <p class="word">关于丙型肝炎，您了解多少？</p>
             </div>
              <div class="layout">
               <img class="icon" src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E6%96%87%E7%AB%A0%20%281%29.png"/>
               <p class="word">日环食|一场不可错过的十年之约</p>
             </div>
              <van-divider class="line" />
         </div>
         <van-button round type="primary" class="button">关注</van-button>
     </div>
     <div class="layout">
         <img class="title1" src="../../assets/images/专题2.png"/>
         <div>
             <p class="name">故事</p>
             <div class="layout">
               <img class="icon" src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E6%96%87%E7%AB%A0%20%281%29.png"/>
               <p class="word">故事优选||曲终人散皆是梦，繁华落尽一...</p>
             </div>
              <div class="layout">
               <img class="icon" src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E6%96%87%E7%AB%A0%20%281%29.png"/>
               <p class="word">爸爸的交响曲</p>
             </div>
              <div class="layout">
               <img class="icon" src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E6%96%87%E7%AB%A0%20%281%29.png"/>
               <p class="word">野花</p>
             </div>
              <van-divider class="line" />
         </div>
         <van-button round type="primary" class="button1">关注</van-button>
     </div>
     <div class="layout">
         <img class="title1" src="../../assets/images/专题3.png"/>
         <div>
             <p class="name">读书</p>
             <div class="layout">
               <img class="icon" src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E6%96%87%E7%AB%A0%20%281%29.png"/>
               <p class="word">《平凡的世界》众生相之爱情与面包，孙...</p>
             </div>
              <div class="layout">
               <img class="icon" src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E6%96%87%E7%AB%A0%20%281%29.png"/>
               <p class="word">淡化了爱情的少年维持究竟有什么痛苦？</p>
             </div>
              <div class="layout">
               <img class="icon" src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E6%96%87%E7%AB%A0%20%281%29.png"/>
               <p class="word">给爱情以岁月，也给岁月以爱情</p>
             </div>
              <van-divider class="line" />
         </div>
         <van-button round type="primary" class="button2">关注</van-button>
     </div>
     <div class="layout">
         <img class="title1" src="../../assets/images/专题4.png"/>
         <div>
             <p class="name">摄影</p>
             <div class="layout">
               <img class="icon" src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E6%96%87%E7%AB%A0%20%281%29.png"/>
               <p class="word">回到家国的日子（三十三）</p>
             </div>
              <div class="layout">
               <img class="icon" src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E6%96%87%E7%AB%A0%20%281%29.png"/>
               <p class="word">师韵</p>
             </div>
              <div class="layout">
               <img class="icon" src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E6%96%87%E7%AB%A0%20%281%29.png"/>
               <p class="word">原创 蛋蛋玫瑰折纸 一纸成型</p>
             </div>
              <van-divider class="line" />
         </div>
         <van-button round type="primary" class="button3">关注</van-button>
     </div>
     <div class="layout">
         <img class="title1" src="../../assets/images/专题5.png"/>
         <div>
             <p class="name">@IT·互联网</p>
             <div class="layout">
               <img class="icon" src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E6%96%87%E7%AB%A0%20%281%29.png"/>
               <p class="word">常用验证码之字符串验证码</p>
             </div>
              <div class="layout">
               <img class="icon" src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E6%96%87%E7%AB%A0%20%281%29.png"/>
               <p class="word">去薇娅的公司面试是怎样一种体验？</p>
             </div>
              <div class="layout">
               <img class="icon" src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E6%96%87%E7%AB%A0%20%281%29.png"/>
               <p class="word">从“引流时代”到“场景时代”，全球电商业...</p>
             </div>
              <van-divider class="line" />
         </div>
         <van-button round type="primary" class="button1">关注</van-button>
     </div>
    </div>
</template>

<script>
export default {
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
  color: #8a8a8a;
}
.title {
  font-size: 17px;
  margin-left: 55px;
  margin-top: 13px;
  width: 150px;
}
.line{
  margin-top: 0px;
}
.line1 {
  margin-top: -10px;
}
.title1{
    width: 35px;
    height: 35px;
    margin-top: -10px;
    margin-left: 10px;
}
.name{
    font-size: 13px;
    margin-top: -5px;
    margin-left: 10px;
    text-align: left;
}
.icon{
    width: 12px;
    height: 12px;
    margin-left: 5px;
}
.word{
  font-size: 10px;
  color: #8a8a8a;
  margin-top: 0px;
}
.button{
  width: 60px;
  height: 20px;
  margin-top: 0px;
  margin-left: 20px;
  font-size: 13px;
}
.button1{
  width: 60px;
  height: 20px;
  margin-top: 0px;
  margin-left: 15px;
  font-size: 13px;
}
.button2{
  width: 60px;
  height: 20px;
  margin-top: 0px;
  margin-left: 10px;
  font-size: 13px;
}
.button3{
  width: 60px;
  height: 20px;
  margin-top: 0px;
  margin-left: 72px;
  font-size: 13px;
}
</style>