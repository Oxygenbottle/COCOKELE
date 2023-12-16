<template>
  <div class="dd-list" v-if="pop_show">
    <div class="listItem" :class="[animation_show ? 'upIn' : 'downOut']">
      京东数科龙卷风克里斯丁
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pop_show: false,
      animation_show: false,
    };
  },
  onLoad() {},
  methods: {
    open() {
      this.pop_show = true;
      this.animation_show = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.dd-list {
  position: fixed;
  background-color: #e6e5ea;
  .listItem {
    width: 100%;
  }
}
.upIn {
  animation: upIn 0.3s;
}
.downOut {
  animation: downOut 0.3s;
}
@keyframes upIn {
  from {
    width: 50rpx;
    height: 50rpx;
  }
  to {
    width: 100vw;
    height: 100vh;
  }
}
@keyframes downOut {
  from {
    width: 100vw;
    height: 100vh;
  }
  to {
    width: 50rpx;
    height: 50rpx;
  }
}
</style>
