<template>
  <div class="nav-container" :style="navBarStyle">
    <div class="game-tabs">
      <div
        v-for="(item, index) in navList"
        :key="item.id"
        class="game-tab"
        :class="{ active: currentIndex === index }"
        @click="handleTabClick(index)"
      >
        {{ item.name }}
      </div>
    </div>
    <img class="game-icon" src="../../../assets/imgs/nav_menu_more.png" />
  </div>
</template>

<script>
import { getNavBarInfo } from "@/utils/getSystemInfo.js";
export default {
  name: "SafeAreaTabbar",
  props: {
    navList: {
      type: Array,
      default: () => [],
    },
    currentIndex: {
      type: Number,
      default: 0,
    },
    changeTab: {
      type: Function,
      default: () => {},
    },
  },
  watch: {
    currentIndex(newVal, oldVal) {
      console.log('currentIndex', newVal, oldVal);
      this.pickedTab = newVal;
    },
  },
  data() {
    return {
      navBarStyle: 0,
      pickedTab: 0,
    };
  },
  async created() {
    let navBarInfo = await getNavBarInfo();
    this.navBarStyle = `height: ${navBarInfo.navBarHeight}px;`;
    this.navBarStyle += `width: calc(100vw - ${navBarInfo.menuButton.width}px - 20px)`;
  },
  computed: {
    // 计算实际安全距离高度
  },
  methods: {
    getTabbarInfo() {
      getTabbarInfo().then((res) => {
        this.tabbarList = res.data;
        this.handleTabClick(0);
      });
    },
    handleTabClick(index) {
      this.$emit('changeTab', index);
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-container {
  display: flex;
  align-items: center;
  gap: 10rpx;
  color: #fff;
  .game-tabs {
    display: flex;
    align-items: baseline;
    flex-wrap: nowrap;
    gap: 40rpx;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 0 40rpx;
    box-sizing: border-box;
    position: relative;
    flex: 1;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    .game-tab {
      border-radius: $uni-border-radius-base;
      font-size: $uni-font-size-lg;
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      // padding: 0 10rpx; // 适当内边距
      transform: scale(1); // 默认缩放比例
      transform-origin: center;
      // transition: transform 0.2s ease;
      &.active {
        font-weight: 600;
        transform: scale(1.15); // 激活时放大
      }
    }
  }
  .game-icon {
    width: 32rpx;
    height: 32rpx;
  }
}
</style>
