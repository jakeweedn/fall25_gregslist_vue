vt
<script setup>
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';


//How can I get my house I create to be at top of page? Mick suggested a sortedBy... 

const editableHouseData = ref({
    description: '',
    imgUrl: '',
    bathrooms: '',
    bedrooms: '',
    levels: '',
    year: new Date().getFullYear(),
    price: 0, //Why is it 0?

})

async function createHouse() {

    try {
        logger.log('CREATE THAT HOUSE🏡')
        await housesService.createHouse(editableHouseData.value)

        editableHouseData.value = {
            description: '',
            imgUrl: '',
            bathrooms: '',
            bedrooms: '',
            levels: '',
            year: new Date().getFullYear(),
            price: 0, //Why is it 0?

        }
    }
    catch (error) {

        Pop.error(error)
        logger.error('COULD NOT CREATE HOUSE')
    }



}








</script>


<template>
    <form @submit.prevent="createHouse()" class="container-fluid">

        <div>
            <label for="house-description" class="form-label"> House Description </label>
            <input v-model="editableHouseData.description" id="house-description" class="form-control" type="text">

        </div>


        <div>
            <label for="house-img-url" class="form-label"> House ImgUrl </label>
            <input v-model="editableHouseData.imgUrl" id="house-img-url" class="form-control" type="url">

        </div>

        <div>
            <label for="bathrooms" class="form-label"> Bathrooms </label>
            <input v-model="editableHouseData.bathrooms" id="bathrooms" class="form-control" type="number">


        </div>

        <div>
            <label for="bedrooms" class="form-label"> Bedrooms </label>
            <input v-model="editableHouseData.bedrooms" id="bedrooms" class="form-control" type="number">

        </div>

        <div>
            <label for="house-levels" class="form-label"> House Levels </label>
            <input v-model="editableHouseData.levels" id="house-levels" class="form-control" type="number">

        </div>

        <div>
            <label for="house-year" class="form-label"> House Year </label>
            <input v-model="editableHouseData.year" id="house-year" class="form-control" type="number">


        </div>

        <div>
            <label for="house-price" class="form-label"> House Price </label>
            <input v-model="editableHouseData.price" id="house-price" class="form-control" type="text">

        </div>

        <button type="submit"> Submit </button>

    </form>

</template>


<style lang="scss" scoped></style>