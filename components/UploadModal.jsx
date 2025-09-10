'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, toggleModal } from '../store/modalSlice';
import { CameraIcon } from '@heroicons/react/24/outline';
import Modal from 'react-modal';

export default function UploadModal() {
    const isOpen = useSelector((state) => state.modal.isOpen); 
    const dispatch = useDispatch();
    const [selectedFile, setSelectedFile] = useState(null);

    function addImageToPost(event) {
        const reader = new FileReader();

        if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        }

    }
    const filePickerRef = useRef(null);
  return (
    <div>
      {isOpen &&
        <Modal
         className='max-w-lg w-[90%] p-6 bg-white border-2 border-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md shadow-md'
          isOpen={isOpen}
                  onRequestClose={() => { dispatch(closeModal()); setSelectedFile(null) }}
          ariaHideApp={false}
        >
            <div className='flex flex-col justify-center items-center h-[100%]'>
                {selectedFile ? (
                    <img onClick={()=>setSelectedFile(null)} className='w-full max-h-[250px] object-cover cursor-pointer' src={selectedFile} alt='Selected post'/>
                ) : (
                    <CameraIcon onClick={()=> filePickerRef.current.click()} className='cursor-pointer h-14 bg-red-200 p-2 rounded-full border-2 text-red-500' />   
                )}
                <input
                    hidden
                    type="file"
                    ref={filePickerRef}
                    className='m-4 border-none text-center focus:ring-0 w-full' 
                    onChange={addImageToPost}
                      />
                      
                <input type="text" className='m-4 border-none text-center focus:ring-0 w-full' placeholder='Please enter your caption...' />
                      
                <button disabled className='w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:hover:brightness-100 disabled:cursor-not-allowed'>Upload post</button>
          </div>
        </Modal>
        }
    </div>
  )
}
