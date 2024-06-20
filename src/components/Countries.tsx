import React from 'react'
import { ICountries, ICountry } from '../types/data'

export const Countries = ( { countries, loading }:{countries: ICountries, loading: boolean}) => {
  return (
    <div className="min-h-screen">
      { loading && <p className='text-center'>Loading</p> }
      <ul className="pb-10">
        { countries.map((country: ICountry, index: number) => (
            <li key={index} className="flex flex-col items-center">
              <span className="p-1 font-bold text-lg">{ country.name.common }</span>
              <img className="w-28" src={country.flags.png} alt="flag" />
            </li>
        ))}
      </ul>
    </div>
  )
}
