<script setup lang="ts">
import { computed } from 'vue'
  
const props = withDefaults(defineProps<{
  label?: string;
  variant?: string;
  ui?: unknown;
}>(), {
  variant: 'primary'
});
  
const ui = {
  wrapper: 'inline-flex items-center flex-shrink-0 py-1.5 px-2.5 gap-x-1.5 rounded-md font-medium text-sm cursor-pointer',
  variants: {
    primary: {
      wrapper: 'bg-primary text-primary-content'
    },
    secondary: {
      wrapper: 'bg-secondary text-secondary-content'
    },
    success: {
      wrapper: 'bg-success text-success-content'
    },
    info: {
      wrapper: 'bg-info text-info-content'
    },
    warning: {
      wrapper: 'bg-warning text-warning-content'
    },
    danger: {
      wrapper: 'bg-danger text-danger-content'
    }
  }
}


</script>

<template>
  <div :class="[ui.wrapper]">
    <slot name="leading"></slot>
    <slot>
      <span>
        {{ label }}
      </span>
    </slot>
    <slot name="trailing"></slot>
  </div>
</template>
