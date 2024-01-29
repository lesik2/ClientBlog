import { IPortal } from '@customTypes/modal';
import { useState } from 'react';
import ReactDOM from 'react-dom';

import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';

export const Portal = ({ children }: IPortal) => {
  const [modalContainer] = useState(document.createElement('div'));

  useIsomorphicLayoutEffect(() => {
    let modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
      const tempEl = document.createElement('div');
      tempEl.id = 'modal-root';
      document.body.append(tempEl);
      modalRoot = tempEl;
    }

    modalRoot.appendChild(modalContainer);
  }, [modalContainer]);

  return ReactDOM.createPortal(children, modalContainer);
};
