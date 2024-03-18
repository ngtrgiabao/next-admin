import React from 'react'
import { HandCoins, CircleUser, LayoutDashboard, Package, BriefcaseBusiness, AreaChart, Users, Bolt, CircleHelp } from 'lucide-react'

import MenuLink from './_components/menu-link'
import Image from 'next/image'

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <LayoutDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <CircleUser />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <Package />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <HandCoins />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <BriefcaseBusiness />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <AreaChart />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <Users />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <Bolt />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <CircleHelp />,
      },
    ],
  },
]

const Sidebar = () => {
  return (
    <div className='container flex flex-col'>
      <div className='flex items-center gap-5 mb-5'>
        <Image src="https://i.pinimg.com/564x/27/d1/8b/27d18b690462568a72ed4aeeeeadae64.jpg" width={50} height={50} alt='yanji' className='rounded-full object-cover' />
        <div className='flex flex-col'>
          <span className='font-bold'>Yanji</span>
          <span className='text-sm text-soft font-light'>Web Developer</span>
        </div>
      </div>
      <ul className='space-y-4'>
        {
          menuItems.map((menu, idx) => (
            <li key={idx} className='space-y-2'>
              <span>
                {menu.title}
              </span>
              {
                menu.list.map((item, idx) => (
                  <MenuLink key={idx} item={item} />
                ))
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Sidebar