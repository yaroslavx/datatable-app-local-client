import React from 'react';
import { StyledFilterModalDiv } from './filterModal.styles';
import { useCallback, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { setQuery, setColumn, setLogic } from '../../redux/filter/filterSlice';
import debounce from 'lodash.debounce';
import { FaGreaterThan, FaLessThan, FaEquals } from 'react-icons/fa';
import { selectFilter } from '../../redux/filter/filterSelector';
import { useAppDispatch } from '../../redux/store';

const FilterModal = () => {
  const dispatch = useAppDispatch();
  const [, setValue] = useState('');
  const { column, logic, query } = useSelector(selectFilter);
  const inputRef = useRef(null);

  // Возможность насткройки delay'я на строку поиска
  const updateInput = useCallback(
    debounce((input) => {
      dispatch(setQuery({ query: input }));
    }, 0),
    []
  );

  // Управление вводом
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateInput(event.target.value);
  };

  // Отправление в store значений поиска колонки имени
  const handleNameColumn = () => {
    dispatch(setColumn({ column: 'name' }));
    dispatch(setLogic({ logic: 'include' }));
    dispatch(setQuery({ query: '' }));
  };

  // Отправление в store значений поиска колонки заказчика
  const handleCustomerColumn = () => {
    dispatch(setColumn({ column: 'customer' }));
    dispatch(setLogic({ logic: 'include' }));
    dispatch(setQuery({ query: '' }));
  };

  // Отправление в store значений поиска колонки веса
  const handleWeightColumn = () => {
    dispatch(setColumn({ column: 'weight' }));
    dispatch(setLogic({ logic: 'include' }));
    dispatch(setQuery({ query: '' }));
  };

  // Отправление в store значений поиска колонки ID
  const handleIdColumn = () => {
    dispatch(setColumn({ column: 'ID' }));
    dispatch(setQuery({ query: '' }));
  };

  return (
    <StyledFilterModalDiv>
      <input
        ref={inputRef}
        className='search'
        placeholder={
          column === 'name' || column === 'customer' || column === 'weight'
            ? 'Search...'
            : 'Value...'
        }
        value={query}
        onChange={handleInput}
      />
      <div className='option-container'>
        <div className='options-column'>
          <div
            className={column === 'name' ? 'pressed' : 'option-column'}
            onClick={handleNameColumn}
          >
            Name
          </div>
          <div
            className={column === 'customer' ? 'pressed' : 'option-column'}
            onClick={handleCustomerColumn}
          >
            Customer
          </div>
          <div
            className={column === 'weight' ? 'pressed' : 'option-column'}
            onClick={handleWeightColumn}
          >
            Weight
          </div>
          <div
            className={column === 'ID' ? 'pressed' : 'option-column'}
            onClick={handleIdColumn}
          >
            ID
          </div>
        </div>
        <div className='options-logic'>
          {column !== 'ID' && (
            <div
              onClick={() => dispatch(setLogic({ logic: 'include' }))}
              className={
                logic === 'include' ||
                  column === 'name' ||
                  column === 'customer' ||
                  column === 'weight'
                  ? 'pressed'
                  : 'option-logic'
              }
            >
              include
            </div>
          )}

          {column === 'ID' && (
            <div
              onClick={() => dispatch(setLogic({ logic: 'less' }))}
              className={logic === 'less' ? 'pressed' : 'option-logic'}
            >
              <FaLessThan />
            </div>
          )}
          {column === 'ID' && (
            <div
              onClick={() => dispatch(setLogic({ logic: 'equal' }))}
              className={logic === 'equal' ? 'pressed' : 'option-logic'}
            >
              <FaEquals />
            </div>
          )}
          {column === 'ID' && (
            <div
              onClick={() => dispatch(setLogic({ logic: 'greater' }))}
              className={logic === 'greater' ? 'pressed' : 'option-logic'}
            >
              <FaGreaterThan />
            </div>
          )}
        </div>
      </div>
    </StyledFilterModalDiv>
  );
};

export default FilterModal;
