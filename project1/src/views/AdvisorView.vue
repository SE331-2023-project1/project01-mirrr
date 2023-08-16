<script setup lang="ts">
import type { AdvisorItem } from '@/type';
import { ref } from 'vue'
import type { Ref } from 'vue'
import axios from 'axios'
import AdvisorService from '@/services/AdvisorService'
import AdvisorCard from '@/components/AdvisorCard.vue';

const advisors: Ref<Array<AdvisorItem[]>> = ref([])
  AdvisorService.getAdvisor().then((response) => {
    advisors.value = response.data
  })
</script>

<template>
  <main>
    <AdvisorCard v-for="advisor in advisors" :key="advisor.name" :student="advisor"></AdvisorCard>
  </main>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
