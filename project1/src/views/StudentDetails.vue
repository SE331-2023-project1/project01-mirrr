<script setup lang="ts">
import type { StudentItem } from '@/type'
import type { PropType } from 'vue'
const props = defineProps({
    student: {
        type: Object as PropType<StudentItem>,
            required: true
    }
})
</script>


<template>
    <div class="border-2 border-indigo-600 items-center">
        <span>
            <img :src="student.image" alt="image" class="object-scale-down h-36 w-57 mt-4">
        </span>
        <span>
            <p>Student ID: {{ student.id }}</p>
            <p>Name: {{ student.name}} {{ student.surname }}</p>
            <p v-for="course in courses" :key="course.id" :courses="course">Enroll course: </p>
        </span>
    </div>
</template>