import React, { Fragment } from 'react';
import { Dialog, DialogPanel, Transition } from '@headlessui/react';
import { MdClose } from 'react-icons/md';

interface ModalComponentProps {
  isOpen: boolean;
  handleClose: any;
  children: React.ReactNode | React.ReactNode[];
  header?: React.ReactNode | React.ReactNode[];
  footer?: React.ReactNode | React.ReactNode[];
  showCloseBtn?: boolean;
}

/**
 *Modal Component
 *
 * @param {*} {
 *   children - modal body,
 *   open = false - modal open status,
 *   handleClose = () => {} - function to close modal,
 *   showCloseBtn = false - show default close button,
 *   ...props
 * }
 * @returns Modal Component
 */
const Modal = ({ isOpen, handleClose, children, showCloseBtn = false, header, footer, ...props }: ModalComponentProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-100' onClose={() => handleClose()}>
        <Transition
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-full p-4 text-center'>
            <Transition
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <DialogPanel className='flex flex-col items-center justify-center w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                <div className='flex flex-col gap-4 bg-white px-10 py-16 max-h-[95vh] rounded-lg   overflow-hidden justify-center'>
                  <div className='flex flex-row-reverse'>
                    {showCloseBtn && (
                      <div onClick={handleClose} className='w-8 cursor-pointer'>
                        <MdClose size={20} />
                      </div>
                    )}
                  </div>
                  {header && header}
                  {children}
                  {footer && footer}
                </div>
              </DialogPanel>
            </Transition>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
