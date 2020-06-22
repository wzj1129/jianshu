<template>
  <div>
    <!-- 搜索框 -->
    <div class="header">
      <van-search
        v-model="value"
        @click="search"
        shape="round"
        placeholder="搜索感兴趣的内容"
      />
      <div class="tab">
        <!-- 顶部导航栏 -->
        <van-tabs v-model="active">
          <van-tab title="推荐">
            <div>
              <div class="home-text1">
                <div>
                  <p class="title1">一个自律的人有多可怕？</p>
                  <p class="text1">
                    这是我身边非常非常自律的一位同事，他的的计划表。这都是他的一些日常。关于自律，到底...
                  </p>
                </div>
                <img class="img1" src="../../assets/images/推荐1.png" />
              </div>
              <div class="text-bottom">
                <img class="icon-zuanshi" src="../../assets/images/钻石.png" />
                <p class="num">45.804</p>
                <p class="font1">千阳千阳 2.3w 阅读 67 评论 898 赞</p>
                <img class="icon-cha" src="../../assets/images/叉.png" />
              </div>
              <img class="line1" src="../../assets/images/分隔线.png" />
            </div>
            <div class="home-text1">
              <p class="title1">我“私藏”的15个科研网站大盘点!</p>
            </div>
            <div class="home-text1">
              <img class="img2" src="../../assets/images/推荐2.png" />
              <img class="img3" src="../../assets/images/推荐3.png" />
              <img class="img3" src="../../assets/images/推荐4.png" />
            </div>
            <div class="text-bottom1">
              <img class="icon-zuanshi" src="../../assets/images/钻石.png" />
              <p class="num">2.463</p>
              <p class="font1">晨长进行时 912 阅读 0 评论 34 赞</p>
              <img class="icon-cha2" src="../../assets/images/叉.png" />
            </div>
            <img class="line1" src="../../assets/images/分隔线.png" />
            <div class="home-text1">
              <div>
                <van-image
                  class="forum-image"
                  round
                  src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E5%A4%B4%E5%83%8F.png"
                />
              </div>
              <div class="forum-information">
                <p class="forum-information-name">kk想你</p>
                <p class="forum-information-time">前天 21:20</p>
              </div>
              <img class="icon-cha1" src="../../assets/images/叉.png" />
            </div>
            <div class="home-text1" @click="content">
              <p>上联：孤独的人晚回家</p>
            </div>
            <div class="home-text1">
              <p class="text2">下联：</p>
            </div>
            <img class="home-text1 img5" src="../../assets/images/推荐5.png" />
            <div class="buttom1">
              <img
                class="img6"
                src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E4%BA%95%E5%8F%B7.png"
              />
              <p class="word">晒对联，写对联</p>
            </div>
            <div class="home-text1">
              <p class="writer">我想我是个诗人小岛</p>
              <img
                class="comment"
                src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E8%AF%84%E8%AE%BA.png"
              />
              <p class="comment-word">65</p>
              <van-icon class="Fabulous" name="good-job-o" />
              <p class="comment-word">57</p>
            </div>
            <img class="line1" src="../../assets/images/分隔线.png" />
            <div class="home-text1">
              <p class="title1">我“私藏”的15个科研网站大盘点!</p>
            </div>
            <div class="home-text1">
              <img class="img2" src="../../assets/images/推荐2.png" />
              <img class="img3" src="../../assets/images/推荐3.png" />
              <img class="img3" src="../../assets/images/推荐4.png" />
            </div>
            <div class="text-bottom1">
              <img class="icon-zuanshi" src="../../assets/images/钻石.png" />
              <p class="num">2.463</p>
              <p class="font1">晨长进行时 912 阅读 0 评论 34 赞</p>
              <img class="icon-cha2" src="../../assets/images/叉.png" />
            </div>
            <img class="line1" src="../../assets/images/分隔线.png" />
            <div class="home-text1">
              <div>
                <van-image
                  class="forum-image"
                  round
                  src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E5%A4%B4%E5%83%8F.png"
                />
              </div>
              <div class="forum-information">
                <p class="forum-information-name">kk想你</p>
                <p class="forum-information-time">前天 21:20</p>
              </div>
              <img class="icon-cha1" src="../../assets/images/叉.png" />
            </div>
            <div class="home-text1">
              <p>上联：孤独的人晚回家</p>
            </div>
            <div class="home-text1">
              <p class="text2">下联：</p>
            </div>
            <img class="home-text1 img5" src="../../assets/images/推荐5.png" />
            <div class="buttom1">
              <img
                class="img6"
                src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E4%BA%95%E5%8F%B7.png"
              />
              <p class="word">晒对联，写对联</p>
            </div>
            <div class="home-text1">
              <p class="writer">我想我是个诗人小岛</p>
              <img
                class="comment"
                src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E8%AF%84%E8%AE%BA.png"
              />
              <p class="comment-word">65</p>
              <van-icon class="Fabulous" name="good-job-o" />
              <p class="comment-word">57</p>
            </div>
            <img class="line1" src="../../assets/images/分隔线.png" />
            <div class="home-text1">
              <p class="title1">我“私藏”的15个科研网站大盘点!</p>
            </div>
            <div class="home-text1">
              <img class="img2" src="../../assets/images/推荐2.png" />
              <img class="img3" src="../../assets/images/推荐3.png" />
              <img class="img3" src="../../assets/images/推荐4.png" />
            </div>
            <div class="text-bottom1">
              <img class="icon-zuanshi" src="../../assets/images/钻石.png" />
              <p class="num">2.463</p>
              <p class="font1">晨长进行时 912 阅读 0 评论 34 赞</p>
              <img class="icon-cha2" src="../../assets/images/叉.png" />
            </div>
            <img class="line1" src="../../assets/images/分隔线.png" />
            <div class="home-text1">
              <div>
                <van-image
                  class="forum-image"
                  round
                  src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E5%A4%B4%E5%83%8F.png"
                />
              </div>
              <div class="forum-information">
                <p class="forum-information-name">kk想你</p>
                <p class="forum-information-time">前天 21:20</p>
              </div>
              <img class="icon-cha1" src="../../assets/images/叉.png" />
            </div>
            <div class="home-text1">
              <p>上联：孤独的人晚回家</p>
            </div>
            <div class="home-text1">
              <p class="text2">下联：</p>
            </div>
            <img class="home-text1 img5" src="../../assets/images/推荐5.png" />
            <div class="buttom1">
              <img
                class="img6"
                src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E4%BA%95%E5%8F%B7.png"
              />
              <p class="word">晒对联，写对联</p>
            </div>
            <div class="home-text1">
              <p class="writer">我想我是个诗人小岛</p>
              <img
                class="comment"
                src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E8%AF%84%E8%AE%BA.png"
              />
              <p class="comment-word">65</p>
              <van-icon class="Fabulous" name="good-job-o" />
              <p class="comment-word">57</p>
            </div>
            <img class="line1" src="../../assets/images/分隔线.png" />
            <div class="home-text1">
              <p class="title1">我“私藏”的15个科研网站大盘点!</p>
            </div>
            <div class="home-text1">
              <img class="img2" src="../../assets/images/推荐2.png" />
              <img class="img3" src="../../assets/images/推荐3.png" />
              <img class="img3" src="../../assets/images/推荐4.png" />
            </div>
            <div class="text-bottom1">
              <img class="icon-zuanshi" src="../../assets/images/钻石.png" />
              <p class="num">2.463</p>
              <p class="font1">晨长进行时 912 阅读 0 评论 34 赞</p>
              <img class="icon-cha2" src="../../assets/images/叉.png" />
            </div>
            <img class="line1" src="../../assets/images/分隔线.png" />
          </van-tab>
          <van-tab title="小岛">
            <div>
              <img class="img-xiaodao1" src="../../assets/images/小岛1.png" />
              <van-swipe style="height: 20px; margin-left:-80px" vertical>
                <van-swipe-item>
                  <img src="../../assets/images/精选.png" /> |
                  你的专业摆地摊能干嘛</van-swipe-item
                >
                <van-swipe-item
                  ><img
                    src="../../assets/images/推荐.png"
                  />每天起床第一句，先给自己打个气</van-swipe-item
                >
                <van-swipe-item
                  ><img
                    src="../../assets/images/推荐.png"
                  />吾日三省吾身，今天你学习了吗？</van-swipe-item
                >
              </van-swipe>
              <img class="line1" src="../../assets/images/分隔线.png" />
              <div class="line2">
                <van-divider />
              </div>
              <div>
                <div class="isle-tab">
                  <p
                    :class="{ co: isShow }"
                    @click="isShow = true"
                    style="margin-left: 10px;"
                  >
                    广场
                  </p>
                  <p
                    :class="{ co: !isShow }"
                    @click="isShow = false"
                    style="margin-left: 20px;"
                  >
                    我的
                  </p>
                  <p class="tab-3" @click="more">更多小岛></p>
                </div>
                <div v-if="isShow">
                  <div class="bigd">
                    <div class="dad">
                      <div class="son1">
                        <img
                          class="square1"
                          src="../../assets/images/广场1.png"
                        />
                      </div>
                      <div class="son2">
                        <img
                          class="square2"
                          src="../../assets/images/广场5.png"
                        />
                      </div>
                      <div class="son3">
                        <img
                          class="square3"
                          src="../../assets/images/广场6.png"
                        />
                      </div>
                      <div class="son4">
                        <img
                          class="square4"
                          src="../../assets/images/广场4.png"
                        />
                      </div>
                      <div class="son5">
                        <img
                          class="square5"
                          src="../../assets/images/广场2.png"
                        />
                      </div>
                      <div class="son6">
                        <img
                          class="square6"
                          src="../../assets/images/广场3.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  v-if="isShow"
                  class="line1"
                  src="../../assets/images/分隔线.png"
                />
                <div class="home-text1" v-if="isShow">
                  <div>
                    <van-image
                      class="forum-image"
                      round
                      src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E5%A4%B4%E5%83%8F.png"
                    />
                  </div>
                  <div class="forum-information">
                    <p class="forum-information-name">kk想你</p>
                    <p class="forum-information-time">前天 21:20</p>
                  </div>
                  <img class="icon-cha1" src="../../assets/images/叉.png" />
                </div>
                <div class="home-text1" v-if="isShow">
                  <p>上联：孤独的人晚回家</p>
                </div>
                <div class="home-text1" v-if="isShow">
                  <p class="text2">下联：</p>
                </div>
                <img
                  v-if="isShow"
                  class="home-text1 img5"
                  src="../../assets/images/推荐5.png"
                />
                <div class="home-text1" v-if="isShow">
                  <p class="writer">我想我是个诗人小岛</p>
                  <img
                    class="comment"
                    src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E8%AF%84%E8%AE%BA.png"
                  />
                  <p class="comment-word">65</p>
                  <van-icon class="Fabulous" name="good-job-o" />
                  <p class="comment-word">57</p>
                </div>
                <img
                  v-if="isShow"
                  class="line1"
                  src="../../assets/images/分隔线.png"
                />
              </div>

              <div v-if="!isShow">
                <img class="none" src="../../assets/images/none.png" />
              </div>
            </div>
          </van-tab>
          <van-tab title="专题">
            <div>
              <img class="img-xiaodao1" src="../../assets/images/小岛1.png" />
              <div class="home-text1">
                <img
                  class="special-icon"
                  src="../../assets/images/简友广场.png"
                />
                <img
                  class="special-icon1"
                  src="../../assets/images/热门专题.png"
                />
                <img
                  @click="official"
                  class="special-icon1"
                  src="../../assets/images/官方专题.png"
                />
                <img
                  class="special-icon1"
                  src="../../assets/images/投诉建议.png"
                />
                <img
                  class="special-icon1"
                  src="../../assets/images/工作招聘.png"
                />
              </div>
              <img class="line3" src="../../assets/images/分隔线.png" />
              <div class="special">
                <img
                  class="sort"
                  src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E5%88%86%E7%B1%BB.png"
                />
                <p class="special-word">我关注的专题</p>
                <van-icon class="jump" name="arrow" />
              </div>
              <img class="line4" src="../../assets/images/分隔线.png" />
              <div class="home-text1">
                <img class="photo" src="../../assets/images/相亲.png" />
                <img class="photo1" src="../../assets/images/摄影.png" />
                <img class="photo1" src="../../assets/images/婚姻育儿.png" />
              </div>
              <div class="home-text1">
                <p class="special-name">脱单</p>
                <p class="special-name1">摄影</p>
                <p class="special-name1">婚姻育儿</p>
              </div>
              <div class="home-text1">
                <p class="special-name3">简书推荐专题</p>
                <p class="special-name4">简书推荐专题</p>
                <p class="special-name4">件数推荐专题</p>
              </div>
              <div class="home-text1">
                <img class="photo" src="../../assets/images/读书.png" />
                <img class="photo1" src="../../assets/images/故事.png" />
                <img class="photo1" src="../../assets/images/程序员.png" />
              </div>
              <div class="home-text1">
                <p class="special-name">读书</p>
                <p class="special-name1">故事</p>
                <p class="special-name1">程序员</p>
              </div>
              <div class="home-text1">
                <p class="special-name3">简书推荐专题</p>
                <p class="special-name4">简书推荐专题</p>
                <p class="special-name4">件数推荐专题</p>
              </div>
              <div class="home-text1">
                <img class="photo" src="../../assets/images/旅行.png" />
                <img class="photo1" src="../../assets/images/自然科普.png" />
                <img class="photo1" src="../../assets/images/儿童.png" />
              </div>
              <div class="home-text1">
                <p class="special-name5">旅行·在路上</p>
                <p class="special-name6">自然科普</p>
                <p class="special-name7">原创儿童文学</p>
              </div>
              <div class="home-text1">
                <p class="special-name3">简书推荐专题</p>
                <p class="special-name4">简书推荐专题</p>
                <p class="special-name4">件数推荐专题</p>
              </div>
              <div class="home-text1">
                <img class="photo" src="../../assets/images/漫画.png" />
                <img class="photo1" src="../../assets/images/产品.png" />
                <img class="photo1" src="../../assets/images/手绘.png" />
              </div>
              <div class="home-text1">
                <p class="special-name">漫画</p>
                <p class="special-name1">@产品</p>
                <p class="special-name8">手绘</p>
              </div>
              <div class="home-text1">
                <p class="special-name3">简书推荐专题</p>
                <p class="special-name4">简书推荐专题</p>
                <p class="special-name4">件数推荐专题</p>
              </div>
              <div class="home-text1">
                <img class="photo" src="../../assets/images/IT.png" />
                <img class="photo1" src="../../assets/images/美食.png" />
                <img class="photo1" src="../../assets/images/电影.png" />
              </div>
              <div class="home-text1">
                <p class="special-name">@IT·互联网</p>
                <p class="special-name6">美食</p>
                <p class="special-name1">简书电影</p>
              </div>
              <div class="home-text1">
                <p class="special-name3">简书推荐专题</p>
                <p class="special-name4">简书推荐专题</p>
                <p class="special-name4">件数推荐专题</p>
              </div>
              <van-loading /> <van-loading type="spinner" />
            </div>
          </van-tab>
          <van-tab title="连载">
            <div>
              <img class="img-xiaodao1" src="../../assets/images/小岛1.png" />
              <div class="home-text1">
                <img
                  @click="classification"
                  class="special-icon"
                  src="../../assets/images/全部分类.png"
                />
                <img
                  @click="novel"
                  class="special-icon1"
                  src="../../assets/images/对话小说.png"
                />
                <img
                  class="special-icon1"
                  src="../../assets/images/简书FM.png"
                />
                <img
                  class="special-icon1"
                  src="../../assets/images/开通连载.png"
                />
                <img
                  @click="book"
                  class="special-icon1"
                  src="../../assets/images/连载书评.png"
                />
              </div>
              <img class="line3" src="../../assets/images/分隔线.png" />
              <div class="special">
                <img
                  class="sort"
                  src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E8%BF%9E%E8%BD%BD.png"
                />
                <p class="special-word">我关注的连载</p>
                <van-icon class="jump" name="arrow" />
              </div>
              <img class="line4" src="../../assets/images/分隔线.png" />
              <div class="home-text1">
                <img class="Serial-pic" src="../../assets/images/夜深.png" />
              </div>
              <div class="home-text1">
                <p class="Serial-name">夜深忽梦少年事</p>
              </div>
              <div class="home-text1">
                <div class=" home-text1 layout1">
                  <van-image
                    class="serial-img"
                    round
                    src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E5%A4%B4%E5%83%8F.png"
                  />
                  <p class="Serial-name2">默无文</p>
                  <img
                    class="eye"
                    src="https://zhxy1-vue.oss-cn-hangzhou.aliyuncs.com/pic/%E7%9C%BC%E7%9D%9B%20.png"
                  />
                  <p class="views">1.5万</p>
                </div>
                <img class="book" src="../../assets/images/许你.png" />
                <img class="book" src="../../assets/images/道德经.png" />
              </div>
              <div class="home-text1">
                <img class="book1" src="../../assets/images/论语.png" />
                <img class="book2" src="../../assets/images/TW.png" />
                <img class="book2" src="../../assets/images/Odin.png" />
              </div>
              <div class="home-text1">
                <img class="book1" src="../../assets/images/论语.png" />
                <img class="book2" src="../../assets/images/TW.png" />
                <img class="book2" src="../../assets/images/Odin.png" />
              </div>
              <div class="home-text1">
                <img class="book1" src="../../assets/images/论语.png" />
                <img class="book2" src="../../assets/images/TW.png" />
                <img class="book2" src="../../assets/images/Odin.png" />
              </div>
              <div class="home-text1">
                <img class="book1" src="../../assets/images/论语.png" />
                <img class="book2" src="../../assets/images/TW.png" />
                <img class="book2" src="../../assets/images/Odin.png" />
              </div>
            </div>
          </van-tab>
        </van-tabs>
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
    search() {
      this.$router.push("/search");
    },
    more() {
      this.$router.push("/more");
    },
    classification() {
      this.$router.push("/classification");
    },
    novel() {
      this.$router.push("/novel");
    },
    book() {
      this.$router.push("/book");
    },
    official() {
      this.$router.push("/official");
    },
    content() {
      this.$router.push("/content");
    }
  }
};
</script>

