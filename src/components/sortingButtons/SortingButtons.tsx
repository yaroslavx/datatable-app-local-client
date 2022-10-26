import React from 'react';
import { StyledSortingBtn } from './sortingButtons.styles';
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../redux/filter/filterSlice';
import {
  FaSortAlphaDown,
  FaSortAlphaDownAlt,
  FaSortNumericDown,
  FaSortNumericDownAlt,
} from 'react-icons/fa';
import { selectFilter } from '../../redux/filter/filterSelector';
import { Sort } from '../../redux/filter/filterTypes';

// Кнопка сортировки строк по возрастанию
export const AscLetters: React.FC<Sort> = ({ sortProperty, option }) => {
  const dispatch = useDispatch();
  const { sort } = useSelector(selectFilter);
  return (
    <StyledSortingBtn>
      <FaSortAlphaDown
        onClick={() => {
          sort?.sortProperty === sortProperty && sort?.option === option
            ? dispatch(setSort({ sortProperty: '', option: true }))
            : dispatch(setSort({ sortProperty: sortProperty, option: option }));
        }}
        className={
          sort?.sortProperty === sortProperty && sort?.option === option
            ? 'sort-opt-pressed'
            : 'sorting-option'
        }
      />
    </StyledSortingBtn>
  );
};

// Кнопка сортировки строк по убыванию
export const DescLetters: React.FC<Sort> = ({ sortProperty, option }) => {
  const dispatch = useDispatch();
  const { sort } = useSelector(selectFilter);
  return (
    <StyledSortingBtn>
      <FaSortAlphaDownAlt
        onClick={() => {
          sort?.sortProperty === sortProperty && sort?.option === option
            ? dispatch(setSort({ sortProperty: '', option: true }))
            : dispatch(setSort({ sortProperty: sortProperty, option: option }));
        }}
        className={
          sort?.sortProperty === sortProperty && sort?.option === option
            ? 'sort-opt-pressed'
            : 'sorting-option'
        }
      />
    </StyledSortingBtn>
  );
};

// Кнопка сортировки чисел по возрастанию
export const AscNums: React.FC<Sort> = ({ sortProperty, option }) => {
  const dispatch = useDispatch();
  const { sort } = useSelector(selectFilter);
  return (
    <StyledSortingBtn>
      <FaSortNumericDown
        onClick={() => {
          sort?.sortProperty === sortProperty && sort?.option === option
            ? dispatch(setSort({ sortProperty: '', option: true }))
            : dispatch(setSort({ sortProperty: sortProperty, option: option }));
        }}
        className={
          sort?.sortProperty === sortProperty && sort?.option === option
            ? 'sort-opt-pressed'
            : 'sorting-option'
        }
      />
    </StyledSortingBtn>
  );
};

// Кнопка сортировки чисел по убыванию
export const DescNums: React.FC<Sort> = ({ sortProperty, option }) => {
  const dispatch = useDispatch();
  const { sort } = useSelector(selectFilter);
  return (
    <StyledSortingBtn>
      <FaSortNumericDownAlt
        onClick={() => {
          sort?.sortProperty === sortProperty && sort?.option === option
            ? dispatch(setSort({ sortProperty: '', option: true }))
            : dispatch(setSort({ sortProperty: sortProperty, option: option }));
        }}
        className={
          sort?.sortProperty === sortProperty && sort?.option === option
            ? 'sort-opt-pressed'
            : 'sorting-option'
        }
      />
    </StyledSortingBtn>
  );
};
