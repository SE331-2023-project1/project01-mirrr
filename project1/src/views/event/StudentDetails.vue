<script setup lang="ts">
import { type StudentItem } from '@/type';
import type { PropType } from 'vue';
defineProps({
    student: {
        type: Object as PropType<StudentItem>,
            require: true
    }
})
</script>

<template>
    <div v-if="student">
        <img :src="student.image">        
        <p>ID: {{ student.id }}</p>
        <p>Name-Surname: {{ student.name }} {{ student.surname }}</p>
        <p>Course: {{ student.course }}</p>
    </div>
</template>