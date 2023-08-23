<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue';
import type { StudentItem } from '@/type';
import { ref } from 'vue'
import type { Ref } from 'vue'
import axios from 'axios'
import StudentService from '@/services/StudentService'

const students: Ref<Array<StudentItem[]>> = ref([])
  StudentService.getStudent().then((response) => {
    students.value = response.data
  })
</script>

<template>
  <main class="font-mono text-center">
    <div class="grid gap-20 grid-cols-3 grid-rows-3">
      <StudentCard v-for="student in students" :key="student.id" :student="student"></StudentCard>
    </div>
  </main>
</template>
