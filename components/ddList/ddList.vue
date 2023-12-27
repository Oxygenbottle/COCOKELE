<template>
  <div class="dd_list" v-if="pop_show">
    <div class="list_item" :class="[animationShow ? 'upIn' : 'downOut']">
      京东数科龙卷风克里斯丁
    </div>
    <div class="shadow_box" :class="[animationShow ? 'fadeIn' : 'fadeOut', shadowShow ? 'shadow_box_on' : '']"
      @click="close">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pop_show: false,
      shadowShow: false,
      animationShow: false,
    };
  },
  onLoad() { },
  methods: {
    open() {
      this.pop_show = true;
      this.animationShow = true;
      setTimeout(() => {
        this.shadowShow = true;
      }, 300);
    },
    close() {
      this.shadowShow = false;
      this.animationShow = false;
      setTimeout(() => {
        this.pop_show = false;
      }, 290);
    },
  },
};
</script>

<style lang="scss" scoped>
.dd_list {
  position: fixed;
  background-color: #e6e5ea;

  .list_item {
    width: 100%;
  }
}

.shadow_box {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  /* background-color: #0000002b */
}

.shadow_box_on {
  background-color: #0000002b
}

.fadeIn {
  animation: fadeIn 0.3s;
}

.fadeOut {
  animation: fadeOut 0.3s;
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


@keyframes fadeIn {
  from {
    background-color: #00000000
  }

  to {
    background-color: #0000002b
  }
}

@keyframes fadeOut {
  from {
    background-color: #0000002b
  }

  to {
    background-color: #00000000
  }
}
</style>
