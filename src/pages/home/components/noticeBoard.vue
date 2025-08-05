<template>
  <div class="news-banner">
    <text class="news-tag">资讯</text>
    <text class="news-title">桃乐丝 - 开业大酬宾，欢迎您的到来，来就送甲醛空气一份，附加一份</text>
    <text class="news-more">全部></text>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
/* 资讯横幅 */
.news-banner {
  background-color: #ffffff4e;
  color: white;
  padding: 8rpx 20rpx;
  border-radius: $uni-border-radius-base;
  margin: $uni-spacing-row-base;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15rpx;
  .news-tag {
    background-color: #1ec3ff;
    color: #fff;
    font-size: $uni-font-size-sm;
    padding: 2px 5px;
    border-radius: $uni-border-radius-sm;
    margin-right: $uni-spacing-row-sm;
    border-radius: 15rpx;
  }
  .news-title {
    color: #fff;
    font-size: $uni-font-size-sm;
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .news-more {
    color: #fff;
    font-size: $uni-font-size-sm;
  }
}
</style>
