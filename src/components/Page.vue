<script setup lang="ts">
import Navbar from "./Navbar.vue";
import Content from "./Content.vue";
import Lane from "./Lane.vue";
import Promo from "./Promo.vue";
</script>

<template>
  <Navbar />
  <div class="max-w-6xl mx-auto px-4 h-screen">
    <div class="space-y-4">
      <div class="pt-4">
        <Content img="/tigers.jpg"/>
      </div>
      <Promo />
      <Lane />
    </div>
  </div>
</template>
