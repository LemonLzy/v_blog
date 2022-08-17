<template>
  <el-card class="user-card">
    <el-image
      class="avatar-img"
      :src="userInfo.avatar"
      :fit="'scale-down'"
      :preview-src-list="userInfo.avatar"
      :hide-on-click-modal="true"
      lazy
    />
    <div class="nickname">{{ userInfo.nickname }}</div>
    <div class="signature">{{ userInfo.signature }}</div>
    <div class="articleTotal">{{ userInfo.articleTotal }}</div>
    <div class="tags">{{ userInfo.tags }}</div>
    <div class="category">{{ userInfo.category }}</div>
    <el-link class="follow" :icon="Edit" :underline="false">Follow Me</el-link>
    <div class="link">{{ userInfo.link }}</div>
  </el-card>
</template>

<script lang="ts" setup>
  import { Edit } from '@element-plus/icons-vue';

  const userInfo = defineProps<{
    avatar: string;
    nickname: string;
    signature: string;
    articleTotal: string;
    tags: string;
    category: string;
    link: string;
  }>();
</script>

<style lang="scss" scoped>
  .el-card {
    @apply rounded-xl;

    .avatar-img {
      height: 110px;
      @apply flex items-center justify-between;
    }

    .avatar-img:hover {
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
      transition: all 0.375s;
    }

    .nickname {
      @apply flex text-lg justify-center items-center;
    }

    .signature {
      @apply flex text-xs justify-center items-center;
    }

    .follow {
      @apply w-full;
      background-color: #49b1f5;
      height: 34px;
      margin: 5px;
      color: #ffffff;
    }

    .follow:hover {
      background-color: #ff7242;
    }
  }
</style>
