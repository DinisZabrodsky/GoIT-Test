import { getCars } from '../api/getCars' 
import {user} from './user'

export let DataCars = []

export async function allCars () {
    const data = await getCars()
    const filterData = user.getFavorites()

   const Data = data.map((el) => {
        const favoriteValue = filterData.includes(el.id) ? true : false
        el.favorite = favoriteValue
        return el
    })

    DataCars = Data
    return Data

}

export async function FavoritesCars () {
    if(DataCars.length === 0) {
        allCars()
    }

    const FavoritesData = DataCars.filter(el => el.favorite === true)
    return FavoritesData
}