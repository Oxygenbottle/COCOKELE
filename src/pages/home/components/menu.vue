<template>
  <view class="top-nav">
    <view class="function-icons">
      <view class="icon-item">
        <img src="../../../assets/icons/menus/yinxing.png" />
        <text>棚费咨询</text>
      </view>
      <view class="icon-item">
        <img src="../../../assets/icons/menus/siyecao.png" />
        <text>预约列表</text>
      </view>
      <view class="icon-item">
        <img src="../../../assets/icons/menus/mogu.png" />
        <text>注意事项</text>
      </view>
      <view class="icon-item">
        <img src="../../../assets/icons/menus/sakula.png" />
        <text>活动情报</text>
      </view>
      <view class="icon-item">
        <img src="../../../assets/icons/menus/juhua.png" />
        <text>会员中心</text>
      </view>
      <view class="icon-item">
        <img src="../../../assets/icons/menus/muzhuang.png" />
        <text>其他情报</text>
      </view>
    </view>
  </view>
</template>

<script setup></script>

<style scoped lang="scss">
/* 顶部导航 */
.top-nav {
  color: $uni-text-color-inverse;
  margin-top: 20rpx;
  .function-icons {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    overflow-x: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    .icon-item {
      height: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 20%;
      font-size: $uni-font-size-sm;
      img {
        width: 64rpx;
        height: 64rpx;
        margin-bottom: $uni-spacing-col-sm;
      }
    }
  }
}
</style>
