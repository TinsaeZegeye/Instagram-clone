import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import Miniprofile from './Miniprofile'

export default function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto' >
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
              </div>
          </section>
    </main>
  )
}
