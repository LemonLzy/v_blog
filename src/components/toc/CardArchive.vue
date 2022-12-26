<template>
  <el-card class="archive-card">
    <div class="item-headline">
      <div class="text-black flex items-center">
        <app-icon class="menu-icon text-xl" icon="ph:archive-duotone" />
      </div>
      <div class="item-headline-title">归档</div>
    </div>
    <div class="archive-info">
      <el-row v-for="archive in archiveInfo" :key="archive.month" class="archive-row">
        <el-col :span="20" class="archive-list-date">
          <el-link>{{ archive.month }}</el-link>
        </el-col>
        <el-col :span="4" class="archive-list-count">
          <el-link>{{ archive.count }}</el-link>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
  import AppIcon from '@/components/common/AppIcon.vue';
  import { onMounted, ref } from 'vue';
  import { ArchiveList, reqArchiveList } from '@/api/articleApi';
  import { Code_Success } from '@/app/codes';
  import { ElMessage } from 'element-plus/es';

  const archiveInfo = ref<ArchiveList[]>([]);

  onMounted(() => {
    getArchiveList();
  });

  const getArchiveList = async () => {
    try {
      let { code, data, msg } = await reqArchiveList();
      if (code !== Code_Success) {
        ElMessage.error(msg);
        return;
      }
      archiveInfo.value = data.list || [];
      return;
    } catch (e: any) {
      ElMessage.error(e.message);
    }
  };
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

  .archive-row {
    margin-top: 10px;
    animation: announ_animation 0.8s linear infinite;
    font-size: 14px;
    color: #4c4948;
    @apply w-full;
  }

  .archive-link {
    @apply w-full;
  }
</style>
