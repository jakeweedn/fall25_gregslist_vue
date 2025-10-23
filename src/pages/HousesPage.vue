<script setup>
import { AppState } from '@/AppState.js';
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const houses = computed(() => AppState.houses)
const account = computed(() => AppState.account)

onMounted(() => {
    getHouses()


})

async function getHouses() {
    try {
        await housesService.getHouses()


    }

    catch (error) {

        Pop.error(error)
        logger.error('COULD NOT GET HOUSES', error)


    }


}
</script>


<template>
    <h1> Houses </h1>


</template>


<style lang="scss" scoped></style>