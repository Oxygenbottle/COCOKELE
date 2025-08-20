<template>
  <div class="nav-container" :style="navBarStyle">
    <scroll-view
      class="game-tabs-scroll"
      scroll-x="true"
      scroll-with-animation
      :scroll-left="scrollLeft"
    >
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
    </scroll-view>
    <img class="game-icon" src="../../../assets/imgs/nav_menu_more.png" />
  </div>
</template>

<script>
import { getNavBarInfo } from '@/utils/getSystemInfo.js';
export default {
  name: 'SafeAreaTabbar',
  props: {
    navList: {
      type: Array,
      default: () => []
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {
    currentIndex(newVal) {
      this.pickedTab = newVal;
      // 当currentIndex变化时，滚动到选中的tab
      this.scrollToTab(newVal);
    }
  },
  data() {
    return {
      navBarStyle: {},
      pickedTab: 0,
      scrollLeft: 0,
      tabPositions: [], // 缓存所有tab的位置信息
      viewportCenter: 0, // 视口中心位置
      systemInfo: {} // 系统信息
    };
  },
  async created() {
    // 获取系统信息
    this.getSystemInfo();
    let navBarInfo = await getNavBarInfo();
    console.log('navBarIn ====== > ', navBarInfo);
    (this.navBarStyle = `height: ${navBarInfo.navBarHeight}px;`),
      (this.navBarStyle += `width: calc(100vw - ${navBarInfo.menuButton.width || 75}px - 40px)`);
  },
  mounted() {
    // 初始化时缓存所有tab位置
    this.cacheTabPositions();
    // 初始时滚动到选中的tab
    setTimeout(() => {
      this.scrollToTab(this.currentIndex);
    }, 100);
  },
  methods: {
    // 获取系统信息
    getSystemInfo() {
      try {
        const res = uni.getSystemInfoSync();
        this.systemInfo = res;
        this.viewportCenter =
          (res.windowWidth - res.menuButton.width - 40) / 2 || 300;
      } catch (e) {
        console.error('获取系统信息失败', e);
        // 提供默认值
        this.systemInfo = { windowWidth: 375 };
        this.viewportCenter = 187.5;
      }
    },

    // 缓存所有tab的位置信息
    cacheTabPositions() {
      const query = uni.createSelectorQuery().in(this);
      query.selectAll('.game-tab').boundingClientRect();
      query.exec((res) => {
        if (res && res[0]) {
          this.tabPositions = res[0];
        } else {
          // 重试机制
          setTimeout(() => {
            this.cacheTabPositions();
          }, 100);
        }
      });
    },

    // 滚动到指定tab
    scrollToTab(index) {
      if (!this.tabPositions[index]) {
        // 如果位置信息还没加载完成，等待后重试
        setTimeout(() => {
          this.scrollToTab(index);
        }, 100);
        return;
      }

      const rect = this.tabPositions[index];
      const tabCenter = rect.left + rect.width / 2;
      const newScrollLeft = tabCenter - this.viewportCenter;

      // 使用数据绑定方式滚动scroll-view
      this.scrollLeft = newScrollLeft;
    },

    handleTabClick(index) {
      this.pickedTab = index;
      this.$emit('changeTab', index);
      // 点击时滚动到选中的tab
      this.scrollToTab(index);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-container {
  display: flex;
  align-items: center;
  gap: 10rpx;
  color: #fff;
  .game-tabs-scroll {
    flex: 1;
    height: 100%;
    // 隐藏滚动条
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    .game-tabs {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      gap: 40rpx;
      padding: 0 40rpx;
      box-sizing: border-box;
      height: 100%;
      .game-tab {
        border-radius: $uni-border-radius-base;
        font-size: $uni-font-size-lg;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        transform: scale(1); // 默认缩放比例
        transform-origin: center;
        &.active {
          font-weight: 600;
          transform: scale(1.15); // 激活时放大
        }
      }
    }
  }
  .game-icon {
    min-width: 32rpx;
    height: 32rpx;
  }
}
</style>
