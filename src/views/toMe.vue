<template>
  <el-container>
    <el-header>
      <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
        <el-menu-item index="0">V-Blog</el-menu-item>
        <div class="flex-grow" />
        <el-dropdown trigger="click" @command="handleSelect">
          <el-avatar
            alt="Avatar"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            class="avatar"
          />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="modify_pw">修改密码</el-dropdown-item>
              <el-dropdown-item command="sign_out">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
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
  import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue';
  import { ElMessage } from 'element-plus/es';
  import { useCookies } from 'vue3-cookies';
  import { useRouter } from 'vue-router';

  const { cookies } = useCookies();
  const router = useRouter();

  const handleSelect = (c: string) => {
    switch (c) {
      case 'sign_out':
        router.push({ name: 'login' });
        window.localStorage.clear();
        cookies.remove('user_id');
        cookies.remove('is_admin');
        cookies.remove('nickname');
        cookies.remove('a_token');
        cookies.remove('r_token');
        ElMessage.info('退出成功');
        break;
      case 'modify_pw':
        break;
    }
  };
</script>

<style scoped>
  .flex-grow {
    flex-grow: 1;
  }

  .el-dropdown {
    @apply flex items-center justify-between;
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
    border-radius: 20px;
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
