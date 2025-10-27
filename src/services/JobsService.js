import { logger } from "@/utils/Logger.js";
import { api } from "./AxiosService.js";
import { Job } from "@/models/Job.js";
import { AppState } from "@/AppState.js";


class JobsService {

    async getJobs() {
        //get jobs
        const response = await api.get('api/jobs')
        logger.log('GOT JOBS🧑🏼‍🎤', response.data)

        //save jobs into AppState 
        const jobs = response.data.map(pojo => new Job(pojo))
        AppState.jobs = jobs;
    }

    async deleteJob(jobId) {
        const response = await api.delete(`api/jobs/${jobId}`)
        logger.log('DELETED JOB👷‍♂️', response.data)

        const index = AppState.jobs.findIndex(job => job.id == jobId)
        AppState.jobs.splice(index, 1)


    }

    async createJob(jobData) {
        //create job

        const response = await api.post('api/jobs', jobData)
        logger.log('Created job👷‍♂️', response.data)

        //save to AppState

        const job = new Job(response.data)
        AppState.jobs.unshift(job)



    }
}

export const jobsService = new JobsService()