<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
    uni.getSystemInfo({
      success: function (res) {
        // 获取手机状态栏高度
        const statusBarHeight = res.statusBarHeight;
        console.log("statusBarHeight", statusBarHeight);

        // 获取导航栏高度  （状态栏高度 + 胶囊高度 + 胶囊的上下间距）
        const menuBarInfo = uni.getMenuButtonBoundingClientRect();
        console.log("menuBarInfo", menuBarInfo);
        const navBarHeight = menuBarInfo.height + (menuBarInfo.top - statusBarHeight) * 2;

        const navBarIconDistance = statusBarHeight + navBarHeight;
        console.log("返回按钮等距离和胶囊齐平的高度", navBarIconDistance);
      },
      fail: function (err) {
        console.err("获取系统信息失败", err);
      },
    });
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
/*每个页面公共css */
</style>
