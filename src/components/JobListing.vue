<script setup>
import { AppState } from '@/AppState.js';
import { Job } from '@/models/Job.js';
import { jobsService } from '@/services/JobsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';


const account = computed(() => AppState.account)

const props = defineProps({

    jobProp: { type: Job, required: true }

})

async function deleteJob() {
    const confirmed = await Pop.confirm(`Are you sure you want to delete the ${props.jobProp.jobTitle} job at ${props.jobProp.company}?`)

    if (!confirmed) {
        return
    }
    try {
        logger.log('Delete that job')
        await jobsService.deleteJob(props.jobProp.id)


    }
    catch (error) {
        Pop.error(error)
        logger.error('COULD NOT DELETE JOB', error)


    }

}

</script>


<template>
    <div class="card job-border">
        <div class="card-start d-flex flex-row justify-content-between">

            <h1> {{ jobProp.company }}, </h1>
            <h3> {{ jobProp.jobTitle }}</h3>
        </div>
        <div class="card-body">
            <p> {{ jobProp.description }} </p>


            <div class="d-flex flex-row justify-content-between">

                <ul>
                    <li> {{ jobProp.hours }} hours per week</li>
                    <li> ${{ jobProp.rate }} per hour </li>

                </ul>
                <button class="btn btn-danger rounded-pill" @click="deleteJob()"> 🗑 </button>
                <!-- v-if="account?.id == jobProp.creatorId" -->

            </div>


        </div>



    </div>

</template>


<style lang="scss" scoped>
.job-border {
    border-style: solid;
    border-width: 5px;
    border-color: skyblue;

}

.card-start {

    background-color: lime;

}

.card-body {

    background-color: lime;
}
</style>