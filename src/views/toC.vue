<template>
  <div>count: {{ countStore.num }}</div>
  <div>
    <button class="bg-green-300 text-white rounded px-2 py-1" @click="countStore.increment()">
      +1
    </button>
  </div>
  <div>
    <p>x:{{ x }}</p>
    <p>x:{{ y }}</p>
  </div>
  <el-button>ok!</el-button>
  <app-icon icon="flat-color-icons:search"></app-icon>
</template>

<script lang="ts" setup="setup">
  import useCountStore from '@/store/module/useCountStore';
  import AppIcon from '@/components/common/AppIcon.vue';
  import useMouse from '@/hooks/useMouse';

  console.log(import.meta.env.VITE_API_URL);

  const countStore = useCountStore();

  const { x, y } = useMouse();
</script>

<style scoped></style>
