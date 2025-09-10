'use client'

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, toggleModal } from '../store/modalSlice';
import Modal from 'react-modal';

export default function UploadModal() {
    const isOpen = useSelector((state) => state.modal.isOpen); 
    const dispatch = useDispatch();
  
  return (
    <div>
      {isOpen &&
        <Modal
         className='max-w-lg w-[90%] h-[300px] bg-white border-2 border-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md shadow-md'
          isOpen={isOpen}
          onRequestClose={() => dispatch(closeModal())}
          ariaHideApp={false}
        >
          <div className='flex flex-col justify-center items-center h-[100%]'>
            <h1>Modal is open</h1>
          </div>
        </Modal>
        }
    </div>
  )
}
