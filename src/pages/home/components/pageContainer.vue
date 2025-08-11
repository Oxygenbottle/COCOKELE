<template>
  <div>
    <Menu></Menu>
    <!-- 资讯横幅 -->
    <Notice></Notice>
    <!-- 内容 -->
    <Content :outerSwiperIndex="outerSwiperIndex"></Content>
  </div>
</template>
<script>
import Menu from './menu.vue';
import Notice from './noticeBoard.vue';
import Content from "./content.vue"
export default {
  components: { Menu, Notice, Content },
  props: {
    outerSwiperIndex: {
      type: Number,
      default: 0
    }
  }
};
</script>
<style scoped lang="scss"></style>
