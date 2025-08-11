<template>
  <div class="page-container" :style="containerStyle + style">
    <slot></slot>
  </div>
</template>

<script>
import { getNavBarInfo } from '@/utils/getSystemInfo';

export default {
  name: 'PageContainer',
  props: {
    style: {
      type: String,
      default: ''
    },
    router: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      navBarInfo: null,
      containerStyle: ''
    };
  },
  async created() {
    this.navBarInfo = await getNavBarInfo();
    // this.containerStyle = `padding-top: ${
    //   this.navBarInfo.statusBarHeight + this.navBarInfo.navBarHeight
    // }rpx; `;
    this.containerStyle += `padding-bottom: calc(${this.navBarInfo.safeAreaInsets.bottom}rpx + 20vw);`;

    console.log('页面容器获取到的系统信息:', this.navBarInfo);
  }
};
</script>

<style lang="scss" scoped>
.page-container {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  // background-color: #fff;
}
</style>
