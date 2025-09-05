import React from 'react'

export default function Miniprofile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
          <img className='h-16 rounded-full border p-[2px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFIO8i8i3D60705OwMtBDweKC3aTIkThlqQw&s" alt="User-Profile-Image" />
          
          <div className='flex-1 ml-4'>
              <h2 className='font-bold'>Tinsae Zegeye</h2>
              <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
          </div>

          <button className='text-blue-400 text-sm font-semibold'>Sign out</button>
    </div>
  )
}
