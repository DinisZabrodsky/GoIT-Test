import { useEffect, useState } from "react"

import {allCars } from "service/contorler"
import { CardItem } from "../CardItem/CardItem"
import { user } from "service/user"

import css from './Favorit.module.scss'
import { CarModal } from "components/CarModal/CarModal"

// const limitPage = 8
// let page = 1
let modalData = {}

export const Favorite = () => {

    const [carData, setCarData] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {

        dataCars()
        async function dataCars () {
            const data = await allCars()
            setCarData(data)
        }
    }, [])

    const hadeleFavorite = (e) => {
        let id = null
        let favorite = null

        if(e.target.nodeName === "svg") {
            id = Number(e.target.dataset.id)
            favorite =  Number(e.target.dataset.favorite)
        }

        if(e.target.nodeName === "use") {
            id = Number(e.target.parentNode.dataset.id)
            favorite =  Number(e.target.parentNode.dataset.favorite)
        }


        !favorite ? user.setFavorites(id) : user.deleteFavorites(id)
        

        setCarData((prev) => {
            const newObj = prev.map(el => {

                if(el.id === id) {
                    return {...el, favorite: !(el.favorite)}
                }

                return el
            })

            return newObj
        })
    }

    const btnLearn = (e) => {
        const id = Number(e.target.dataset.id)
        const modal = carData.filter(el => el.id === id)

        modalData = modal[0]
        setShowModal(true)
        return
    }

    const handleClosemodal = () => {
        setShowModal(false)
    }

    // const handleLoadMore = () => {
    //     page += 1
    //     const data = DataCars.slice((page * 8 - 8), (page * 8))

    //     setCarData((prev) => {return [...prev, ...data]})
        
    // }

    return <>
        {showModal && <CarModal close={handleClosemodal} data={modalData}/>}

        <ul className={css.list}>
            {carData.length !== 0 && carData.map(Car => {
                if(Car.favorite) {
                    return <CardItem key={Car.id} id={Car.id} make={Car.make} model={Car.model} year={Car.year} img={Car.img} rentalPrice={Car.rentalPrice} favorite={Car.favorite} address={Car.address} rentalCompany={Car.rentalCompany} type={Car.type} accessories={Car.accessories} hadeleFavorite={hadeleFavorite} btnLearn={btnLearn}/>
                }

                return
                
            })}
            
        </ul>

        {/* {(Number(DataCars.length) - (page * limitPage) >= 0) && <button  className={css.buttonLoad} onClick={handleLoadMore}>
            LoadMore
        </button>} */}
    </>
}