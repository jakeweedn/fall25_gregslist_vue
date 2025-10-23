<script setup>
import { AppState } from '@/AppState.js';
import { computed, onMounted } from 'vue';

const houses = computed(() => AppState.houses)
const account = computed(() => AppState.account)

onMounted(() => {
    getHouses()


})

async function getHouses() {


}
</script>


<template>
    <h1> Houses </h1>


</template>


<style lang="scss" scoped></style>