<script>
import { getNavBarInfo } from "@/utils/getSystemInfo.js";
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: async function () {
    console.log("App Show");
    const {
      statusBarHeight,
      navBarHeight,
      navBarIconDistance,
    } = await getNavBarInfo();
    console.log("statusBarHeight", statusBarHeight);
    console.log("navBarHeight", navBarHeight);
    console.log("返回按钮等距离和胶囊齐平的高度", navBarIconDistance);
  },
  methods: {},

  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
/*每个页面公共css */
</style>
