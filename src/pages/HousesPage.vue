<script setup>
import { AppState } from '@/AppState.js';
import HouseForm from '@/components/HouseForm.vue';
import HouseListing from '@/components/HouseListing.vue';
import HouseListingModal from '@/components/HouseListingModal.vue';
import ModalWrapper from '@/components/ModalWrapper.vue';
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
    <h1 class="text-center"> Houses </h1>
    <div class="col-md-2 m-2">
        <button v-if="account" class="btn btn-primary my-2" data-bs-toggle="modal" data-bs-target="#house-form-modal">
            List your
            house

        </button>
    </div>




    <div class="row">
        <div v-for="house in houses" :key="house.id" class="col-md-6 my-2">

            <HouseListing :houseProp="house" />
            <HouseListingModal :modalId=house.id :modalTitle="house.description" :house="house" />

        </div>



    </div>

    <ModalWrapper modalId="house-form-modal" modalTitle="Create house!">
        <HouseForm />

    </ModalWrapper>


</template>


<style lang="scss" scoped></style>