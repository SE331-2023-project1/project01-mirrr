<script setup lang="ts">
import { type AdvisorItem } from '@/type';
import type { PropType } from 'vue';
defineProps({
    advisor: {
        type: Object as PropType<AdvisorItem>,
            require: true
    }
})
</script>

<template>
    <div v-if="advisor">
        <img :src="advisor.image">        
        <p>ID: {{ advisor.id }}</p>
        <p>Name-Surname: {{ advisor.name }} {{ advisor.surname }}</p>
    </div>
</template>