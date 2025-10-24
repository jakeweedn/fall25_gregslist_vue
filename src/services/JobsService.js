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
        logger.log('deleting in the service')

    }

    async createJob(jobData) {


    }
}

export const jobsService = new JobsService()