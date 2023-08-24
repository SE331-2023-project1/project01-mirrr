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
        <div class="m-5">
            <div class="border-2 bg-gradient-to-r from-[#075985] to-[#082f49] h-50 w-full flex md:flex-row gap-2 flex-col p-3 rounded-md">
                <div class="border-2 border-[#0c4a6e] h-55 w-80 flex flex-col items-center rounded-md">
                    <img :src="student.image" class="object-scale-down rounded-md">
                </div>
                <div class="border-2  border-[#94a3b8] bg-[#94a3b8] h-50 w-full flex flex-col items-left rounded-md">        
                    <p>ID: {{ student.id }}</p>
                    <p>Name-Surname: {{ student.name }} {{ student.surname }}</p>
                    <p>Course: {{ student.course }}</p>
                </div>
            </div>
        </div>
    </div>
</template>