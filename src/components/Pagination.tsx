import React from 'react'

export const Pagination = ({countriesPerPage, totalCountries, currentPageNumber, pagination}:{countriesPerPage:number, totalCountries: number, currentPageNumber: number, pagination: Function}) => {
    
    const pageNumbers = []

    for(let i = 1; i < Number(totalCountries / countriesPerPage + 1); i++) {
        pageNumbers.push(i)
    }

    return (
    <div className='fixed w-screen h-[100px] bottom-0 left-0 bg-slate-200 select-none'>
        <ul className="flex justify-center items-center h-full">
            {
                pageNumbers.map(number => (
                    <li className={`p-1 cursor-pointer font-semibold hover:text-slate-400 active:text-white active:scale-95 transition-all ${currentPageNumber === number ? 'text-slate-400' : 'text-slate-800'}`} 
                    key={number}
                    onClick={() => pagination(number)}
                    >{number}</li>
                ))
            }
        </ul>
        <div className='fixed bottom-0 left-0 w-screen flex justify-center'>
            <button 
                className='my-3 mx-2 font-semibold hover:text-slate-500'
                onClick={() => {
                    pagination((currentPageNumber - 1) ? currentPageNumber - 1 : currentPageNumber )
                }}
                >{'<'}Prev</button>
            <button 
                className='my-3 mx-2 font-semibold hover:text-slate-500'
                onClick={() => pagination((totalCountries / countriesPerPage - currentPageNumber) ? currentPageNumber + 1 : (currentPageNumber)) }
            >Next{">"}</button>
        </div>
    </div>
  )
}
