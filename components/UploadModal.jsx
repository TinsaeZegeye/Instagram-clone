'use client'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../store/modalSlice';

export default function UploadModal() {
    const isOpen = useSelector((state) => state.modal.isOpen); 
    const dispatch = useDispatch();
  return (
    <div>
          Upload Modal
          { isOpen && <h1>Modal is open</h1>}
    </div>
  )
}
