<template>
  <el-menu
    :default-active="'0'"
    class="menu-header"
    mode="horizontal"
    :ellipsis="false"
    text-color="#eeeeee"
    background-color="transparent"
    active-text-color="#fff"
  >
    <!--    <el-menu-item index="0">-->
    <!--      <router-link :to="{ path: '/toc' }">Lemon</router-link>-->
    <!--    </el-menu-item>-->
    <div class="flex-grow" />
    <el-menu-item index="1" route="/toc">
      <app-icon class="menu-icon text-l" icon="fa6-solid:house" />
      <router-link :to="{ path: '/toc' }">首页</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <app-icon class="menu-icon text-xl" icon="ic:round-archive" />
      <router-link :to="{ path: '/archives' }">归档</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <app-icon class="menu-icon text-xl" icon="mdi:tag-multiple" />
      <router-link :to="{ path: '/tags' }">标签</router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <app-icon class="menu-icon text-xl" icon="ph:heart-fill" />
      <router-link :to="{ path: '/about' }">关于</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
  import { defineComponent } from 'vue';
  import AppIcon from '@/components/common/AppIcon.vue';

  export default defineComponent({
    components: { AppIcon },
  });
</script>

<style lang="scss" scoped>
  // 设置el-menu悬浮于背景图之上
  .menu-header {
    @apply w-full flex justify-center;
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    border: transparent;
    z-index: 9999;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 15%);
    font-weight: bold;
  }

  .el-menu-item {
    padding: 8px;
  }

  .menu-icon {
    margin-right: 5px;
  }

  // 设置el-menu的选中背景为透明背景
  .el-menu--horizontal > .el-menu-item.is-active {
    background: transparent;
  }

  // 设置el-menu的下边框为空
  .el-menu--horizontal > .el-menu-item {
    border-bottom: none;
    text-decoration: none;
  }
</style>
