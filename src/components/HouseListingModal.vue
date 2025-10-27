<script setup>
import { House } from '@/models/House.js';

defineProps({

    modalId: { type: String, required: true },
    modalTitle: { type: String, default: "Don't forget your title!" },
    house: House,
})

</script>


<template>
    <div class="modal fade" :id="modalId" tabindex="-1" :aria-labelledby="modalId + 'Label'" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content change-bg-color">

                <section class="row justify-content-evenly">
                    <div class="col-md-2">
                        <h3 class="text-center">Stats: </h3>
                        <ul>
                            <li> Bathrooms: {{ house.bathrooms }} </li>
                            <li> Bedrooms: {{ house.bedrooms }}</li>
                            <li> Levels: {{ house.levels }} </li>
                            <li> Description: {{ house.description }}</li>
                        </ul>
                    </div>

                    <div class="col-md-2">
                        <h3> Year and Price: </h3>
                        <ul>
                            <li>Year: {{ house.year }} </li>
                            <li>Price: {{ house.price }} </li>
                        </ul>
                    </div>

                    <div class="col-md-2 my-3">
                        <h3> Posted by: </h3>
                        <p> {{ house.creator?.name }}</p>

                    </div>

                </section>

            </div>
        </div>
    </div>





</template>


<style lang="scss" scoped></style>