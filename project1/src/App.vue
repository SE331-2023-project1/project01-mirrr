<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {useMessageStore} from "@/stores/message";
import {storeToRefs} from "pinia";
const store = useMessageStore()
const {message} = storeToRefs(store)
</script>

<template>
  <header>
    <div id="flashMessage" v-if="message">
      <h4>{{message}}</h4>
    </div>
    <nav class="bg-blue-600 h-32 w-full">
        <div class="flex justify-center">
          <img
            class="w-60 h-32"
            src="https://1000logos.net/wp-content/uploads/2021/11/My-Hero-Academia-Logo.png"
            alt="Logo"
          />
        </div>   
    </nav>
    <div class="space-x-20 text-center font-mono text-2xl pt-2 pb-5">
          <RouterLink class="text-black hover:shadow-grey-300 hover:shadow-lg hover:font-bold" :to="{name:'student'}">STUDENT</RouterLink>
          <RouterLink class="text-black hover:shadow-grey-300 hover:shadow-lg hover:font-bold" :to="{name:'advisor'}">ADVISOR</RouterLink>
    </div>
    <RouterView />
  </header>
</template>

<style scoped>
@keyframes yellowFade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation: yellowFade 3s ease-in-out;
}
</style>