<script setup lang="ts">
import Content from "./Content.vue";
</script>

<template>
<div class="space-y-2">
  <h2 class="font-medium">Animals</h2>
  <span class="text-sm">Best of animals</span>
  <div class="grid grid-cols-3 gap-4">
    <Content img="/duck.jpg"/>
    <Content img="/owl.jpg"/>
    <Content img="/bear.jpg"/>
    <Content img="/dog.jpg"/>
    <Content img="/donkey.jpg"/>
    <Content img="/eagle.jpg"/>
    <Content img="/penguin.jpg"/>
    <Content img="/tigers.jpg"/>
  </div>
</div>
</template>