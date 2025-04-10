export async function getNavBarInfo() {
  let navBarInfo = null;

  if (navBarInfo) return navBarInfo;

  const res = await uni.getSystemInfo();
  const statusBarHeight = res.statusBarHeight;

  const menuBarInfo = uni.getMenuButtonBoundingClientRect();
  const navBarHeight = menuBarInfo.height + (menuBarInfo.top - statusBarHeight) * 2;

  navBarInfo = {
    statusBarHeight,
    navBarHeight,
    navBarIconDistance: statusBarHeight + navBarHeight,
  };

  return navBarInfo;
}