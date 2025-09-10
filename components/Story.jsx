import React from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'

export default function Story({img, username, isUser}) {
  return (
    <div className='relative group cursor-pointer'>
      <img className='h-15 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer group-hover:scale-110 transition-transform duration-100 ease-out' src={img} alt={username} />
      {isUser && <PlusIcon className='h-6 absolute top-5 left-4 text-white'/>}
          <p className='text-xs w-14 truncate'>{username}</p>
    </div>
  )
}
