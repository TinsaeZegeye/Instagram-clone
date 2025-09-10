'use client'

import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import Miniprofile from './Miniprofile'
import Suggestions from './Suggestions'
import { useSession } from 'next-auth/react' 

export default function Feed() {
  const { data: session } = useSession();
  return (
    <main className={`grid ${session ? 'grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto': 'grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto'}`} >
          <section className='md:col-span-2'>
              {/* stories */}
              <Stories />
            
              {/* posts */}
              <Posts/>
          </section>
          
          <section className='hidden md:inline-grid md:col-span-1'>
              <div className='fixed w-[380px]'>
                  {/* mini profile */}
                  <Miniprofile/>

                  {/* suggestions */}
                  <Suggestions/>
              </div>
          </section>
    </main>
  )
}
