<template>
  <div class="add-content">
    <div class="text-area" @click="openDialog">
      <span class="title">{{ title }}</span>
    </div>
    <ddList ref="ddList"></ddList>
  </div>
</template>
<script>
import ddList from "../ddList/ddList.vue";
export default {
  components: { ddList },
  data() {
    return {
      title: "+",

    };
  },
  onLoad() { },
  methods: {
    openDialog() {
      console.log("this.$refs.ddList", this.$refs);
      this.$refs.ddList.open();
    },
  },
};
</script>

<style>
.add-content {
  width: 50rpx;
  height: 50rpx;
  border-radius: 50%;
  background-color: #e6e5ea;
  color: #6d6c70;
  line-height: 50rpx;
  text-align: center;
  padding-bottom: 4rpx;
  position: fixed;
  bottom: 10vh;
  left: 10vw;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
</style>
