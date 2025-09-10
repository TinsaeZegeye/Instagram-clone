'use client'

import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../store/modalSlice';


export default function Header() {

    const { data: session } = useSession();
    const isOpen = useSelector((state) => state.modal.isOpen); 
    const dispatch = useDispatch();

    return (
      <div className='shadow-sm border-b-gray-400 sticky top-0 bg-white z-30'>
            <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
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

            {/* right section */}
            <div className='flex space-x-4 items-center'>
                    <HomeIcon className='h-6 hover:scale-125 transition-transform duration-200 ease-out cursor-pointer hidden md:inline-flex' />
                    
                    {session ? (
                        <>
                            <PlusCircleIcon onClick={()=> dispatch(toggleModal())} className='h-6 hover:scale-125 transition-transform duration-200 ease-out cursor-pointer' />
                            <img onClick={signOut} src={session.user.image} alt="user-image" className='h-10 rounded-full cursor-pointer' />
                        </>
                    ) : (
                            <button onClick={signIn}>Sign in</button>
                    )}
            </div>
        </div>
      </div>
      
  )
}
