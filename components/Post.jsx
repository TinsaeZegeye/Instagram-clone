import React from 'react'
import { EllipsisHorizontalIcon, HeartIcon, ChatBubbleLeftEllipsisIcon , BookmarkIcon, FaceSmileIcon  } from "@heroicons/react/24/outline"

export default function Post({img, userImg, username, caption, id}) {
  return (
    <div className=' bg-white my-7 border-gray-300 rounded-md'>
          {/* post header */}

          <div className='flex items-center p-5'>
              <img className='h-12 rounded-full object-cover border p-1 mr-3' src={userImg} alt={username} />
              <p className='font-bold flex-1'>{username}</p>
              <EllipsisHorizontalIcon className='h-5'/>
          </div>

          {/* Post */}
          <img className='object-cover w-full' src={img} alt="Users post" />
          
          {/* Post buttons */}

          <div className='flex justify-between px-4 pt-4'>
              <div className='flex items-center space-x-4'>
                  <HeartIcon className='btn'/>
                  <ChatBubbleLeftEllipsisIcon  className='btn'/>
              </div>
              <BookmarkIcon className='btn' />
          </div>

          {/* Post comment */}
          <p className='p-5 truncate'><span className='font-bold mr-2'>{username}</span>{caption}</p>

          {/* Post Input box */}
          
          <form className='flex items-center p-4 FaceSmileIcon space-x-4'>
              <FaceSmileIcon className='h-7' />
              <input className='border-none flex-1 focus:ring-0 rounded-md bg-gray-100' type="text" placeholder='Enter your comment...' />
              <button className='text-blue-400 font-bold'>Post</button>
          </form>
    </div>
  )
}
