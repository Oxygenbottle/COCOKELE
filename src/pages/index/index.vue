<template>
  <view class="content">
    <div class="topBox">
      <img class="adv_slide" src="../../assets/imgs/topImg.jpg" alt="">
    </div>
    <div>大别墅</div>
    <addList></addList>
  </view>
</template>
<script>
import addList from "../../components/addList/addList.vue";
export default {
  components: { addList },
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() { },
  methods: {},
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  /* .topBox {
    position: absolute;
    top: 0;
    left: 0;
  } */
}

.adv_slide {
  width: 100vw;
  height: 56.25vw;
}

.top-adv {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
