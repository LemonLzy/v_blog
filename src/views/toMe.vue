<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-menu-item index="0">V-Blog</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-sub-menu index="2">
          <template #title>Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </el-header>
  </el-container>
  <el-container class="layout-container-demo" style="height: 500px">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu :default-openeds="['1', '3']" :default-active="$route.path" router>
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <message />
              </el-icon>
              Article
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="/article/new">写文章</el-menu-item>
              <el-menu-item index="/article/draft">草稿箱</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="1-3">所有文章</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>Option4</template>
              <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <icon-menu />
              </el-icon>
              Navigator Two
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="2-1">Option 1</el-menu-item>
              <el-menu-item index="2-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="2-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="2-4">
              <template #title>Option 4</template>
              <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon>
                <setting />
              </el-icon>
              Navigator Three
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="3-1">Option 1</el-menu-item>
              <el-menu-item index="3-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="3-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="3-4">
              <template #title>Option 4</template>
              <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
  <el-footer>Footer</el-footer>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue';

  const activeIndex = ref('2');
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
  };
</script>

<style scoped>
  .flex-grow {
    flex-grow: 1;
  }

  .layout-container-demo .el-header {
    height: 60px;
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
  }

  .layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    height: calc(100vh - 60px);
  }

  .layout-container-demo .el-menu {
    border-right: none;
  }

  .layout-container-demo .el-main {
    padding: 0;
    height: calc(95vh - 60px);
    overflow: scroll;
  }

  .layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
  }
</style>
