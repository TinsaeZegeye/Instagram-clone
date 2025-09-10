import React from 'react'
import { useSession, signOut } from 'next-auth/react'

export default function Miniprofile() {
  const { data: session } = useSession();
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
          <img className='h-16 rounded-full border p-[2px]' src={session?.user.image} alt="User-Profile-Image" />
          
          <div className='flex-1 ml-4'>
              <h2 className='font-bold'>{session?.user.username}</h2>
              <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
          </div>

          <button onClick={signOut} className='text-blue-400 text-sm font-semibold'>Sign out</button>
    </div>
  )
}
