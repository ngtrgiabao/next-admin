import React from 'react'
import Card from '../ui/dashboard/card'
import Transactions from '../ui/dashboard/transactions'
import Chart from '../ui/dashboard/chart'
import Rightbar from '../ui/dashboard/right-bar'

export default function Home() {
  return (
    <div className='flex gap-5 mt-5'>
      <div className='flex flex-[3] flex-col gap-5'>
        <div className='flex gap-5 justify-between'>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className='flex-1'>
        <Rightbar />
      </div>
    </div>
  )
}
