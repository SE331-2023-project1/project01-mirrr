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
    <div class="border-2 border-indigo-600 h-50 w-52 flex flex-col items-center hover:shadow-lg hover:scale-110">
        <img :src="student.image" alt="image" class="object-scale-down h-36 w-57 mt-4">
        <h4>{{ student.name}} {{ student.surname }}</h4>
    </div>
</template>