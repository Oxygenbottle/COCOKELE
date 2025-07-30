<template>
  <view class="content">
    消息

    <tabbar></tabbar>
  </view>
</template>
<script>
import tabbar from "@/components/tabbar/index.vue";
export default {
  components: { tabbar },
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

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
