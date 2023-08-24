<template>
  <div class="text-center font-mono">
    <p class="mt-5 text-5xl">Comment</p>
    <p class="text-3xl">Student:</p>
    <select v-model="selectedStudent" class="border-black border-2 w-64 h-10 text-xl">
      <option value="" disabled>Select Student</option>
      <option v-for="student in students" :key="student.id" :value="student.id">{{ student.name }} {{ student.surname }}</option>
    </select>
    <p class="text-3xl">Comment:</p>
    <input v-model="comment" class="border-black border-2 w-64 h-20"/>
    <button class="text-xl">Send</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const selectedStudent = ref('');
const students = ref([]);
const comment = ref('');

onMounted(async () => {
  try {
    const response = await axios.get('db.json');
    students.value = response.data.student;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<style>
/* Add your styles here */
</style>
