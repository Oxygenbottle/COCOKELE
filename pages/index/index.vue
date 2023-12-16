<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <addList></addList>
    <lottieCanvas></lottieCanvas>
  </view>
</template>
<script>
import lottieCanvas from "../../components/lottieCanvas/lottieCanvas.vue";
import addList from "../../components/addList/addList.vue";
export default {
  components: { lottieCanvas, addList },
  data() {
    return {
      title: "Hello",
      inited: false,
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
