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
    <el-menu-item index="0">Lemon</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">时间轴</el-menu-item>
    <el-menu-item index="3">标签</el-menu-item>
    <el-menu-item index="4">关于</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  // 设置el-menu悬浮于背景图之上
  .menu-header {
    @apply w-full;
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    border: transparent;
    z-index: 9999;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 15%);
    font-weight: bold;
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
