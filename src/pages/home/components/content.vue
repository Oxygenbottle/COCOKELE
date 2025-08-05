<template>
  <div>
    <!-- 内容选项卡 -->
    <div class="content-tabs">
      <scroll-view class="scroll-view" scroll-x="true">
        <view
          v-for="(tab, index) in tabs"
          :key="index"
          class="scroll-view-item uni-bg-red"
          :class="{'active': activeIndex === index}"
          @click="handleClickScroll(index)"
          >{{ tab.name }}</view
        >
        <!-- 移动的小蓝条 -->
        <view class="tab-indicator" :style="indicatorStyle"></view>
      </scroll-view>
    </div>

    <!-- 内容列表 -->
    <scroll-view class="content-list" scroll-y>
      <!-- 官方消息 -->
      <view class="post-item">
        <view class="user-info">
          <!-- <image src="/static/avatars/official.png" mode="aspectFit"></image> -->
          <view class="user-details">
            <view class="user-name"
              >绝区零 <text class="official-tag">官方</text></view
            >
            <view class="post-time">官方消息 07-15</view>
          </view>
        </view>
        <view class="post-content">
          <text class="post-title">《绝区零》浮波柚叶 EP | 乐园梦游计</text>
          <text class="post-text"
            >「细心编写游历....(●´∀｀●) 不对 是我哟」「上当了吧!」...</text
          >
          <view class="post-media">
            <!-- <video
              src="https://example.com/video.mp4"
              poster="/static/images/video-cover.jpg"
              controls
            ></video> -->
            <view class="video-duration">03:20</view>
          </view>
          <view class="post-stats">
            <text class="play-count">播放十万</text>
            <text class="comment-count">评论过千</text>
          </view>
        </view>
      </view>

      <!-- 用户帖子 -->
      <view class="post-item">
        <view class="user-info">
          <!-- <image src="/static/avatars/user1.png" mode="aspectFit"></image> -->
          <view class="user-details">
            <view class="user-name"
              >可莉的嘟嘟可1号 <text class="verified-tag">✓</text></view
            >
            <view class="post-time">07-18</view>
          </view>
        </view>
        <view class="post-content">
          <text class="post-text"
            >枣~尚~蚝~
            起的这么早，大家就交换UID来加个好友吧，欢迎发到评论区哦~小萌新有问题也可以提问~大家不要光点赞啊，评论评论吧~怎么突然</text
          >
        </view>
        <view class="post-actions">
          <view class="action-item">
            <text>💬</text>
            <text>451</text>
          </view>
          <view class="action-item">
            <text>👍</text>
            <text>3928</text>
          </view>
        </view>
      </view>
    </scroll-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { name: 'COS' },
        { name: '古风' },
        { name: '谷子' },
        { name: '棚子' },
        { name: '出图' },
        { name: '咖啡馆' },
        { name: '咖啡馆' },
        { name: '咖啡馆' }
      ],
      activeIndex: 0,
      currentTabWidth: 0,
      currentTabLeft: 0
    };
  },
  mounted() {
    this.handleClickScroll(0);
  },
  computed: {
    indicatorStyle() {
      // 计算小蓝条的位置和宽度
      const left = this.currentTabLeft + this.currentTabWidth / 2 - 18; // 左边距
      return `width:32rpx;left: ${left}px`;
    }
  },
  methods: {
    handleClickScroll(index) {
      const queryItem = uni.createSelectorQuery().in(this);
      queryItem.selectAll('.scroll-view-item').boundingClientRect();
      let itemLeft = 0;
      queryItem.exec((res) => {
        console.log('queryItem res', res);
        const rect = res[0][index];
        console.log('query rect', rect);
        this.currentTabWidth = rect.width;
        itemLeft = rect.left;
      });
      const query = uni.createSelectorQuery().in(this);
      query.selectAll('.scroll-view').scrollOffset();
      query.exec((res) => {
        console.log('scroll left ==>', res[0][0].scrollLeft);
        let scrollLeft = res[0][0].scrollLeft;
        this.currentTabLeft = itemLeft + scrollLeft;
      });
      this.activeIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
/* 内容选项卡 */
.content-tabs {
  display: flex;
  padding: 0 $uni-spacing-row-base;
  background: #fff;
  border-radius: 30rpx 30rpx 0 0;
  position: relative;
  overflow-x: scroll;

  .scroll-view {
    border-radius: 30rpx 30rpx 0 0;
    white-space: nowrap;
    width: 100%;
    position: relative;
    .scroll-view-item {
      width: auto;
      padding: 0 30rpx;
      height: 88rpx;
      line-height: 88rpx;
      display: inline-block;
      text-align: center;
      font-size: 28rpx;
      font-weight: 500;
      background: #fff;
      color: #d4d4d4;
      z-index: 1;
      &.active {
        color: #000;
      }
    }
    .tab-indicator {
      position: absolute;
      bottom: 40rpx;
      height: 4px;
      border-radius: 15rpx;
      background-color: #71aff7;
      transition: all 0.3s ease;
      z-index: 0;
    }
  }
}

/* 内容列表 */
.content-list {
  height: calc(100vh - 400px);
  background-color: $uni-bg-color;
}

.post-item {
  padding: $uni-spacing-row-base;
  border-bottom: 1px solid $uni-border-color;
}

.user-info {
  display: flex;
  align-items: center;
  margin-bottom: $uni-spacing-col-base;
  image {
    width: $uni-img-size-lg;
    height: $uni-img-size-lg;
    border-radius: $uni-border-radius-circle;
    margin-right: $uni-spacing-row-sm;
  }
}

.official-tag {
  background-color: $uni-color-primary;
  color: white;
  font-size: 10px;
  padding: 0 3px;
  border-radius: 2px;
  margin-left: 5px;
}

.post-title {
  font-weight: bold;
  font-size: $uni-font-size-base;
  margin-bottom: $uni-spacing-col-sm;
}

.post-media {
  position: relative;
  margin: $uni-spacing-col-base 0;
  video {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: $uni-border-radius-base;
  }
  .video-duration {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 2px 5px;
    border-radius: $uni-border-radius-sm;
    font-size: $uni-font-size-sm;
  }
}

.post-stats {
  display: flex;
  color: $uni-text-color-grey;
  font-size: $uni-font-size-sm;
}

.post-actions {
  display: flex;
  justify-content: space-around;
  margin-top: $uni-spacing-col-base;
  .action-item {
    display: flex;
    align-items: center;
    color: $uni-text-color-grey;
    text {
      margin-left: 5px;
    }
  }
}

/* 底部导航 */
.bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: white;
  border-top: 1px solid $uni-border-color;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  &.active {
    color: $uni-color-primary;
  }
}

.add-btn {
  width: $uni-img-size-lg;
  height: $uni-img-size-lg;
  border-radius: $uni-border-radius-circle;
  background-color: $uni-color-primary;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -20px;
  font-size: $uni-font-size-lg;
}

.msg-badge {
  position: absolute;
  top: 0;
  right: 30%;
  background-color: $uni-color-error;
  color: white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
