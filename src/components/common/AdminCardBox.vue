<template>
  <div class="bg-white rounded p-3 shadow-md">
    <div class="title pb-1 mb-2 px-2 border-b border-gray-200">
      <slot name="header" />
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
