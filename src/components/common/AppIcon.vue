<template>
  <span class="iconify" :data-icon="props.icon"></span>
</template>

<script lang="ts" setup="setup">
  const props = defineProps<{
    icon: string;
  }>();
</script>

<style scoped></style>
