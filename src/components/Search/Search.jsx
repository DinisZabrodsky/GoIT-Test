import { useState } from 'react';
import Selector from 'react-select';

import css from './Search.module.scss'

const DataCars = [
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Mercedes-Benz",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Mercedes-Benz",
  "Chrysler",
  "Kia",
  "Land"
]
const optionsCars = DataCars.map(el => {return { value: el, label: el }})

const DataPrice = [
  '10',
  '20',
  '30',
  '40',
  '50',
  '60',
  '70',
  '80',
  '90',
  '100',
]
const optionsPrice = DataPrice.map(el => {return { value: el, label: el }})

export const Search = () => {
    const [modelOption, setModelOption] = useState({value: null, label: 'Enter the text'})
    const [priceOption, setPriceOption] = useState({value: null, label: 'To $'})

    return <>
      <form action="search" className={css.form}>
        <label>
        Car brand
          <Selector
            className={css.selectorOne}
            defaultValue={modelOption}
            onChange={setModelOption}
            options={optionsCars}
            
          />
        </label>

        <label>
          Price/ 1 hour
          <Selector
            className={css.selectorTwo}
            defaultValue={priceOption}
            options={optionsPrice}
            onChange={setPriceOption}
          />
        </label>
    

        <label htmlFor='СarMileage' className={css.carMileage}>
          Сar mileage / km

          <div>
            <input type="text" name="from" id="СarMileage" defaultValue='From ' />
            <input type="text" name="to" id="СarMileage" defaultValue='To '  />
          </div>
        </label>

        <button className={css.searchButton}>
          Search
        </button>
      </form>
    </>
}

