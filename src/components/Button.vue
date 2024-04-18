<script setup lang="ts">
  
const props = withDefaults(defineProps<{
  label?: string;
  variant?: string;
}>(), {
  variant: 'primary'
});
  
const ui = {
  wrapper: 'inline-flex items-center flex-shrink-0 py-sm px-md gap-x-sm rounded-md font-medium text-sm cursor-pointer',
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
    },
    link: {
      wrapper: 'text-primary hover:underline decoration-accent decoration-2 underline-offset-2'
    }
  }
}
</script>

<template>
  <div :class="[ui.wrapper, ui.variants[props.variant].wrapper]">
    <slot name="leading"></slot>
    <span>
      {{ label }}
    </span>
    <slot name="trailing"></slot>
  </div>
</template>
