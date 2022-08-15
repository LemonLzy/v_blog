<template>
  <el-card class="user-card">
    <app-icon icon="fe:notice-push" class="notice text-xl cursor-pointer">公告</app-icon>
    <div class="nickname">{{ extraInfo.notice }}</div>
  </el-card>
</template>

<script lang="ts" setup>
  import AppIcon from '@/components/common/AppIcon.vue';

  const extraInfo = defineProps<{
    notice: string;
  }>();
</script>

<style lang="scss" scoped>
  .notice {
    color: #ff0000;
    margin: 5px;
  }

  .el-card {
    @apply rounded-xl;
  }
</style>
