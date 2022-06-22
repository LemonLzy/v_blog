<template>
  <div>count: {{ countStore.num }}</div>
  <div>
    <button class="bg-green-300 text-white rounded px-2 py-1" @click="countStore.increment()">
      +1
    </button>
  </div>
  <el-button>ok!</el-button>
  <app-icon icon="flat-color-icons:search"></app-icon>
</template>

<script lang="ts" setup="setup">
  import useCountStore from '@/store/module/useCountStore';
  import AppIcon from '@/components/common/AppIcon.vue';

  console.log(import.meta.env.VITE_API_URL);

  const countStore = useCountStore();
</script>

<style scoped></style>
