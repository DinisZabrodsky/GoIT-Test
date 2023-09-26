import axios from "axios";


export async function getCars () {
    const {data} = await axios(`https://65054d11ef808d3c66efe3a3.mockapi.io/cars`)
    return data
}