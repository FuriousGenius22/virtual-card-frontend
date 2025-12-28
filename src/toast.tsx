
import { ToastContainer, toast, type TypeOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react-refresh/only-export-components
export const showToast = (
  message: string,
  type: TypeOptions = 'success'
) => {
  toast(message, { type });
};

export const AppToastContainer = () => (
  <ToastContainer
    position="top-center"
    autoClose={2000}
    hideProgressBar
  />
);