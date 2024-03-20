"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface MenuLinkProps {
  item: {
    title: string
    path: string
    icon: React.ReactElement
  }
}

const MenuLink = ({ item }: MenuLinkProps) => {
  const pathname = usePathname();

  return (
    <Link href={item.path} className={`flex items-center p-2 hover:bg-slate-800 rounded-md transition-all sticky top-10 gap-2 ${pathname === item.path ? 'bg-slate-800' : ''}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink;