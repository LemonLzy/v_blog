<template>
  <el-container class="wrapper">
    <el-header class="top-header">
      <div class="left-header">
        <div class="text-black flex items-center" @click="handleAsideChange">
          <app-icon icon="ant-design:menu-fold-outlined" class="text-2xl cursor-pointer"></app-icon>
        </div>
        <div class="site-title">lemonlzy</div>
      </div>
      <div class="right-header">
        <el-header class="right-header">
          <el-dropdown trigger="click" @command="handleSelect">
            <el-avatar
              alt="Avatar"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="modify_pw">修改密码</el-dropdown-item>
                <el-dropdown-item command="sign_out">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-header>
      </div>
    </el-header>
    <el-container class="main">
      <el-aside :width="asideWidth" class="left-aside">
        <el-menu
          default-active="2"
          class="left-menu"
          :collapse="collapse"
          :collapse-transition="false"
          @select="handlerMenuChange"
        >
          <el-menu-item index="1">
            <el-icon>
              <setting />
            </el-icon>
            <span>控制面板</span>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <UserFilled />
              </el-icon>
              <span>用户列表</span>
            </template>
            <el-menu-item index="2-1">
              <span>用户管理</span>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
  import AppIcon from '@/components/common/AppIcon.vue';
  import { computed, ref } from 'vue';
  import { Setting, UserFilled } from '@element-plus/icons';
  import { useRouter } from 'vue-router';
  import { ElMessage } from 'element-plus';
  import { useCookies } from 'vue3-cookies';

  const asideWidth = ref('200px');

  const handleAsideChange = () => {
    asideWidth.value = asideWidth.value === '200px' ? '60px' : '200px';
  };

  // hooks函数：解耦，相当于vue2里面的 this.$router
  const router = useRouter();

  const handlerMenuChange = (index: string) => {
    switch (index) {
      case '1':
        router.push({ name: 'Dashboard' });
        break;
      case '2-1':
        router.push({ name: 'UserList' });
        break;
    }
  };
  const { cookies } = useCookies();

  const collapse = computed(() => {
    return asideWidth.value !== '200px';
  });
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
  //axios
</script>

<style scoped>
  .wrapper {
    @apply h-full w-full;
  }

  .top-header {
    @apply bg-gray-100 flex items-center justify-between;
  }

  .left-aside {
    @apply bg-gray-100 transition-all;
  }

  .left-menu {
    @apply h-full;
    @apply overflow-x-hidden;
  }

  .main {
    height: calc(100% - 60px);
    @apply overflow-y-auto bg-gray-200;
  }

  .right-header {
    @apply flex items-center justify-between;
  }

  .left-header {
    @apply flex;
  }

  .site-title {
    @apply font-bold ml-3 text-lg;
  }
</style>
