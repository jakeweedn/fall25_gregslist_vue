<script setup>
import { AppState } from '@/AppState.js';
import JobListing from '@/components/JobListing.vue';
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

    <div v-for="job in jobs" :key="job.id">
        <JobListing :jobProp="job" />
    </div>

</template>


<style lang="scss" scoped></style>