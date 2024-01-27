'use client';

import button from '@styles/ui/button.module.scss';
import { memo, useCallback, useState } from 'react';
import { Modal } from '@components/Modal';

import style from './openModal.module.scss';

const OpenModal = memo(({ btnText }: { btnText: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <button data-cy='open-modal' onClick={handleOpenModal} type='button' className={button.secondary}>
        {btnText}
      </button>
      {isOpen && (
        <Modal onClose={handleCloseModal}>
          <iframe
            className={style.videoWrapper}
            allowFullScreen
            src='https://www.youtube.com/embed/ZlbHdYMWSOA?si=K-gZ-omumwnOJumc&rel=0;&autoplay=1'
            title='How to write a blog posts for beginners'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          />
        </Modal>
      )}
    </>
  );
});

export default OpenModal;
