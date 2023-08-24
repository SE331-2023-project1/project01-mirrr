<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue';
import type { StudentItem } from '@/type';
import { ref } from 'vue'
import type { Ref } from 'vue'
import axios from 'axios'
import StudentService from '@/services/StudentService'
</script>

<template>
    <p class="mt-5 text-center font-mono text-5xl">Comment</p>
<div class="border-blue-500 border-2 h-50 w-52 flex items-center">
    <p>Student:</p>
    
    <p>Comment:</p>
        <input class="border-blue-500">

</div>
</template>