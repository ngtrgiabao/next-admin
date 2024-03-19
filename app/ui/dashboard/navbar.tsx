"use client"

import React from 'react'
import { usePathname } from "next/navigation"
import { Bell, Earth, MessageSquareText, Search } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className='container flex items-center justify-between'>
      <div className='text-[textSoft] font-bold capitalize'>
        {
          pathname.split("/").pop()
        }
      </div>
      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-2 bg-[#2e374a] p-2 rounded-lg'>
          <Search size={18} />
          <input type='text' placeholder='Search...' className='bg-transparent border-none outline-none color-[text]' />
        </div>
        <div className='flex gap-2'>
          <MessageSquareText />
          <Bell />
          <Earth />
        </div>
      </div>
    </div>
  )
}

export default Navbar