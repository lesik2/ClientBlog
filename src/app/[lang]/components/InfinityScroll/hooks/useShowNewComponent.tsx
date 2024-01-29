'use client';

import { useEffect, useState } from 'react';

export function useShowNewComponent(inView: boolean) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (inView) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }, [inView]);

  return currentIndex;
}
