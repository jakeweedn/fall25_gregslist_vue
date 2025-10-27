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

        <div>
            <label for="job-title" class="form-label"> Job Title </label>
            <input v-model="editableHouseData.jobTitle" id="job-title" class="form-control" type="text">

        </div>

        <div>
            <label for="job-hours" class="form-label"> Job Hours </label>
            <input v-model="editableHouseData.hours" id="job-hours" class="form-control" type="text">

        </div>

        <div>
            <label for="job-rate" class="form-label"> Job Rate </label>
            <input v-model="editableHouseData.rate" id="job-rate" class="form-control" type="text">

        </div>

        <div>
            <label for="job-description" class="form-label"> Job Description </label>
            <input v-model="editableHouseData.description" id="job-description" class="form-control" type="text">

        </div>

        <button class="my-2" type="submit"> Submit </button>



    </form>


</template>


<style lang="scss" scoped></style>