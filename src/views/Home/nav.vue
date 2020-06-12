<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active" active-color="#d9755f" inactive-color="#000">
      <van-tabbar-item
        to="/home"
        icon="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E9%A6%96%E9%A1%B5.png"
        >首页</van-tabbar-item
      >
      <van-tabbar-item
        to="/follow"
        icon="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E5%85%B3%E6%B3%A8.png"
        >关注</van-tabbar-item
      >
      <van-tabbar-item
        to="/member"
        icon="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%BA%A7%E5%88%AB%20%E9%92%BB%E7%9F%B3.png"
        >简书钻</van-tabbar-item
      >
      <van-tabbar-item
        to=""
        icon="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E6%B6%88%E6%81%AF.png"
        >消息</van-tabbar-item
      >
      <van-tabbar-item
        to=""
        icon="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E6%88%91%20%E7%9A%84.png"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home"
    };
  }
};
</script>

<style></style>
