import React from 'react'
import { Search } from 'lucide-react'

interface Props {
  placeholder: string
}

const SearchInput = ({
  placeholder
}: Props) => {
  return (
    <div className='flex items-center gap-2 bg-[#2e374a] p-2 rounded-lg w-max'>
      <Search size={18} />
      <input type='text' placeholder='Search...' className='bg-transparent border-none outline-none color-[text]' />
    </div>
  )
}

export default SearchInput