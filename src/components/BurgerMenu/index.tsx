import style from './burgerMenu.module.scss';

export interface IBurgerMenu {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function BurgerMenu({ isOpen, setIsOpen }: IBurgerMenu) {
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <button
      aria-label='burger menu'
      type='button'
      className={`${isOpen ? style.activeWrapper : ''} ${style.burgerWrapper}`}
      onClick={handleClick}
    >
      <div className={`${isOpen ? style.activeLine : ''} ${style.line}`} />
    </button>
  );
}
