<script setup>
import { AppState } from '@/AppState.js';
import { House } from '@/models/House.js';
import { computed } from 'vue';


const account = computed(() => AppState.account)

const props = defineProps({
    houseProp: { type: House, required: true }
})

</script>


<template>
    <h2>Will somethiing show up?</h2>
    {{ houseProp.bathrooms }}

</template>


<style lang="scss" scoped></style>