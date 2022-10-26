import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Item } from '../../components/table/Table';
import { selectFilter } from '../../redux/filter/filterSelector';
import { selectRefresh } from '../../redux/refreshEvent/refreshSelector';

export const useFetch = () => {
  const [data, setData] = useState([]);
  const { refresh } = useSelector(selectRefresh);
  const { sort, column, logic, query } = useSelector(selectFilter);

  //Запрос массива данных с динамическими параметрами через сервер
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:5000/?q=${query}&c=${column}&l=${logic}`
      );

      // Сортировка данных
      // Для строк используется localeCompare
      // Для дат сравнение timestamp'ов
      // Для чисел обычное стравнение
      sort
        ? setData(
            res.data.sort((a: Item, b: Item) => {
              if (sort.option) {
                switch (sort.sortProperty) {
                  case 'name':
                    return a[sort.sortProperty].localeCompare(
                      b[sort.sortProperty]
                    );
                  case 'customer':
                    return a[sort.sortProperty].localeCompare(
                      b[sort.sortProperty]
                    );
                  case 'weight':
                    return a[sort.sortProperty].localeCompare(
                      b[sort.sortProperty]
                    );
                  case 'date':
                    return (
                      Number(new Date(a[sort.sortProperty])) -
                      Number(new Date(b[sort.sortProperty]))
                    );
                  case 'available':
                    return (
                      Number(a[sort.sortProperty]) -
                      Number(b[sort.sortProperty])
                    );
                  case 'ID':
                    return (
                      Number(a[sort.sortProperty]) -
                      Number(b[sort.sortProperty])
                    );
                }
              } else {
                switch (sort.sortProperty) {
                  case 'name':
                    return b[sort.sortProperty].localeCompare(
                      a[sort.sortProperty]
                    );
                  case 'customer':
                    return b[sort.sortProperty].localeCompare(
                      a[sort.sortProperty]
                    );
                  case 'weight':
                    return b[sort.sortProperty].localeCompare(
                      a[sort.sortProperty]
                    );
                  case 'date':
                    return (
                      Number(new Date(b[sort.sortProperty])) -
                      Number(new Date(a[sort.sortProperty]))
                    );
                  case 'available':
                    return (
                      Number(b[sort.sortProperty]) -
                      Number(a[sort.sortProperty])
                    );
                  case 'ID':
                    return (
                      Number(b[sort.sortProperty]) -
                      Number(a[sort.sortProperty])
                    );
                }
              }
            })
          )
        : setData(res.data);
    };
    if (query.length === 0 || query.length > 0) fetchData();
  }, [query, column, logic, sort, refresh]);

  return data;
};
