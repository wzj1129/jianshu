<template>
  <div>
     <div class="layout">
      <p class="cancel" @click="back">取消</p>
      <p class="title">新建专题</p>
      <p class="done" @click="feedback">完成</p>
    </div>
    <van-divider class="line" />
    <van-uploader
     multiple
      :max-count="5"
      :max-size="3 * 1024 * 1024"
      @oversize="onOversize"
    />
    <van-divider class="" />
    <van-cell-group>
  <van-field v-model="value" placeholder="专题命名（不超过50字）" />
  </van-cell-group>
     <van-cell-group>
  <van-field v-model="value" placeholder="为专题添加适当的描述" />
  </van-cell-group>
      <van-divider class="line1" />
      <div class="layout">
               <van-button class="set" icon="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E8%AE%BE%20%E7%BD%AE.png">投稿需要审核</van-button>
      <van-button class="edit">编辑管理
          <van-icon class="jump1" name="arrow" />
      </van-button>
      <van-button class="add">添加标签
          <van-icon class="jump1" name="arrow" /></van-button> 
      </div>

  </div>
</template>

<script>
export default {
      data() {
    return {
      value: '',
    };
  },
  methods: {
    back() {
      this.$router.push("/special");
    },
      onOversize(file) {
      console.log(file);
    },
  }
};
</script>

<style>
.layout {
  display: flex;
}
.cancel {
 color: #f45768;
  font-size: 15px;
  margin-left: 10px;
  margin-top: 18px;
  width: 40px;
}
.title {
  font-size: 17px;
  margin-left: 65px;
  margin-top: 15px;
  width: 80px;
}
.done {
  color: #f45768;
  font-size: 15px;
  margin-left: 45px;
  margin-top: 18px;
  width: 100px;
}
.line{
    margin-top: -10px;
}
.line1{
    margin-top: 480px;
}
.set{
    font-size: 11px;
    width: 150px;
    height: 30px;
    margin-left: 0px;
    color: #8a8a8a;
}
.edit{
    font-size: 13px;
    width: 120px;
    height: 30px;
    margin-left: 0px;
    color: #8a8a8a;
}
.add{
    font-size: 13px;
    width: 120px;
    height: 30px;
    margin-left: 0px;
    color: #8a8a8a;
}
.jump1{
    font-size: 13px;
    color: #bfbfbf;
}
</style>