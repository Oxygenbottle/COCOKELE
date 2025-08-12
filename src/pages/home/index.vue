<template>
  <div class="main">
    <navbar
      class="navbar"
      :style="{ top: `${topPadding}rpx` }"
      :navList="navList"
      :currentIndex="currentIndex"
      @changeTab="changeTab"
    ></navbar>
    <swiper
      class="swiper"
      style="height: 100vh"
      :indicator-dots="false"
      :autoplay="false"
      :interval="false"
      :duration="300"
      :current="currentIndex"
      @animationfinish="(e) => swiperChangeEnd(e)"
    >
      <swiper-item v-for="(item, index) in navList" :key="index">
        <div
          :style="{ height: `calc(${topPadding}rpx + ${navBarHeight}rpx)` }"
        ></div>
        <img class="bg" :style="imgStyle" :src="item.topBg" />
        <pageContainer :outerSwiperIndex="index"></pageContainer>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { navbar } from './components/navbar.vue';
import { pageContainer } from './components/pageContainer.vue';
import { getNavBarInfo } from '@/utils/getSystemInfo';
export default {
  components: { navbar, pageContainer },
  data() {
    return {
      navList: [
        {
          id: 0,
          name: '桃乐丝',
          topBg:
            'https://oxy-1258558723.cos.ap-shanghai.myqcloud.com/oxy_mini/img/doro_bg.png'
        },
        {
          id: 1,
          name: '大橘公馆',
          topBg:
            'https://oxy-1258558723.cos.ap-shanghai.myqcloud.com/oxy_mini/img/cat_bg.png'
        },
        {
          id: 2,
          name: '今菲昔比',
          topBg:
            'https://oxy-1258558723.cos.ap-shanghai.myqcloud.com/oxy_mini/img/feibi_bg.png'
        },
        {
          id: 3,
          name: 'shellter',
          topBg:
            'https://oxy-1258558723.cos.ap-shanghai.myqcloud.com/oxy_mini/img/shelter_bg.png'
        },
        {
          id: 4,
          name: '雪华',
          topBg:
            'https://oxy-1258558723.cos.ap-shanghai.myqcloud.com/oxy_mini/img/xuehua_bg.png'
        },
        {
          id: 5,
          name: '猫罗万象',
          topBg:
            'https://oxy-1258558723.cos.ap-shanghai.myqcloud.com/oxy_mini/img/maoluo_bg.png'
        }
      ],
      currentIndex: 0,
      topPadding: 0,
      navBarHeight: 0,
      imgStyle: '',
      systemInfo: {}
    };
  },
  async created() {
    this.navBarInfo = await getNavBarInfo();
    this.topPadding =
      this.navBarInfo.statusBarHeight + this.navBarInfo.navBarHeight;
    this.navBarHeight = this.navBarInfo.navBarHeight;
    this.imgStyle = `margin-top: -${this.topPadding}rpx`;
    this.getSystemInfo();
  },
  methods: {
    // 获取系统信息
    getSystemInfo() {
      try {
        const res = uni.getSystemInfoSync();
        this.systemInfo = res;
      } catch (e) {
        console.error('获取系统信息失败', e);
        // 提供默认值
        this.systemInfo = { windowWidth: 375 };
      }
    },
    swiperChangeEnd(e) {
      // console.log('swiperChangeEnd ====== >', e);
      this.currentIndex = e.detail.current;
    },
    changeTab(index) {
      this.currentIndex = index;
    }
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
  .navbar {
    position: fixed;
    left: 0;
    width: 100%;
    z-index: 10000;
  }
  .swiper {
    // border: 1px solid rebeccapurple;
  }
  .bg {
    width: 100vw;
    height: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    filter: brightness(50%) blur(1px);
    z-index: -1;
  }
}
</style>
