<script setup lang="ts">
import Button from "./Button.vue";

defineProps<{
  img: string;
}>();


</script>

<template>
  <div class="relative aspect-video">
    <img :src="img" class="aspect-video object-cover absolute rounded-lg" />
    <span class="absolute bottom-2 left-2">
        <Button label="See more"/>
    </span>
  </div>
</template>
