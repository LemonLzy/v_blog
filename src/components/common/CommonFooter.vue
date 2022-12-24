<template>
  <div class="footer">
    <el-image
      class="footer_cover"
      :src="'https://blog-1300597227.cos.ap-guangzhou.myqcloud.com//blog/1671879812013.jpg'"
      :fit="'cover'"
    />
    <div class="footer_text">
      <el-row justify="center" class="copyright">{{ footer_info.copyright }}</el-row>
      <el-row justify="center" class="welcome">{{ footer_info.welcome }}</el-row>
      <el-row justify="center" class="icp">
        <el-image class="icp_img" src="@/../public/icp.png"></el-image>
        <a
          class="icp_link"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=43019002001052"
          target="_blank"
        >
          {{ footer_info.icp }}
        </a>
      </el-row>
      <el-row justify="center" class="icp2">
        <a class="icp_link" href="https://beian.miit.gov.cn" target="_blank">
          {{ footer_info.icp2 }}
        </a>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import AppIcon from '@/components/common/AppIcon.vue';

  const footer_info = reactive({
    copyright: ref('©2019 - 2023 By LemonLzy'),
    welcome: ref('Hi, welcome to my Blog.'),
    icp: ref('湘公网安备 43019002001052号'),
    icp2: ref('湘ICP备19025465号-1'),
  });
</script>

<style lang="scss" scoped>
  .footer {
    position: relative;
  }

  .footer_cover {
    height: 192px;
    @apply flex w-full;
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
  }

  .footer_cover:before {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    backdrop-filter: blur(0px);
    z-index: 1;
    background: rgba(0, 0, 0, 0.3);
  }

  .footer_text {
    color: #eee;
    font-size: 14px;
    line-height: 2;
    position: absolute;
    top: 20%;
    width: 100%;
  }

  .icp_img {
    padding: 4px;
  }
</style>
