import { IModal } from '@customTypes/modal';
import Image from 'next/image';
import { memo } from 'react';

import style from './modal.module.scss';

import { Portal } from '../Portal';

export const Modal = memo(({ onClose, children }: IModal) => (
  <Portal>
    <div data-cy='modal' className={style.wrapper}>
      <div className={style.content}>
        {children}
        <button data-cy='close-modal' type='button' className={style.close} onClick={onClose}>
          <Image src='/icons/close.svg' alt='close' width={28} height={28} />
        </button>
      </div>
    </div>
  </Portal>
));
