"use client"

import React from 'react'
import { usePathname } from "next/navigation"

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className='container'>
      <div className='title'>
        {
          pathname.split("/").pop()
        }
      </div>
    </div>
  )
}

export default Navbar