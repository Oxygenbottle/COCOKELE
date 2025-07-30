<template>
  <div class="main">
    <!-- 顶部导航栏 -->
    <view class="top-nav">
      <view class="game-tabs">
        <view class="game-tab active">绝区零</view>
        <view class="game-tab">崩坏：星穹铁道</view>
        <view class="game-tab">原神</view>
        <view class="game-tab">大别野</view>
        <view class="search-icon">🔍</view>
      </view>
      <view class="function-icons">
        <view class="icon-item">
          <!-- <image src="/static/icons/sign.png" mode="aspectFit"></image> -->
          <text>签到福利</text>
        </view>
        <view class="icon-item">
          <!-- <image src="/static/icons/strategy.png" mode="aspectFit"></image> -->
          <text>攻略合集</text>
        </view>
        <view class="icon-item">
          <!-- <image src="/static/icons/guide.png" mode="aspectFit"></image> -->
          <text>市民指南</text>
        </view>
        <view class="icon-item">
          <!-- <image src="/static/icons/achievement.png" mode="aspectFit"></image> -->
          <text>战绩</text>
        </view>
        <view class="icon-item">
          <!-- <image src="/static/icons/cultivate.png" mode="aspectFit"></image> -->
          <text>养成指南</text>
        </view>
        <view class="icon-item">
          <!-- <image src="/static/icons/story.png" mode="aspectFit"></image> -->
          <text>情报</text>
        </view>
      </view>
    </view>

    <!-- 资讯横幅 -->
    <view class="news-banner">
      <text class="news-tag">资讯</text>
      <text class="news-title">《绝区零》浮波柚叶角色展示 | 鬼使狸差</text>
      <text class="news-more">全部 ></text>
    </view>

    <!-- 内容选项卡 -->
    <view class="content-tabs">
      <view class="tab-item">攻略</view>
      <view class="tab-item active">发现</view>
      <view class="tab-item">官方</view>
      <view class="tab-item">咖啡馆</view>
      <view class="tab-item">同人图</view>
      <view class="tab-item">COS</view>
    </view>

    <!-- 内容列表 -->
    <scroll-view class="content-list" scroll-y>
      <!-- 官方消息 -->
      <view class="post-item">
        <view class="user-info">
          <!-- <image src="/static/avatars/official.png" mode="aspectFit"></image> -->
          <view class="user-details">
            <view class="user-name">绝区零 <text class="official-tag">官方</text></view>
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

    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/index.vue";
export default {
  components: {
    tabbar,
  },
  data() {
    return {
      title: "首页",
      inited: false,
      // 可以在这里添加模拟数据
      posts: [
        // 帖子数据
      ],
      currentIndex: 0,
    };
  },
  onLoad() {},
  methods: {
    changeTab(index) {
      console.log("index", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
  background-color: $uni-bg-color;
}

/* 顶部导航 */
.top-nav {
  background-color: #000;
  color: $uni-text-color-inverse;
  padding: $uni-spacing-row-base;
}

.game-tabs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: $uni-spacing-col-base;
}

.game-tab {
  padding: 5px 10px;
  border-radius: $uni-border-radius-base;
  font-size: $uni-font-size-sm;
  &.active {
    background-color: $uni-color-primary;
  }
}

.function-icons {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  font-size: $uni-font-size-sm;
  image {
    width: $uni-img-size-base;
    height: $uni-img-size-base;
    margin-bottom: $uni-spacing-col-sm;
  }
}

/* 资讯横幅 */
.news-banner {
  background-color: $uni-color-primary;
  color: white;
  padding: $uni-spacing-row-base;
  border-radius: $uni-border-radius-base;
  margin: $uni-spacing-row-base;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.news-tag {
  background-color: #fff;
  color: $uni-color-primary;
  padding: 2px 5px;
  border-radius: $uni-border-radius-sm;
  margin-right: $uni-spacing-row-sm;
}

/* 内容选项卡 */
.content-tabs {
  display: flex;
  padding: $uni-spacing-row-base;
  border-bottom: 1px solid $uni-border-color;
}

.tab-item {
  flex: 1;
  text-align: center;
  padding: $uni-spacing-col-sm 0;
  &.active {
    color: $uni-color-primary;
    border-bottom: 2px solid $uni-color-primary;
  }
}

/* 内容列表 */
.content-list {
  height: calc(100vh - 400px);
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
