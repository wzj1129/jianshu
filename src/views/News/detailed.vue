<template>
  <div>
    <div class="layout">
      <van-icon class="icon-back" @click="back" name="arrow-left" />
      <p class="title">明细</p>
    </div>
    <div>
      <van-tabs v-model="active">
        <van-tab title="简书钻">
          <div>
            <img class="pic" src="../../assets/images/明细1.png" />
            <img class="line" src="../../assets/images/分隔线.png" />
            <div>
              <p class="title1">什么是简书钻</p>
              <p class="word1">
                简书钻可以更好地奖赏您在简书做的贡献，文章热度赚取收益，所有的简书社区参与都可以创造价值;
              </p>
              <p class="word1">
                简书钻可以公平透明地衡量社区贡献，简友根据贡献高低享受不同的权益，新的简书之旅已经启程。
              </p>
              <van-button class="button" round="" color="#eb632a"
                >了解简书钻详情</van-button
              >
            </div>
          </div>
        </van-tab>
        <van-tab title="简书贝">
          <div>
            <img class="pic" src="../../assets/images/明细3.png" />
            <img class="line" src="../../assets/images/分隔线.png" />
            <div>
              <p class="title1">什么是简书贝</p>
              <p class="word1">
                简书贝可以和简书钻按照1:1的比例进行转换，在简书社区具有转赠功能(即将上线)
                ;
              </p>
              <p class="word1">
                您可以把简书贝转换为简书钻参与PoC机制运行，将来也可以把简书贝赠送给喜欢的作者
              </p>
              <van-button class="button" round="" color="#eb632a"
                >了解简书贝详情</van-button
              >
            </div>
          </div>
        </van-tab>
        <van-tab title="借钻">
          <div>
            <img class="pic" src="../../assets/images/明细2.png" />
            <img class="line" src="../../assets/images/分隔线.png" />
            <div>
              <p class="title1">什么是简书钻</p>
              <p class="word1">
                简书钻可以更好地奖赏您在简书做的贡献，文章热度赚取收益，所有的简书社区参与都可以创造价值;
              </p>
              <p class="word1">
                简书钻可以公平透明地衡量社区贡献，简友根据贡献高低享受不同的权益，新的简书之旅已经启程。
              </p>
              <van-button class="button" round="" color="#eb632a"
                >了解简书钻详情</van-button
              >
            </div>
          </div>
        </van-tab>
        <van-tab title="持钻奖励">
          <div>
            <img class="pic" src="../../assets/images/明细2.png" />
            <img class="line" src="../../assets/images/分隔线.png" />
            <div>
              <p class="title1">什么是简书钻</p>
              <p class="word1">
                简书钻可以更好地奖赏您在简书做的贡献，文章热度赚取收益，所有的简书社区参与都可以创造价值;
              </p>
              <p class="word1">
                简书钻可以公平透明地衡量社区贡献，简友根据贡献高低享受不同的权益，新的简书之旅已经启程。
              </p>
              <van-button class="button" round="" color="#eb632a"
                >了解简书钻详情</van-button
              >
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2
    };
  },
  methods: {
    back() {
      this.$router.push("/news");
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
  font-size: 15px;
  margin-left: 125px;
}
.line {
  height: 10px;
}
.title1 {
  font-size: 16px;
  font-weight: bold;
}
.pic {
  width: 328px;
  margin-top: 20px;
}
.word1 {
  width: 280px;
  font-size: 12px;
  text-align: left;
  margin-left: 20px;
}
.button {
  width: 280px;
  height: 40px;
  margin-top: 10px;
}
</style>
