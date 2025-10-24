<script setup>
import { AppState } from '@/AppState.js';
import { House } from '@/models/House.js';
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';


const account = computed(() => AppState.account)

const props = defineProps({
    houseProp: { type: House, required: true }
})

async function deleteHouse() {
    const confirmed = await Pop.confirm(`Are you sure you want to delete this ${props.houseProp.description}?`)

    if (!confirmed) {
        return
    }

    try {
        logger.log('Delete that house')
        await housesService.deleteHouse(props.houseProp.id)

    }
    catch (error) {
        Pop.error(error)
        logger.error('COULD NOT DELETE HOUSE')

    }


}

</script>


<template>



    <div class="card house-border">
        <div class="card-start">
            <a class="d-flex flex-row justify-content-between my-1">
                <h1> {{ houseProp.description }} </h1>
                <button class="btn btn-danger rounded-pill mx-2" @click="deleteHouse()"> 🗑 </button>
            </a>
            <img :src=houseProp.imgUrl :alt="`${houseProp.creatorId}`">
        </div>

        <div class="card-body">
            <section class="row justify-content-evenly">
                <div class="col-md-2">
                    <h3 class="text-center">Stats: </h3>
                    <ul>
                        <li> Bathrooms: {{ houseProp.bathrooms }} </li>
                        <li> Bedrooms: {{ houseProp.bedrooms }}</li>
                        <li> Levels: {{ houseProp.levels }} </li>
                    </ul>
                </div>

                <div class="col-md-2">
                    <h3> Year and Price: </h3>
                    <ul>
                        <li>Year: {{ houseProp.year }} </li>
                        <li>Price: {{ houseProp.price }} </li>
                    </ul>
                </div>

                <div class="col-md-2">
                    <h3> Posted by: </h3>
                    <p> {{ houseProp.creatorId }}</p>

                </div>

            </section>

        </div>

    </div>






</template>


<style lang="scss" scoped>
.card-body {
    background-color: skyblue;
}

.card-start {
    background-color: skyblue;
}

.house-border {
    border-width: 5px;
    border-color: lime;
    border-style: solid;
    //Remember what Jake taught me, specificity
}



// .card.border</style>