import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
      <div className="flex items-center justify-between max-w-6xl">
          {/* left section */}
              <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
                  <Image
                      src='/instagramLogosm.png'
                      layout='fill'
                      className='object-contain'
                      alt='instagram Logo'
                  />
              </div>
              <div className="h-24 w-10 relative lg:hidden cursor-pointer">
                  <Image
                      src='/instagramLogo.jpg'
                      layout='fill'
                      className='object-contain'
                      alt='instagram Logo'
                  />
          </div>
          
          {/* middle section */}
          <div className='relative mt-1'>
              <div className='absolute top-2 left-2'> 
                  <MagnifyingGlassIcon className= 'h-5 text-gray'/>
              </div>
              <input type="text" placeholder='search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md' />
          </div>
        <div>Right Section</div>
      </div>
  )
}
