<template>
  <div class="main">
    <navbar></navbar>
    <img class="bg" src="../../assets/imgs/index_top_bg.png" />

    <pageContainer></pageContainer>
  </div>
</template>

<script>
import { navbar } from './components/navbar.vue';
import { pageContainer } from './components/pageContainer.vue';
export default {
  components: { navbar, pageContainer },
  data() {
    return {
      navList: [
        { id: 0, name: '桃乐丝' },
        { id: 1, name: '大橘公馆' },
        { id: 2, name: '今菲昔比' },
        { id: 3, name: 'shellter' },
        { id: 4, name: '雪华' },
        { id: 5, name: '猫罗万象' }
      ],
      currentIndex: 0
    };
  },
  onLoad() {},
  methods: {

  }
};
</script>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
  // background-color: $uni-bg-color;
  position: relative;
  z-index: 1;
  // 隐藏滚动条
  -ms-overflow-style: none;
  scrollbar-width: none;
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
