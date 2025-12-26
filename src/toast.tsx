import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
  toast(message, { type });
};

export const AppToastContainer = () => <ToastContainer position="top-center" autoClose={2000} hideProgressBar />;
