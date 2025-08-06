<template>
  <div class="router-view" :style="routerViewStyle">
    <Navbar v-if="router.type === 'page'">{{ router.name }}</Navbar>
    <Home v-if="router.path === '/pages/profile/index'"></Home>
    <Message v-else-if="router.path === '/pages/message/index'"></Message>
    <My v-else-if="router.path === '/pages/home/index'"></My>
    <Dynamic v-else></Dynamic>
  </div>
</template>

<script>
import { getNavBarInfo } from '@/utils/getSystemInfo.js';
import Navbar from '@/components/navbar/index.vue';
import Home from '@/pages/home/index.vue';
import Message from '@/pages/message/index.vue';
import My from '@/pages/my/index.vue';
import Dynamic from '@/pages/dynamic/index.vue';

export default {
  name: 'RouterView',
  components: { Navbar, Home, Message, My, Dynamic },
  props: {
    router: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      tabbarList: [],
      title: '首页',
      routerViewStyle: {}
    };
  },
  async created() {
    let navBarInfo = await getNavBarInfo();
    this.routerViewStyle = `height: calc(100vh - ${navBarInfo.statusBarHeight}rpx - ${navBarInfo.navBarHeight}rpx - ${navBarInfo.safeAreaInsets.bottom}rpx - 20vw)`;
  },
  computed: {
    // 计算实际安全距离高度
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.router-view {
  background-color: #27705732;
  overflow-y: scroll;
  // 隐藏滚动条
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
