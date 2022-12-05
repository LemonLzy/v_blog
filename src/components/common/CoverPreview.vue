<template>
  <el-image class="img_main_cover" :src="cover" :fit="'cover'" />
  <div class="sub_title">
    <span class="span_title">{{ title }}</span>
    <el-row v-show="showDate" class="created">
      <el-space>
        <el-icon class="createdIcon" color="#eeeeee" :size="13">
          <Calendar />
        </el-icon>
        <div class="dateText">发表于 {{ conversionTimestamp(created) }}</div>
        <el-icon>
          <Refresh />
        </el-icon>
        <div class="dateText">更新于 {{ conversionTimestamp(updated) }}</div>
      </el-space>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
  import { Calendar, Refresh } from '@element-plus/icons';
  import { conversionTimestamp } from '@/app/utils';

  defineProps<{
    cover: string;
    title: string;
    showDate: boolean;
    created?: string;
    updated?: string;
  }>();
</script>

<style lang="scss" scoped>
  .img_main_cover {
    @apply w-full;
    height: 400px;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }

  .img_main_cover:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    backdrop-filter: blur(1px);
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
  }

  .sub_title {
    width: 100%;
    height: 100px;
    position: absolute;
    top: 150px;
  }

  .span_title {
    color: white;
    font-size: 40px;
    line-height: 100px;
    @apply flex items-center justify-center;
  }

  .created {
    color: #eeeeee;
    @apply flex items-center justify-center;
  }

  .dateText {
    font-size: 13.3px;
  }
</style>
