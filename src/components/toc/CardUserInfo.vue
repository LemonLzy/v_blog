<template>
  <el-card class="user-card">
    <el-image
      class="userAvatar"
      :src="userInfo.avatar"
      :fit="'contain'"
      :preview-src-list="userInfo.avatar"
      :hide-on-click-modal="true"
      lazy
    />
    <div class="nickname">{{ userInfo.nickname }}</div>
    <div class="signature">{{ userInfo.signature }}</div>
    <div class="articleTotal">{{ userInfo.articleTotal }}</div>
    <div class="tags">{{ userInfo.tags }}</div>
    <div class="category">{{ userInfo.category }}</div>
    <div>Follow Me</div>
    <div class="link">{{ userInfo.link }}</div>
  </el-card>
</template>

<script lang="ts" setup>
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
  .userAvatar {
    height: 150px;
    @apply flex items-center justify-between;
  }

  .el-card {
    @apply rounded-xl;
  }
</style>
