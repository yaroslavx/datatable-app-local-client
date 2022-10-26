import React from 'react';
import Filter from '../filter/Filter';
import CreateModal from '../createModal/CreateModal';
import { useEffect, useRef, useState } from 'react';
import { StyledToolbarDiv } from './toolbar.styles';
import { CgOptions } from 'react-icons/cg';
import { HiOutlinePlusSm } from 'react-icons/hi';

const Toolbar: React.FC = () => {
  const [popupOptions, setPopupOptions] = useState<boolean>(false);
  const [popupCreate, setPopupCreate] = useState<boolean>(false);
  const optionRef = useRef<HTMLDivElement>(null);
  const createRef = useRef<HTMLDivElement>(null);

  // Логика закрытия меню кликом вне меню
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as MouseEvent & { path: Node[] };
      if (optionRef.current && !_event.path.includes(optionRef.current)) {
        setPopupOptions(false);
      }
      if (createRef.current && !_event.path.includes(createRef.current)) {
        setPopupCreate(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  // Открытие и закрытие меню поиска кликом по иконке
  const handleOptions = () => {
    setPopupOptions((prev) => !prev);
  };

  // Открытие и закрытие меню создания кликом по иконке
  const handleCreate = () => {
    setPopupCreate((prev) => !prev);
  };

  return (
    <StyledToolbarDiv>
      <div className='container'>
        <div ref={optionRef} className='filter-container'>
          <div
            className={popupOptions ? 'option option-active' : 'option'}
            onClick={() => handleOptions()}
          >
            <CgOptions className='option-btn' />
          </div>
          {popupOptions && <Filter />}
        </div>

        <div ref={createRef} className='create-container'>
          <div
            className={popupCreate ? 'create create-active' : 'create'}
            onClick={() => handleCreate()}
          >
            <HiOutlinePlusSm className='create-btn' />
          </div>
          {popupCreate && <CreateModal />}
        </div>
      </div>
    </StyledToolbarDiv>
  );
};

export default Toolbar;
