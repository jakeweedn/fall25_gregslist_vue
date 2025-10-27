<script setup>
import { AppState } from '@/AppState.js';
import { House } from '@/models/House.js';
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';
import HouseListingModal from './HouseListingModal.vue';


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

            <!-- Rember backticks! Could also do position absolute or position relative! -->
            <!-- :style="{ backgroundImage: `url(${houseProp.imgUrl})` }" -->

            <!-- <a class="d-flex flex-row justify-content-end my-1">
                <button class="btn btn-danger rounded-pill mx-2" @click="deleteHouse()"> 🗑 </button>
            </a> -->
            <img class="img-fluid house-image" :src=houseProp.imgUrl :alt="`${houseProp.creatorId.name}`"
                data-bs-toggle="modal" :data-bs-target="`#${houseProp.id}`">
        </div>

        <div class="card-body">
            <h1 class="text-center my-4"> {{ houseProp.description }} </h1>


            <!-- Let's put all the below in a modal... -->


            <!-- <section class="row justify-content-evenly">
                <div class="col-md-2">
                    <h3 class="text-center">Stats: </h3>
                    <ul>
                        <li> Bathrooms: {{ houseProp.bathrooms }} </li>
                        <li> Bedrooms: {{ houseProp.bedrooms }}</li>
                        <li> Levels: {{ houseProp.levels }} </li>
                        <li> Description: {{ houseProp.description }}</li>
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

            </section> -->

            <div class="d-flex flex-row justify-content-between card-end">

                <p> Price: $ {{ houseProp.price }} </p>
                <p> Posted by: {{ houseProp.creator?.name }} </p>
            </div>

            <a class="d-flex flex-row justify-content-end">
                <button v-if="account?.id == houseProp.creatorId" class="btn btn-danger rounded-pill mx-2 delete-button"
                    @click="deleteHouse()"> 🗑 </button>
            </a>
        </div>



    </div>






</template>


<style lang="scss" scoped>
.card-body {
    background-color: violet;

}

.card-start {
    background-color: skyblue;
}

.card-footer {
    background-color: violet;
}

.house-border {
    border-width: 5px;
    border-color: lime;
    border-style: solid;
    //Remember what Jake taught me, specificity
}

.house-image {
    max-height: 500px;
    min-height: 500px;
    min-width: 100%;
    object-fit: cover;



}

.delete-button {
    position: absolute;
    top: 25px;

    .card-end {
        position: absolute;
        bottom: 10px;
    }




}
</style>