<template>
  <div class="bg-white rounded px-3 pt-5 pb-3 shadow-md">
    <div class="title pb-2 mb-2 px-2 border-b border-gray-200">
      <slot name="header" />
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
