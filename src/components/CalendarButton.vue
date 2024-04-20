<script setup lang="ts">
import { Icon } from '@iconify/vue';
import Button from "./Button.vue";

const props = withDefaults(defineProps<{
  label?: string;
  variant?: string;
}>(), {
  variant: 'primary'
});

</script>

<template>
  <Button :label :variant>
    <template #leading>
    <Icon icon="heroicons:calendar-16-solid" class="text-xl"/>
    </template>
  </Button>
</template>