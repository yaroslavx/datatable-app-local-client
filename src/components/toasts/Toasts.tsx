import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectRefresh } from '../../redux/refreshEvent/refreshSelector';

export const Toasts = () => {
  // Факт события и названия события для показа уведомлений
  const { event, refresh } = useSelector(selectRefresh);

  useEffect(() => {
    switch (event) {
      // Уведомления о изменении полей записи
      case 'update':
        toast.success('Item Updated!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          style: { backgroundColor: '#7eaa71', borderRadius: '10px' },
        });
        break;
      // Уведомления о удалении записи
      case 'delete':
        toast.info('Item Deleted!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          style: { backgroundColor: 'salmon', borderRadius: '10px' },
        });
        break;
      // Уведомления о создании записи
      case 'create':
        toast.success('Item Created!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          style: { backgroundColor: '#7eaa71', borderRadius: '10px' },
        });
        break;
      // Уведомления об ошибке
      case 'error':
        toast.success('Something went wrong...', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          style: { backgroundColor: 'red', borderRadius: '10px' },
        });
        break;
      default:
        break;
    }
  }, [refresh, event]);
  return <ToastContainer />;
};
