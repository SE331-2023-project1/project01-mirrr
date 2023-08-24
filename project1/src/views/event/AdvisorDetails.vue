<!--
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
--> 

<!--Script-->
<script setup lang ="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { AdvisorItem } from '@/type';
import AdvisorService from '@/services/AdvisorService';
const advisor = ref<AdvisorItem | null> (null)
const props = defineProps({
    id: String
})

AdvisorService.getAdvisorById(Number(props.id))
.then((response) => {
    advisor.value = response.data
}).catch(error => {
    console.log(error)
})
</script>

<!--Template-->
<template>
    <div v-if="advisor">
        <img :src="advisor.image">        
        <p>ID: {{ advisor.id }}</p>
        <p>Name-Surname: {{ advisor.name }} {{ advisor.surname }}</p>
    </div>
</template>