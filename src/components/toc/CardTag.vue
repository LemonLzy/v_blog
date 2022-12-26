<template>
  <el-card class="archive-card">
    <div class="item-headline">
      <div class="text-black flex items-center">
        <app-icon class="menu-icon text-xl" icon="mdi:tag-multiple" style="color: dimgray" />
      </div>
      <div class="item-headline-title">标签</div>
    </div>
    <div class="archive-info">
      <el-link v-for="tag in tagList" :key="tag.id" class="tag-link" :underline="false">
        {{ tag.tag }}
      </el-link>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
  import AppIcon from '@/components/common/AppIcon.vue';

  const tagList = [
    {
      id: 1,
      tag: 'ADB',
    },
    {
      id: 2,
      tag: 'Appium',
    },
    {
      id: 3,
      tag: 'Bitlocker',
    },
    {
      id: 4,
      tag: 'Dashboard',
    },
    {
      id: 5,
      tag: 'Docker',
    },
    {
      id: 6,
      tag: 'ETL',
    },
    {
      id: 7,
      tag: 'FTP',
    },
    {
      id: 8,
      tag: 'Flask',
    },
    {
      id: 9,
      tag: 'Git',
    },
    {
      id: 10,
      tag: 'Jenkins',
    },
    {
      id: 11,
      tag: 'Linux',
    },
    {
      id: 12,
      tag: 'Python',
    },
    {
      id: 13,
      tag: 'MySQL',
    },
    {
      id: 14,
      tag: 'Go',
    },
    {
      id: 15,
      tag: 'Helm',
    },
    {
      id: 16,
      tag: 'Java',
    },
    {
      id: 17,
      tag: 'PDI',
    },
    {
      id: 18,
      tag: 'Pod Preset',
    },
    {
      id: 19,
      tag: 'Redis',
    },
    {
      id: 20,
      tag: 'Selenium',
    },
    {
      id: 21,
      tag: 'Tomcat',
    },
    {
      id: 22,
      tag: 'Web',
    },
    {
      id: 23,
      tag: 'Windows',
    },
    {
      id: 24,
      tag: 'allure',
    },
    {
      id: 25,
      tag: 'gcc',
    },
    {
      id: 26,
      tag: 'ingress',
    },
    {
      id: 27,
      tag: 'kubernetes',
    },
    {
      id: 28,
      tag: 'php',
    },
    {
      id: 29,
      tag: 'requests',
    },
    {
      id: 30,
      tag: '位运算',
    },
    {
      id: 31,
      tag: '算法',
    },
    {
      id: 32,
      tag: '杂谈',
    },
  ];
</script>

<style lang="scss" scoped>
  .item-headline {
    @apply flex;

    .item-headline-title {
      @apply ml-2 text-base;
    }

    .item-headline-icon {
      @apply flex items-center accent-gray-500;
    }
  }

  .el-card {
    @apply rounded-xl;
  }

  .tag-link {
    margin: 10px;
    font-size: 1.1em;
    color: #999;
  }

  .tag-link:hover {
    color: #49b1f5;
  }
</style>
