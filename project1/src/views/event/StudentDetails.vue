<!--<script setup lang="ts">
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
--> 

<!--Script-->
<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { StudentItem } from '@/type';
import StudentService from '@/services/StudentService';
const student = ref<StudentItem | null> (null)
const props = defineProps({
    id: String
})

StudentService.getStudentById(Number(props.id))
.then((response) => {
    student.value = response.data
}).catch(error => {
    console.log(error)
})
</script>

<!--Template-->
<template>
    <div v-if = "student">
        <img :src="student.image">        
        <p>ID: {{ student.id }}</p>
        <p>Name-Surname: {{ student.name }} {{ student.surname }}</p>
        <p>Course: {{ student.course }}</p>
    </div>
</template>