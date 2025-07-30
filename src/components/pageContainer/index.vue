<template>
  <view class="page-container" :style="containerStyle">
    <slot></slot>
  </view>
</template>

<script>
import { getNavBarInfo } from '@/utils/getSystemInfo';

export default {
  name: "PageContainer",
  data() {
    return {
      navBarInfo: null,
      containerStyle: ''
    };
  },
  async created() {
    this.navBarInfo = await getNavBarInfo();

    this.containerStyle = `padding-top: ${this.navBarInfo.statusBarHeight + this.navBarInfo.navBarHeight}rpx; padding-bottom: calc(${this.navBarInfo.safeAreaInsets.bottom}rpx + 20vw);`
    console.log('页面容器获取到的系统信息:', this.navBarInfo);
  }
};
</script>

<style lang="scss" scoped>
.page-container {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: #f5f5f5;
}
</style>
