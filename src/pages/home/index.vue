<template>
  <div class="main">
    <navbar></navbar>
    <img class="bg" src="../../assets/imgs/index_top_bg.png" />
    <pageContainer></pageContainer>
  </div>
</template>

<script>
import { navbar } from "./components/navbar.vue";
import { pageContainer } from "./components/pageContainer.vue";
export default {
  components: { navbar, pageContainer },
  data() {
    return {
      title: "首页",
      inited: false,
      // 可以在这里添加模拟数据  
      posts: [
        // 帖子数据
      ],
      currentIndex: 0,
    };
  },
  onLoad() {},
  methods: {
    changeTab(index) {
      console.log("index", index);
      wx.getWindowInfo()
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
  // background-color: $uni-bg-color;
  position: relative;
  z-index: 1;
  .bg {
    width: 100vw;
    // height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    filter: brightness(50%) blur(1px);
    z-index: -1;
  }
}
</style>
