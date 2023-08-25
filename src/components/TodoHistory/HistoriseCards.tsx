import React from 'react'
import HistoriseCard from './HistoriseCard'

export const HistoriseCards = () => {
  return (
    <div className=''>
    <ul className='grid grid-cols-2 gap-4'>
      <li>
        <HistoriseCard />
      </li>
    </ul>
  </div>
  )
}
