import React from 'react';
import { StyledCreateModalForm } from './createModal.styles';
import {
  setRefresh,
  setRefreshEvent,
} from '../../redux/refreshEvent/refreshEventSlice';
import axios from 'axios';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useAppDispatch } from '../../redux/store';

type FormValues = {
  date: Date;
  available: boolean;
  customer: string;
  name: string;
  weight: string;
};

const CreateModal = () => {
  const dispatch = useAppDispatch();

  // Предустановленые значения для формы создания записи
  const defaultValues = {
    date: new Date(),
    available: false,
  };

  const { register, handleSubmit, control, reset } = useForm<FormValues>({
    defaultValues,
    mode: 'onSubmit',
  });

  // Отправка запраса на созадние записи
  // При успешном удалении – показ уведовмения об создании
  // При ошибке – уведомление об ошибке
  const handleCreate: SubmitHandler<FormValues> = async (data) => {
    try {
      await axios.post(`http://localhost:5000/item`, data);
      reset({
        available: false,
        customer: '',
        date: defaultValues.date,
        name: '',
        weight: '',
      });
      dispatch(setRefresh());
      dispatch(setRefreshEvent({ event: 'create' }));
    } catch (err) {
      dispatch(setRefresh());
      dispatch(setRefreshEvent({ event: 'error' }));
    }
  };

  return (
    <StyledCreateModalForm onSubmit={handleSubmit(handleCreate)}>
      <input
        className='inpt'
        {...register('name', { required: true })}
        placeholder='Name...'
      />
      <input
        className='inpt'
        {...register('weight', {
          required: true,
        })}
        placeholder='Weight...'
      />
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
      <Controller
        control={control}
        name='date'
        render={({ field }) => (
          <ReactDatePicker
            className='inpt'
            placeholderText='Select date'
            onChange={(e) => field.onChange(e)}
            selected={field.value}
          />
        )}
      />
      <input
        className='inpt'
        {...register('customer', { required: true })}
        placeholder='Customer...'
      />
      <input className='submit-btn' value='Add' type='submit' />
    </StyledCreateModalForm>
  );
};

export default CreateModal;
