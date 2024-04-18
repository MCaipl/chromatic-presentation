<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Content from "./components/Content.vue";
import Lane from "./components/Lane.vue";
import Promo from "./components/Promo.vue";
</script>

<template>
  <Navbar />
  <div class="max-w-6xl mx-auto px-4 h-screen">
    <div class="space-y-4">
      <div class="pt-4">
        <Content img="/tigers.jpg"/>
      </div>


      <Promo />
      
      <Lane></Lane>

    </div>
  </div>
</template>
