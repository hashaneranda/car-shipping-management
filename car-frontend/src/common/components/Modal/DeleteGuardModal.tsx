import React from 'react';
import Modal from './Modal';

import { PrimaryButton, SecondaryButton } from 'common/components/Button/Button';

interface DeleteGuardModalProps {
  isOpen: boolean;
  handleClose: any;
  successAction: any;
  type: string;
}

function DeleteGuardModal({ isOpen, handleClose, successAction, type }: DeleteGuardModalProps) {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose} showCloseBtn>
      <h1 className='text-2xl font-bold text-center'>Delete {type}</h1>
      <p className='text-sm text-center text-gray-400'>Are you sure you want to delete {type}?</p>

      <div className='flex flex-row justify-center pt-3 '>
        <PrimaryButton onClick={() => successAction()}>Delete</PrimaryButton>

        <SecondaryButton onClick={() => handleClose()}>Close</SecondaryButton>
      </div>
    </Modal>
  );
}

export default DeleteGuardModal;
