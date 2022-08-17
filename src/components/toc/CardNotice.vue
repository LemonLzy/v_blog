<template>
  <el-card class="user-card">
    <div class="item-headline">
      <div class="text-black flex items-center">
        <el-icon class="item-headline-icon" color="#ff0000" :size="20">
          <Lightning />
        </el-icon>
      </div>
      <div class="item-headline-title">公告</div>
    </div>
    <div class="item-notice">{{ extraInfo.notice }}</div>
  </el-card>
</template>

<script lang="ts" setup>
  import { Lightning } from '@element-plus/icons';

  const extraInfo = defineProps<{
    notice: string;
  }>();
</script>

<style lang="scss" scoped>
  .item-headline {
    @apply flex;

    .item-headline-title {
      @apply ml-2 text-base;
    }

    .item-headline-icon {
      @apply flex items-center;
    }
  }

  .el-card {
    @apply rounded-xl;
  }

  .item-notice {
    margin-top: 10px;
    animation: announ_animation 0.8s linear infinite;
  }
</style>
