import React from 'react';
import { StyledDelUpdModalDiv } from './DelAndUpdModal.styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setRefresh,
  setRefreshEvent,
} from '../../redux/refreshEvent/refreshEventSlice';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ObjectId } from 'bson';

interface DelAndUpdModalProps {
  itemId: ObjectId
}

type FormValues = {
  available: boolean;
  customer: string;
};

const DelAndUpdModal: React.FC<DelAndUpdModalProps> = ({ itemId }) => {
  const dispatch = useDispatch();
  const [visibleUpd, setVisibleUpd] = useState(false);
  const [visibleDel, setVisibleDel] = useState(false);

  // Предустановленые значения для формы измения записи
  const defaultValues = {
    available: false,
  };

  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues,
    mode: 'onSubmit',
  });

  // Отправка запраса на удаление записи
  // При успешном удалении – показ уведовмения об удалении
  // При ошибке – уведомление об ошибке
  const handleDelete = async (id: ObjectId) => {
    try {
      await axios.delete(`http://localhost:5000/item`, { data: { id } });
      dispatch(setRefresh());
      dispatch(setRefreshEvent({ event: 'delete' }));
    } catch (err) {
      dispatch(setRefresh());
      dispatch(setRefreshEvent({ event: 'error' }));
    }
  };

  // Отправка запраса на изменение записи
  // При успешном удалении – показ уведовмения об изменении
  // При ошибке – уведомление об ошибке
  const handleUpdate: SubmitHandler<FormValues> = async (data) => {
    console.log(data.available)
    try {
      const item = await axios.get(`http://localhost:5000/{itemId}`);
      if (data.customer !== '') item.data.customer = data.customer;
      item.data.available = data.available;
      await axios.put(`http://localhost:5000/item`, item.data);
      dispatch(setRefresh());
      dispatch(setRefreshEvent({ event: 'update' }));
    } catch (err) {
      dispatch(setRefresh());
      dispatch(setRefreshEvent({ event: 'error' }));
    }
  };

  // Открытие и закрытие меню изменения записи кликом по иконке
  const openUpdateMenu = () => {
    setVisibleUpd((prev) => !prev);
  };

  // Открытие и закрытие меню удаления записи кликом по иконке
  const openDeleteMenu = () => {
    setVisibleDel((prev) => !prev);
  };

  return (
    <StyledDelUpdModalDiv>
      {visibleUpd && (
        <form className='update-setting' onSubmit={handleSubmit(handleUpdate)}>
          <div className='available-container'>
            <div className='available-inpt'>Available</div>
            <div className='available-btn'>
              <input
                type='checkbox'
                className='inpt'
                {...register('available')}
              />
            </div>
          </div>
          <input
            className='inpt'
            {...register('customer')}
            placeholder='Customer...'
          />
          <input className='update-btn' value='Update' type='submit' />
        </form>
      )}
      <button
        className={visibleUpd ? 'close-update-btn' : 'show-update-btn'}
        onClick={openUpdateMenu}
      >
        {visibleUpd ? 'Close update settings' : 'Show update settings'}
      </button>
      {visibleDel && (
        <div className='delete-setting'>
          <button className='sure-btn' onClick={() => handleDelete(itemId)}>
            I am sure
          </button>
          <button className='cancel-btn' onClick={openDeleteMenu}>
            Cancel
          </button>
        </div>
      )}
      <button
        className={visibleDel ? 'close-delete-btn' : 'show-delete-btn'}
        onClick={openDeleteMenu}
      >
        {visibleDel ? 'Are you sure?' : 'Delete'}
      </button>
    </StyledDelUpdModalDiv>
  );
};

export default DelAndUpdModal;
