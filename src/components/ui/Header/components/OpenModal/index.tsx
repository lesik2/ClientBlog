'use client';

import style from '@styles/modal/modal.module.scss';
import button from '@styles/ui/button.module.scss';
import { useState } from 'react';
import { Modal } from '@components/Modal';

export default function OpenModal({ btnText }: { btnText: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenModal} type='button' className={button.secondary}>
        {btnText}
      </button>
      {isOpen && (
        <Modal onClose={handleCloseModal}>
          <iframe
            className={style.videoWrapper}
            allowFullScreen
            src='https://www.youtube.com/embed/ZlbHdYMWSOA?si=K-gZ-omumwnOJumc?rel=0;&autoplay=1'
            title='YouTube video player'
            allow='autoplay'
          />
        </Modal>
      )}
    </>
  );
}
