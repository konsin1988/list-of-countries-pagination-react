import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ICountries, ICountry, IResponse } from './types/data';
import { Clock } from './components/Clock';
import { Countries } from './components/Countries';
import { Pagination } from './components/Pagination';

function App() {
  const [countries, setCountries] = useState<ICountries>([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage] = useState(10)

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true)
      const res: IResponse = await axios.get('https://restcountries.com/v3.1/all')
      setCountries(res.data)
      setLoading(false)
    }
    getCountries()
    
  }, [])

  const lastCountryIndex = currentPage * countriesPerPage
  const firstCountryIndex = lastCountryIndex - countriesPerPage
  const currentCountries = countries.slice(firstCountryIndex, lastCountryIndex)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <main className= 'w-[100vw] relative bg-slate-200 '>
      <div className='fixed top-4 right-10'><Clock/></div>
      
        <h1 className='text-4xl font-bold text-center pt-10 pb-4'>
            Countries
          </h1>
          <Countries countries={currentCountries} loading={loading}/>
          <Pagination countriesPerPage={countriesPerPage} totalCountries={countries.length} currentPageNumber={currentPage} pagination={paginate}/>
      
    </main>
  );
}

export default App;
