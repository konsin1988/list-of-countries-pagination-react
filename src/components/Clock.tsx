import React, { useState } from 'react'


class GetClock {
    hours: number;
    minutes: number;
    seconds: number;
    constructor(date: Date) {
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
    }
}


export const Clock = () => {


    const date = new GetClock(new Date)
    const [clock, setClock] = useState(date)

    setTimeout(() => {
        setClock(date)
    }, 1000)


  

    return (
    <div className='text-lg font-mono text-gray-600'>
        <span >{ clock.hours < 10 ? '0' + clock.hours : clock.hours }:</span>
        <span>{ clock.minutes < 10 ? '0' + clock.minutes : clock.minutes }:</span>
        <span>{ clock.seconds < 10 ? '0' + clock.seconds : clock.seconds }</span>
    </div>
  )
}
