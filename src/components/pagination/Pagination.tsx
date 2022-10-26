import React from 'react';
import classnames from 'classnames';
import { StyledPaginationDiv } from './pagination.styles';
import { DOTS, usePagination } from '../../hooks/pagination/usePagination';

interface PaginationProps {
  onPageChange: (el: number) => void
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
  className: string
}

export const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // Если данных меньше чем "элементов на страницу" то не рендерим компонент пагинации
  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  // Следующая страница
  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  // Предыдущая страница
  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  // Последняя страница
  let lastPage
  if (paginationRange) { lastPage = paginationRange[paginationRange.length - 1] };


  return (
    <StyledPaginationDiv>
      <ul
        className={classnames('pagination-container', {
          [className]: className,
        })}
      >
        {/* Левая стрелка для навигации */}
        <li
          className={classnames('pagination-item', {
            disabled: currentPage === 1,
          })}
          onClick={onPrevious}
        >
          <div className='arrow left' />
        </li>
        {paginationRange && paginationRange.map((pageNumber) => {
          // Троеточие для особо большого количества страниц
          if (pageNumber === DOTS) {
            return (
              <li key={pageNumber} className='pagination-item dots'>
                &#8230;
              </li>
            );
          }

          // Цифра страницы
          return (
            <li
              key={pageNumber}
              className={classnames('pagination-item', {
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange(Number(pageNumber))}
            >
              {pageNumber}
            </li>
          );
        })}
        {/* Правая стрелка для навигации */}
        <li
          className={classnames('pagination-item', {
            disabled: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          <div className='arrow right' />
        </li>
      </ul>
    </StyledPaginationDiv>
  );
};
