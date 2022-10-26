import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { StyledTableDiv } from './table.styles';
import { Pagination } from '../pagination/Pagination';
import DelAndUpdModal from '../delAndUpdModal/DelAndUpdModal';
import {
  AscLetters,
  AscNums,
  DescLetters,
  DescNums,
} from '../sortingButtons/SortingButtons';
import { HiDotsHorizontal } from 'react-icons/hi';
import { ObjectId } from 'bson'

// Количество элементов на страницу
const PageSize = 5;

export type Item = {
  _id: ObjectId
  ID: number
  name: string
  weight: string
  available: boolean
  date: Date
  customer: string
}

interface TableProps {
  data: Item[]
}

type TimeOtions = {
  year: "numeric" | "2-digit" | undefined;
  month: "numeric" | "2-digit" | undefined;
  day: "numeric" | "2-digit" | undefined;
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [popupId, setPopupId] = useState<number>(-1);

  // Срез данных для отображения на странице
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    if (data.length < PageSize) {
      return data.slice(0, 10);
    }
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  // При изменении фильтрации, устанавливается первая страница
  useEffect(() => {
    setCurrentPage(1);
    setPopupId(-1);
  }, [data]);

  // Открытие и закрытие меню изменения и удаления
  const handleOptions = (ID: number) => {
    if (popupId !== ID && popupId !== -1) {
      setPopupId(ID);
      return;
    }
    if (popupId !== -1) {
      setPopupId(-1);
      return;
    }
    setPopupId(ID);
  };

  // Отображения даты в нужном формате
  const timeOptions: TimeOtions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  return (
    <StyledTableDiv>
      <table>
        <tbody>
          <tr>
            <th>
              <div className='th-container'>
                ID{' '}
                <div className='sorting-container'>
                  <span>
                    <AscNums sortProperty='ID' option={true} />
                  </span>{' '}
                  <span>
                    <DescNums sortProperty='ID' option={false} />
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div className='th-container'>
                Name{' '}
                <div className='sorting-container'>
                  <span>
                    <AscLetters sortProperty='name' option={true} />
                  </span>{' '}
                  <span>
                    <DescLetters sortProperty='name' option={false} />
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div className='th-container'>
                Weight{' '}
                <div className='sorting-container'>
                  <span>
                    <AscNums sortProperty='weight' option={true} />
                  </span>{' '}
                  <span>
                    <DescNums sortProperty='weight' option={false} />
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div className='th-container'>
                Date{' '}
                <div className='sorting-container'>
                  <span>
                    <AscNums sortProperty='date' option={true} />
                  </span>{' '}
                  <span>
                    <DescNums sortProperty='date' option={false} />
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div className='th-container'>
                Available{' '}
                <div className='sorting-container'>
                  <span>
                    <AscNums sortProperty='available' option={true} />
                  </span>{' '}
                  <span>
                    <DescNums sortProperty='available' option={false} />
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div className='th-container'>
                Customer{' '}
                <div className='sorting-container'>
                  <span>
                    <AscLetters sortProperty='customer' option={true} />
                  </span>{' '}
                  <span>
                    <DescLetters sortProperty='customer' option={false} />
                  </span>
                </div>
              </div>
            </th>
            <td className={` ${'blank-div'}`}>
              <div>
                <HiDotsHorizontal className={` ${'blank-btn'}`} />
              </div>
            </td>
          </tr>
          {currentTableData.map((item) => (
            <tr key={item.ID}>
              <td>{item.ID}</td>
              <td>{item.name}</td>
              <td>{item.weight}</td>

              <td>
                {new Intl.DateTimeFormat('default', timeOptions).format(
                  new Date(item.date)
                )}
              </td>
              <td>{item.available ? 'Available' : 'Unavailable'}</td>
              <td>{item.customer}</td>
              <td
                className={` ${popupId === item.ID ? 'del-upd-active' : 'del-upd'
                  }`}
              >
                <div onClick={() => handleOptions(item.ID)}>
                  <HiDotsHorizontal
                    className={` ${popupId === item.ID ? 'del-upd-btn-active' : 'del-upd-btn'
                      }`}
                  />
                </div>
                {popupId === item.ID && <DelAndUpdModal itemId={(item._id)} />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        className='pagination-bar'
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </StyledTableDiv>
  );
};

export default Table;
