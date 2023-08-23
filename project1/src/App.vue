<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="bg-blue-600 h-32 w-full">
        <div class="flex justify-center">
          <img
            class="w-60 h-32"
            src="https://1000logos.net/wp-content/uploads/2021/11/My-Hero-Academia-Logo.png"
            alt="Logo"
          />
        </div>        
    </nav>
    <div class="space-x-7 text-center font-mono">
          <RouterLink class="text-black" to="/">Student</RouterLink>
          <RouterLink class="text-black" to="/advisor">Advisor</RouterLink>
    </div>
    <RouterView />
  </header>
</template>