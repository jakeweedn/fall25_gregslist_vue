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


    <div class="card house-border">
        <div class="card">
            <div class="yo">
                <h1> {{ houseProp.description }} </h1>
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
    </div>





</template>


<style lang="scss" scoped>
.card-body {
    background-color: skyblue;
}

.yo {
    background-color: skyblue;
}

.house-border {
    border-width: 5px;
    border-color: lime;
    border-style: solid;
    //Remember what Jake taught me, specificity
}



// .card.border</style>