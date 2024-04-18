<script setup lang="ts">
import CallToActionButton from "./CallToActionButton.vue";

defineProps<{
  img: string;
}>();


</script>

<template>
  <div class="relative aspect-video">
    <img :src="img" class="aspect-video object-cover absolute rounded-lg" />
    <span class="absolute bottom-2 left-2">
        <CallToActionButton label="See more"/>
    </span>
  </div>
</template>
