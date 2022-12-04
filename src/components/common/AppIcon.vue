<template>
  <a :href="href" target="_blank">
    <span class="iconify" :data-icon="props.icon"></span>
  </a>
</template>

<script lang="ts" setup="setup">
  const props = defineProps<{
    icon: string;
    href?: string;
  }>();
</script>

<style scoped></style>
