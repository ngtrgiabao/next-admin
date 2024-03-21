import React from 'react'
import Image from 'next/image'

const SingleUserPage = () => {
  return (
    <div className='flex gap-12 mt-5'>
      <div className='flex-1 bg-card font-bold p-5 rounded-lg text-soft h-max'>
        <div className='w-full h-60 relative rounded-lg overflow-hidden mb-5'>
          <Image fill src="https://i.pinimg.com/564x/27/d1/8b/27d18b690462568a72ed4aeeeeadae64.jpg" alt="yanji" className='object-cover' />
        </div>
        Yanji
      </div>
      <div className='flex-[3] bg-card p-5 rounded-lg'>
        <form action="" className='flex flex-col'>
          <label className='text-sm'>Username</label>
          <input className='p-2 border-2 border-[#2e374a] bg-primary rounded-md my-2' type='text' name='username' placeholder='Yanji' />
          <label className='text-sm'>Email</label>
          <input className='p-2 border-2 border-[#2e374a] bg-primary rounded-md my-2' type='email' name='email' placeholder='yanji@gmail.com' />
          <label className='text-sm'>Password</label>
          <input className='p-2 border-2 border-[#2e374a] bg-primary rounded-md my-2' type='password' name='password' placeholder='password' />
          <label className='text-sm'>Phone</label>
          <input className='p-2 border-2 border-[#2e374a] bg-primary rounded-md my-2' type='tel' name='phone' placeholder='+12222' />
          <label className='text-sm'>Address</label>
          <input className='p-2 border-2 border-[#2e374a] bg-primary rounded-md my-2' type='text' name='address' placeholder='New York' />
          <label className='text-sm'>Is Admin ?</label>
          <select className='p-2 border-2 border-[#2e374a] rounded-md my-2 bg-primary' name="isAdmin" id="isAdmin">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label className='text-sm'>Is Active ?</label>
          <select className='p-2 border-2 border-[#2e374a] rounded-md my-2 bg-primary' name="isActive" id="isActive">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <button className='w-full p-2 bg-teal-400 text-white cursor-pointer mt-5 border-none rounded-md'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleUserPage