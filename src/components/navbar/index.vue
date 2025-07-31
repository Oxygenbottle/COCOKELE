<template>
  <div class="navbar" :style="navBarHeight">
    <slot></slot>
  </div>
</template>

<script>
import { getNavBarInfo } from '@/utils/getSystemInfo.js';
export default {
  name: 'Navbar',
  data() {
    return {
      navBarHeight: '',
      title: '首页'
    };
  },
  async created() {
    this.navBarInfo = await getNavBarInfo();
    this.navBarHeight = `height: ${this.navBarInfo.navBarHeight * 2}rpx`;
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #ff8d8d;
  display: flex;
  align-items: center;
  justify-content: center;
  // position: sticky;
}
</style>
