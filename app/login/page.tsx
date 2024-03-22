import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <form action="" className='bg-card p-5 rounded-s-lg w-1/3 h-1/2 flex flex-col justify-center items-center gap-5'>
        <h2 className='text-heading-2 font-bold text-white'>Login</h2>

        <input spellCheck={'false'} type='text' placeholder='username' className='py-2 px-4 border-2 border-[#2e374a] rounded-md text-white w-full bg-primary' />
        <input spellCheck={'false'} type='password' placeholder='password' className='py-2 px-4 border-2 border-[#2e374a] rounded-md text-white w-full bg-primary' />
        <button className='p-2 bg-view border-none text-white cursor-pointer rounded-md w-full'>Login</button>
      </form>
    </div>
  )
}

export default page