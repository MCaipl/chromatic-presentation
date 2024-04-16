<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Content from "./components/Content.vue";
</script>

<template>
  <Navbar />
  <div class="max-w-6xl mx-auto px-4 h-screen">
    <div class="space-y-4">
      <div class="pt-4">
        <Content img="/tigers.jpg"/>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <Content img="/duck.jpg"/>
        <Content img="/owl.jpg"/>
        <Content img="/bear.jpg"/>
        <Content img="/dog.jpg"/>
        <Content img="/donkey.jpg"/>
        <Content img="/eagle.jpg"/>
        <Content img="/penguin.jpg"/>
      </div>
    </div>
  </div>
</template>
