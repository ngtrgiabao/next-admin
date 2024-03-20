import React from 'react'

const AddProductPage = () => {
  return (
    <div className='bg-card p-5 rounded-lg mt-5'>
      <form action="" className='flex flex-wrap justify-between'>
        <input className='p-4 w-2/5 bg-transparent text-soft border-2 border-[#2e374a] rounded-sm mb-7' type='text' placeholder='title' name="title" required />
        <select name='cat' id='cat' className='p-4 w-2/5 bg-transparent text-soft border-2 border-[#2e374a] rounded-sm mb-7'>
          <option value="general">Choose a category</option>
          <option value="kitchen">kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input className='p-4 w-2/5 bg-transparent text-soft border-2 border-[#2e374a] rounded-sm mb-7' type='number' placeholder='price' name='price' />
        <input className='p-4 w-2/5 bg-transparent text-soft border-2 border-[#2e374a] rounded-sm mb-7' type='number' placeholder='stock' name='stock' />
        <input className='p-4 w-2/5 bg-transparent text-soft border-2 border-[#2e374a] rounded-sm mb-7' type='text' placeholder='color' name='color' />
        <input className='p-4 w-2/5 bg-transparent text-soft border-2 border-[#2e374a] rounded-sm mb-7' type='text' placeholder='size' name='size' />
        <textarea
          name='desc'
          id='desc'
          rows={3}
          placeholder='description'
          className='p-4 w-full bg-transparent text-soft border-2 border-[#2e374a] rounded-sm mb-7'
        />
        <button type='submit' className='w-full p-4 bg-view text-soft rounded-sm cursor-pointer'>Submit</button>
      </form>
    </div>
  )
}

export default AddProductPage