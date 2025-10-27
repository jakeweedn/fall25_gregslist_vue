<script setup>
import { AppState } from '@/AppState.js';
import JobForm from '@/components/JobForm.vue';
import JobListing from '@/components/JobListing.vue';
import ModalWrapper from '@/components/ModalWrapper.vue';
import { jobsService } from '@/services/JobsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';


const jobs = computed(() => AppState.jobs)
const account = computed(() => AppState.account)

onMounted(() => {

    getJobs()
})


async function getJobs() {

    try {

        await jobsService.getJobs()


    }
    catch (error) {
        Pop.error(error)
        logger.error('COULD NOT GET JOBS', error)


    }

}
</script>


<template>
    <h1 class="text-center">Jobs</h1>
    <div class="col-md-2 m-2">
        <button v-if="account" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#job-form-modal"> List
            your job
        </button>
    </div>



    <div v-for="job in jobs" :key="job.id" class="col-md-6 my-2">
        <JobListing :jobProp="job" />

    </div>

    <ModalWrapper modalId="job-form-modal" modalTitle="Create job!">
        <JobForm />
    </ModalWrapper>

</template>


<style lang="scss" scoped></style>