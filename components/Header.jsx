import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div>
          <div className="flex items-center justify-between max-w-6xl">
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
        <div>Right Section</div>
      </div>
    </div>
  )
}
