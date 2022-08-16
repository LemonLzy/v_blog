<template>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="pagination.total"
    :page-size="pagination.size"
    :current-page="pagination.page"
  />
</template>

<script lang="ts" setup>
  const pagination = defineProps<{
    total: number;
    size: number;
    page: number;
  }>();
</script>

<style lang="scss">
  // 设置pager的圆角和hover效果
  .el-pagination.is-background .el-pager li:not(.is-disabled) {
    color: #99a9bf;
    @apply rounded-md;
  }

  .el-pagination.is-background .el-pager li:not(.is-disabled).is-active {
    color: #fff;
    background-color: #00c4b6;
    @apply rounded-md;
  }

  .el-pagination.is-background .el-pager li:hover {
    color: #fff !important;
    background-color: #ff7242;
  }

  // 设置prev按钮的圆角和hover效果
  .el-pagination.is-background .btn-prev.is-first {
    color: #99a9bf;
    @apply rounded-md;
  }

  .el-pagination.is-background .btn-prev.is-first:hover {
    color: #fff !important;
    background-color: #ff7242;
  }

  // 设置next按钮的圆角和hover效果
  .el-pagination.is-background .btn-next.is-last {
    color: #99a9bf;
    @apply rounded-md;
  }

  .el-pagination.is-background .btn-next.is-last:hover {
    color: #fff !important;
    background-color: #ff7242;
  }
</style>
