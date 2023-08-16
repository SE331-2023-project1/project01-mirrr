<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex justify-center items-start h-screen">
    <header class="leading-normal">
      <img
        class="w-60 h-32"
        src="https://1000logos.net/wp-content/uploads/2021/11/My-Hero-Academia-Logo.png"
        alt="Logo"
      />
      <nav class="align-center">
        <div class="flex space-x-4">
          <RouterLink class="text-black" to="/">Student</RouterLink>
          <RouterLink class="text-black" to="/about">Advisor</RouterLink>
        </div>
      </nav>
      <RouterView />
    </header>
  </div>
</template>
