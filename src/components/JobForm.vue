<script setup>
import { jobsService } from '@/services/JobsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';

const editableHouseData = ref({

    company: '',
    jobTitle: '',
    hours: '',
    rate: '',
    description: ''


})

async function createJob() {

    try {
        logger.log('CREATE THAT JOB👷‍♂️')
        await jobsService.createJob(editableHouseData.value)


    }
    catch (error) {

        Pop.error(error)
        logger.error('COULD NOT CREATE JOB')
    }

}


</script>


<template>

    <form @submit.prevent="createJob()" class="container-fluid">

        <div>
            <label for="job-company" class="form-label"> Job Company </label>
            <input v-model="editableHouseData.company" id="job-company" class="form-control" type="text">

        </div>



    </form>

    To do when I come back:
    1. Put form component in Jobs Page
    2.Finish form
    3.Finish function

</template>


<style lang="scss" scoped></style>