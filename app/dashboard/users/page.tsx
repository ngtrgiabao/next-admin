import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import SearchInput from '@/app/ui/dashboard/search-input'
import Pagination from '@/app/ui/dashboard/pagination'

const UsersPage = () => {
  return (
    <div className='bg-card p-5 rounded-lg mt-5'>
      <div className='flex items-center justify-between'>
        <SearchInput placeholder="Search for a user ..." />
        <Link href="/dashboard/users/add">
          <button className='p-2 bg-blue-500 text-white border-none rounded-md cursor-pointer'>Add New</button>
        </Link>
      </div>
      <table className='w-full mt-5'>
        <thead>
          <tr>           
            <td className='p-2'>
              Name
            </td>
            <td className='p-2'>
              Email
            </td>
            <td className='p-2'>
              Created At
            </td>
            <td className='p-2'>
              Role
            </td>
            <td className='p-2'>
              Status
            </td>
            <td className='p-2'>
              Action
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='p-2'>
              <div className='flex items-center gap-2'>
                <Image
                  src="https://i.pinimg.com/564x/27/d1/8b/27d18b690462568a72ed4aeeeeadae64.jpg"
                  alt="yanji"
                  width={40}
                  height={40}
                  className='object-cover rounded-full'
                />
                Yanji
              </div>
            </td>
            <td className='p-2'>yanji@gmail.com</td>
            <td className='p-2'>13.01.2024</td>
            <td className='p-2'>Admin</td>
            <td className='p-2'>active</td>
            <td className='p-2'>
              <div className='flex items-center gap-2'>
                <Link href="/">
                  <button className='py-1 px-2 bg-view text-white border-none rounded-md cursor-pointer'>View</button>
                </Link>
                <button className='py-1 px-2 bg-delete text-white border-none rounded-md cursor-pointer'>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default UsersPage