<style>
.header {
  margin-top: 10px;
  margin-left: 10px;
  width: 280px;
}
.tab {
  width: 328px;
}
.title1 {
  font-size: 16px;
  text-align: left;
}
.text1 {
  font-size: 14px;
  text-align: left;
  width: 200px;
  margin-top: -10px;
}
.img1 {
  width: 100px;
  height: 70px;
  margin-top: 30px;
  margin-left: 20px;
}
.home-text1 {
  display: flex;
}
.text-bottom {
  margin-top: -2px;
  display: flex;
}
.icon-zuanshi {
  width: 13px;
  height: 11.5px;
}
.num {
  font-size: 10px;
  margin-left: 4px;
  margin-top: 1px;
  color: #f45768;
}
.font1 {
  font-size: 10px;
  margin-top: 0px;
  margin-left: 10px;
  color: #afafaf;
}
.icon-cha {
  width: 8px;
  height: 8px;
  margin-left: 95px;
  margin-top: 5px;
}
.line1 {
  width: 380px;
  height: 10px;
  margin-left: -10px;
}
.line3 {
  width: 380px;
  height: 10px;
  margin-left: -10px;
  margin-top: 10px;
}
.line4 {
  width: 380px;
  height: 10px;
  margin-left: -10px;
  margin-top: 10px;
}
.img2 {
  width: 100px;
  height: 70px;
}
.img3 {
  width: 100px;
  height: 70px;
  margin-left: 10px;
}
.text-bottom1 {
  margin-top: 10px;
  display: flex;
}
.img4 {
  width: 80px;
  height: 30px;
  margin-top: 10px;
}
.icon-cha1 {
  width: 8px;
  height: 8px;
  margin-left: 230px;
  margin-top: 20px;
}
.icon-cha2 {
  width: 8px;
  height: 8px;
  margin-left: 107.5px;
  margin-top: 5px;
}
.text2 {
  margin-top: -10px;
}
.img5 {
  width: 110px;
  height: 150px;
}
.buttom1 {
  border-radius: 20px;
  width: 100px;
  height: 20px;
  display: flex;
  background-color: #f0f0f0;
  margin-top: 10px;
}
.img6 {
  width: 13px;
  height: 13px;
  display: flex;
  margin-left: 5px;
  margin-top: 3px;
}
.word {
  color: #f45768;
  font-size: 5px;
  margin-left: 5px;
  margin-top: 2px;
}
.writer {
  font-size: 3px;
  display: flex;
  color: #8a8a8a;
}
.comment {
  width: 12px;
  height: 12px;
  margin-left: 160px;
  margin-top: 5px;
}
.comment-word {
  font-size: 3px;
  margin-left: 5px;
  color: #8a8a8a;
  margin-top: 5px;
}
.Fabulous {
  width: 12px;
  height: 12px;
  margin-left: 15px;
  margin-top: 1.5px;
}
.bar-bottom {
  width: 328px;
}
.img-xiaodao1 {
  width: 328px;
  height: 120px;
  margin-left: -10px;
}
.forum-image {
  margin-left: 5px;
  margin-top: 15px;
  width: 30px;
  height: 30px;
}
.forum-information-name {
  font-size: 13px;
  margin-left: 5px;
  width: 50px;
}
.forum-information-time {
  font-size: 8px;
  color: #bfbfbf;
  margin-top: -10px;
  margin-left: 8px;
  width: 50px;
}
.isle-tab {
  display: flex;
  font-size: 15px;
}
.tab-1 {
  margin-left: 10px;
}
.tab-2 {
  margin-left: 20px;
}
.tab-3 {
  margin-left: 170px;
  font-size: 12px;
  margin-top: 18px;
}
.line2 {
  margin-top: -18px;
}
.bigd {
  height: 90%;
  width: 100%;
  overflow-x: scroll;
  box-sizing: border-box;
}
.dad {
  width: 800px;
  height: 90%;
}
.son1 {
  width: 120px;
  height: 150px;
  float: left;
  box-sizing: border-box;
}
.son2 {
  width: 120px;
  height: 150px;
  float: left;
  box-sizing: border-box;
  margin-left: 10px;
}
.son3 {
  width: 120px;
  height: 150px;
  float: left;
  box-sizing: border-box;
  margin-left: 10px;
}
.son4 {
  width: 120px;
  height: 150px;
  float: left;
  box-sizing: border-box;
  margin-left: 10px;
}
.son5 {
  width: 120px;
  height: 150px;
  float: left;
  box-sizing: border-box;
  margin-left: 10px;
}
.son6 {
  width: 120px;
  height: 150px;
  float: left;
  box-sizing: border-box;
  margin-left: 10px;
}

.square1 {
  width: 120px;
  height: 150px;
}
.square2 {
  width: 120px;
  height: 150px;
}
.square3 {
  width: 120px;
  height: 150px;
}
.square4 {
  width: 120px;
  height: 150px;
}
.square5 {
  width: 120px;
  height: 150px;
}
.square6 {
  width: 120px;
  height: 150px;
}
.co {
  color: #f45768;
}
.none {
  width: 160px;
  height: 200px;
  margin-top: 100px;
}
.special-icon {
  width: 50px;
  height: 55px;
  margin-top: 10px;
}
.special-icon1 {
  width: 50px;
  height: 55px;
  margin-left: 17px;
  margin-top: 10px;
}
.sort {
  margin-top: 7px;
  margin-left: 5px;
  width: 30px;
  height: 30px;
}
.special-word {
  font-size: 18px;
  margin-left: 5px;
  margin-top: 10px;
}
.special {
  display: flex;
  height: 40px;
}
.jump {
  margin-left: 150px;
  margin-top: 14px;
  width: 20px;
  height: 20px;
  color: #dcdcdc;
}
.photo1 {
  width: 100px;
  height: 100px;
  margin-left: 10px;
}
.photo {
  width: 100px;
  height: 100px;
}
.special-name {
  font-size: 14px;
  margin-top: 5px;
  font-weight: bold;
}
.special-name1 {
  font-size: 14px;
  margin-top: 5px;
  margin-left: 81px;
  font-weight: bold;
}
.special-name3 {
  font-size: 10px;
  margin-top: -15px;
  color: #afafaf;
}
.special-name4 {
  font-size: 10px;
  margin-top: -15px;
  margin-left: 50px;
  color: #afafaf;
}
.special-name5 {
  font-size: 14px;
  margin-top: 5px;
  font-weight: bold;
}
.special-name6 {
  font-size: 14px;
  margin-top: 5px;
  margin-left: 35px;
  font-weight: bold;
}
.special-name7 {
  font-size: 14px;
  margin-top: 5px;
  margin-left: 53px;
  font-weight: bold;
}
.special-name8 {
  font-size: 14px;
  margin-top: 5px;
  margin-left: 68px;
  font-weight: bold;
}
.Serial-pic {
  width: 100px;
  height: 130px;
}
.Serial-pic1 {
  width: 110px;
  height: 130px;
  margin-left: 10px;
}
.Serial-name {
  width: 330px;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  margin-top: 1px;
}
.Serial-name1 {
  width: 200px;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  margin-left: -25px;
}
.Serial-name2 {
  width: 300px;
  font-size: 5px;
  text-align: left;
  color: #a0a0a0;
  margin-top: 1px;
  margin-left: 2px;
}
.Serial-name3 {
  width: 300px;
  font-size: 12px;
  font-weight: bold;
  margin-left: 3px;
}
.serial-img {
  width: 15px;
  height: 15px;
}
.eye {
  width: 15px;
  height: 10px;
  margin-left: -255px;
  margin-top: 3px;
}
.views {
  font-size: 5px;
  color: #8a8a8a;
  margin-top: 0px;
}
.layout1 {
  width: 330px;
}
.book {
  width: 110px;
  height: 185px;
  margin-left: 20px;
  margin-top: -163px;
}
.book1 {
  width: 110px;
  height: 185px;
  margin-left: 0px;
}
.book2 {
  width: 110px;
  height: 185px;
  margin-left: 18px;
}
</style>
