import React from 'react'
import Image from 'next/image'

const Transactions = () => {
  return (
    <div className='bg-card p-5 rounded-lg'>
      <h2 className='mb-5 font-light text-soft'>Latest Transactions</h2>
      <table className='w-full'>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='p-2'>
              <div className='flex items-center gap-2'>
                <Image
                  src="https://i.pinimg.com/564x/27/d1/8b/27d18b690462568a72ed4aeeeeadae64.jpg"
                  alt='yanji'
                  width={40}
                  height={40}
                  className='object-cover rounded-full'
                />
                Yanji
              </div>
            </td>
            <td className='p-2'>
              <span className='rounded-md p-2 text-sm text-white bg-pending'>
                Pending
              </span>
            </td>
            <td className='p-2'>
              14.02.2024
            </td>
            <td className='p-2'>
              $3.200
            </td>
          </tr>
          <tr>
            <td className='p-2'>
              <div className='flex items-center gap-2'>
                <Image
                  src="https://i.pinimg.com/564x/27/d1/8b/27d18b690462568a72ed4aeeeeadae64.jpg"
                  alt='yanji'
                  width={40}
                  height={40}
                  className='object-cover rounded-full'
                />
                Yanji
              </div>
            </td>
            <td className='p-2'>
              <span className='rounded-md p-2 text-sm text-white bg-done'>
                Done
              </span>
            </td>
            <td className='p-2'>
              14.02.2024
            </td>
            <td className='p-2'>
              $3.200
            </td>
          </tr>
          <tr>
            <td className='p-2'>
              <div className='flex items-center gap-2'>
                <Image
                  src="https://i.pinimg.com/564x/27/d1/8b/27d18b690462568a72ed4aeeeeadae64.jpg"
                  alt='yanji'
                  width={40}
                  height={40}
                  className='object-cover rounded-full'
                />
                Yanji
              </div>
            </td>
            <td className='p-2'>
              <span className='rounded-md p-2 text-sm text-white bg-cancelled'>
                Cancelled
              </span>
            </td>
            <td className='p-2'>
              14.02.2024
            </td>
            <td className='p-2'>
              $3.200
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions