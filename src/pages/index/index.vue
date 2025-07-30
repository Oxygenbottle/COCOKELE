<template>
  <pageContainer>
    <div class="navbar" :style="navBarHeight">{{ title }}</div>
    <addList></addList>
    <tabbar></tabbar>
  </pageContainer>
</template>
<script>
import tabbar from "@/components/tabbar/index.vue";
import addList from "../../components/addList/addList.vue";
import pageContainer from "../../components/pageContainer/index.vue";
import {getNavBarInfo} from '@/utils/getSystemInfo.js'

export default {
  components: { addList, tabbar, pageContainer },
  data() {
    return {
      navBarInfo: '',
      navBarHeight: 0,
      title: "首页",
    };
  },
  async created() {
    this.navBarInfo = await getNavBarInfo();
    console.log('this.navBarInfo.navBarHeight', this.navBarInfo.navBarHeight)
    this.navBarHeight = `height: ${this.navBarInfo.navBarHeight * 2}rpx`;
  },
  onLoad() {},
  methods: {},
};
</script>

<style>
.navbar {
  background-color: #ff8d8d;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
