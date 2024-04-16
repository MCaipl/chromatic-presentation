<script setup lang="ts">
import Button from "./Button.vue";
</script>

<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-6xl	px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div>
          <div class="flex gap-2">
            <Button label="Home" variant="link"/>
            <Button label="About" variant="link"/>
          </div>
        </div>
        <div>
          <div class="flex gap-2">
            <Button label="Login"/>
            <Button label="Register"/>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
