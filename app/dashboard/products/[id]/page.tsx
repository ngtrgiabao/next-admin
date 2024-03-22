import React from 'react'
import Image from 'next/image'

const SingleProductPage = () => {
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
          <label className='text-sm'>Title</label>
          <input className='p-2 border-2 border-[#2e374a] bg-primary rounded-md my-2' type='text' name='text' placeholder='new product' />

          <label className='text-sm mt-2'>Price</label>
          <input className='p-2 border-2 border-[#2e374a] bg-primary rounded-md my-2' type='number' name='price' placeholder='24.99' />

          <label className='text-sm mt-2'>Stock</label>
          <input className='p-2 border-2 border-[#2e374a] bg-primary rounded-md my-2' type='number' name='stock' placeholder='12' />

          <label className='text-sm mt-2'>Color</label>
          <input className='p-2 border-2 border-[#2e374a] bg-primary rounded-md my-2' type='text' name='color' placeholder='red' />

          <label className='text-sm mt-2'>Color</label>
          <input className='p-2 border-2 border-[#2e374a] bg-primary rounded-md my-2' type='text' name='size' placeholder='large' />

          <label className='text-sm mt-2'>Cat</label>
          <select className='p-2 border-2 border-[#2e374a] rounded-md my-2 bg-primary' name="isActive" id="isActive">
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computers</option>
          </select>

          <label className='text-sm mt-2'>Description</label>
          <textarea name='desc' id="" cols={30} rows={10} className='my-2 bg-primary p-2 border-2 border-[#2e374a] rounded-md' placeholder='description'></textarea>

          <button className='w-full p-2 bg-teal-400 text-white cursor-pointer mt-5 border-none rounded-md'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleProductPage