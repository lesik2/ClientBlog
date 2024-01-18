import { IModal } from '@customTypes/modal';
import Image from 'next/image';
import style from '@styles/modal/modal.module.scss';

import { Portal } from '../Portal';

export function Modal({ onClose, children }: IModal) {
  return (
    <Portal>
      <div className={style.wrapper}>
        <div className={style.content}>
          {children}
          <button type='button' className={style.close} onClick={onClose}>
            <Image src='/icons/close.svg' alt='close' width={28} height={28} />
          </button>
        </div>
      </div>
    </Portal>
  );
}
