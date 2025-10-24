import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { House } from "@/models/House.js"
import { AppState } from "@/AppState.js"


class HousesService {

    async getHouses() {

        //Get houses
        const response = await api.get('api/houses')
        logger.log('GOT HOUSES🏡', response.data)

        //Save houses into AppState

        const houses = response.data.map(pojo => new House(pojo))
        AppState.houses = houses

    }

    async deleteHouse(houseId) {

        logger.log('Deleting house in the service')
    }

}

export const housesService = new HousesService()