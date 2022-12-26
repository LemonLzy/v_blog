<template>
  <el-card class="web-info-card">
    <div class="item-headline">
      <div class="text-black flex items-center">
        <el-icon class="item-headline-icon" color="black" :size="20">
          <Histogram />
        </el-icon>
      </div>
      <div class="item-headline-title">网站资讯</div>
    </div>
    <div class="web-info">
      <el-row class="web-info-item">文章数目：33</el-row>
      <el-row class="web-info-item">已运行时间：1118天</el-row>
      <el-row class="web-info-item">本站访客数：8182</el-row>
      <el-row class="web-info-item">本站总访问量：11856</el-row>
      <el-row class="web-info-item">最后更新时间：10个月前</el-row>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
  import { Histogram } from '@element-plus/icons';
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
    margin-bottom: 20px;
  }

  .web-info {
    margin-top: 10px;
    animation: announ_animation 0.8s linear infinite;
    font-size: 14px;
    color: #4c4948;

    .web-info-item {
      margin-top: 4px;
      line-height: 2;
    }
  }
</style>
