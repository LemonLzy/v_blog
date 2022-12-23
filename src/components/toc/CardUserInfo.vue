<template>
  <el-card class="user-card">
    <div class="avatar-div">
      <el-avatar class="avatar-img" :src="userInfo.avatar" :fit="'fill'" :size="100" />
    </div>
    <div class="nickname">{{ userInfo.nickname }}</div>
    <div class="signature">{{ userInfo.signature }}</div>
    <el-row class="statistics">
      <el-col :sm="6" class="articleTotal">
        <el-row justify="center" class="subTitle">文章</el-row>
        <el-row justify="center" class="subStatistics">
          {{ userInfo.articleTotal }}
        </el-row>
      </el-col>
      <el-col :sm="6" class="tags">
        <el-row justify="center" class="subTitle">标签</el-row>
        <el-row justify="center" class="subStatistics">
          {{ userInfo.tags }}
        </el-row>
      </el-col>
      <el-col :sm="6" class="category">
        <el-row justify="center" class="subTitle">分类</el-row>
        <el-row justify="center" class="subStatistics">
          {{ userInfo.category }}
        </el-row>
      </el-col>
    </el-row>
    <el-link class="follow" :underline="false" :href="userInfo.link.github" target="_blank">
      <template #icon>
        <app-icon icon="mdi:github" class="github text-xl cursor-pointer"></app-icon>
        Follow Me
      </template>
    </el-link>
    <el-row class="extra-link">
      <app-icon
        icon="mdi:github"
        class="github text-xl cursor-pointer"
        :href="userInfo.link.github"
      ></app-icon>
      <app-icon
        icon="clarity:email-solid"
        class="email text-xl cursor-pointer"
        :href="userInfo.link.email"
      ></app-icon>
    </el-row>
  </el-card>
</template>

<script lang="ts" setup>
  import AppIcon from '@/components/common/AppIcon.vue';

  const userInfo = defineProps<{
    avatar: string;
    nickname: string;
    signature: string;
    articleTotal: string;
    tags: string;
    category: string;
    link: {
      github: string;
      email: string;
    };
  }>();
</script>

<style lang="scss" scoped>
  .el-card {
    @apply rounded-xl;

    .avatar-div {
      margin-bottom: 10px;
      @apply flex items-center justify-center;
    }

    .avatar-img {
      background: rgba(0, 0, 0, 0);
      transition: filter 375ms ease-in 0.2s, transform 0.3s;
    }

    .avatar-img:hover {
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }

    .nickname {
      color: #4c4948;
      font-weight: 500;
      font-size: 1.4em;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Lato, Roboto,
        'PingFang SC', 'Microsoft YaHei', sans-serif;
      @apply flex justify-center items-center;
    }

    .signature {
      margin-top: 5px;
      color: #4c4948;
      font-size: 14px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Lato, Roboto,
        'PingFang SC', 'Microsoft YaHei', sans-serif;
      line-height: 2;
      @apply flex justify-center items-center;
    }

    .statistics {
      @apply flex justify-center items-center;
      margin-top: 13px;
      color: #4c4948;

      .subTitle {
        font-size: 0.8em;
      }

      .subStatistics {
        font-size: 1.2em;
        color: #1f2d3d;
      }
    }

    .follow {
      @apply w-full;
      margin-top: 14px;
      background-color: #49b1f5;
      height: 34px;
      color: #ffffff;
      transition: all 0.2s ease-in-out;
    }

    .github {
      margin-right: 10px;
    }

    .follow:hover {
      background-color: #ff7242;
    }

    .extra-link {
      margin: 10px 0 -6px;
      @apply flex justify-center items-center;

      .github {
        transition: filter 200ms ease-in 0.2s, transform 0.3s;
      }

      .github:hover {
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
      }

      .email {
        margin-left: 16px;
        transition: filter 200ms ease-in 0.2s, transform 0.3s;
      }

      .email:hover {
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
</style>
