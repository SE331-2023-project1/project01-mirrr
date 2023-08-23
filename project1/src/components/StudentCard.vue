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
    <div class="border-2 border-indigo-600 h-50 w-60 flex flex-col items-center">
        <img :src="student.image" alt="image" class="object-scale-down h-36 w-57 mt-4">
        <h4>{{ student.name}} {{ student.surname }}</h4>
    </div>
</template>

<!-- <style scoped>
.student-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 5px solid #ffffff;
    margin-bottom: 18px;
    margin-top: 18px;
    border-radius: 15px;
    margin-right: 60px;
}



.student-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(86, 18, 18, 0.2);
}

.student-link {
    color: #2c3e50;
    text-decoration: none;
}

.image {
    width: 200px;
    height: 150px;
    align-items: center;
    margin-top: 10%;
    border-radius: 10px
}
</style> -->