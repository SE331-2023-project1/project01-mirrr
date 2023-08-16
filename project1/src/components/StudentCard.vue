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
        <img :src="student.image" alt="image">
        <h4>{{ student.name}} {{ student.surname }}</h4>
</template>