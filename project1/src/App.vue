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
        <div class="absolute top-0 right-0 mt-2 mr-3 text-lg rounded-md bg-white px-3">
          <RouterLink class="text-black hover:font-bold" to="/comment">Comment</RouterLink>
        </div>        
    </nav>
    <div class="space-x-20 text-center font-mono text-2xl pt-2 pb-5">
          <RouterLink class="text-black" :to="{name:'student'}">STUDENT</RouterLink>
          <RouterLink class="text-black" :to="{name:'advisor'}">ADVISOR</RouterLink>
    </div>
    <RouterView />
  </header>
</template>