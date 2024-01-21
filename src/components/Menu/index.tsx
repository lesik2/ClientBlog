'use client';

import style from './menu.module.scss';


export interface IMenu {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


export function Menu({ children, isOpen, setIsOpen }: IMenu) {
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div onClick={handleCloseMenu} className={`${isOpen?style.activeWrapper:''} ${style.wrapperMenu}`} >
      <div onClick={handleClick} className={`${isOpen?style.activeContent:''} ${style.content}`} >
        {children}
      </div>
    </div>
  );
}

export default Menu;
