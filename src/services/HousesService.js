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
        const response = await api.delete(`api/houses/${houseId}`)
        logger.log('DELETED HOUSE', response.data)

        const index = AppState.houses.findIndex(house => house.id == houseId)
        AppState.houses.splice(index, 1)
        //Am I not allowed to delete a house I didn't create?-correct 
    }

    async createHouse(houseData) {

        //create house 
        const response = await api.post('api/houses', houseData)
        logger.log('CREATED HOUSE🏡', response.data)

        //save to AppState
        const house = new House(response.data)
        AppState.houses.push(house)
        //unshift adds to beginning of array! 
    }

}

export const housesService = new HousesService()