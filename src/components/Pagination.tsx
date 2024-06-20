import React from 'react'

export const Pagination = ({countriesPerPage, totalCountries}:{countriesPerPage:number, totalCountries: number}) => {
    
    const pageNumbers = []

    for(let i = 1; i < Number(totalCountries / countriesPerPage + 1); i++) {
        pageNumbers.push(i)
    }
  
    return (
    <div className='fixed w-screen h-[60px] bottom-0 left-0 bg-slate-200 '>
        <ul className="flex justify-center items-center h-full">
            {
                pageNumbers.map(number => (
                    <li className='p-1 cursor-pointer font-semibold text-slate-800 hover:text-slate-400 active:text-white active:scale-95 transition-all' 
                    key={number}
                    >{number}</li>
                ))
            }
        </ul>
    </div>
  )
}
