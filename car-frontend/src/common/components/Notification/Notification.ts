import { toast } from 'react-toastify';

interface NotyProps {
  msg: string;
  timeout?: number;
}

export const successNoty = ({ msg = '', timeout = 5000 }: NotyProps) => {
  return toast.success(msg, {
    autoClose: timeout,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
  });
};

export const errorNoty = ({ msg = '', timeout = 5000 }: NotyProps) => {
  return toast.error(msg, {
    autoClose: timeout,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
