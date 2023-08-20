<script setup lang="ts">
import type { AdvisorItem } from '@/type'
import type { PropType } from 'vue'
const props = defineProps({
    advisor: {
        type: Object as PropType<AdvisorItem>,
            required: true
    }
})
</script>


<template>
        <img :src="advisor.image" alt="image">
        <h4>{{ advisor.name }} {{ advisor.surname }}</h4>
</template>