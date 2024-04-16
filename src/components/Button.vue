<script setup lang="ts">
import {computed } from 'vue'
const props = defineProps<{
  label: string;
  variant?: string
}>();

const colors = computed(() => props.variant === 'link' 
  ? "text-emerald-500 hover:text-emerald-600 disabled:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-500 dark:disabled:text-emerald-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-500 dark:focus-visible:ring-emerald-400 " 
  : "text-white dark:text-gray-900 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500 dark:bg-emerald-400 dark:hover:bg-emerald-500 dark:disabled:bg-emerald-400 focus-visible:outline-emerald-500 dark:focus-visible:outline-emerald-400"
)
</script>

<template>
  <div
    class="cursor-pointer focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:focus-visible:outline-emerald-400 inline-flex items-center"
    :class="[colors]"
  >
    {{ label }}
  </div>
</template>
