'use client';

import { RefObject, useEffect, useRef } from 'react';

import { useLatest } from './useLatest';

export function useCloseList(
  handleCloseList: () => void,
): [RefObject<HTMLDivElement>, RefObject<HTMLUListElement>] {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const latestHandleCloseList = useLatest(handleCloseList);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node) &&
        listRef.current &&
        !listRef.current.contains(event.target as Node)
      ) {
        latestHandleCloseList.current();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, listRef, latestHandleCloseList]);

  return [wrapperRef, listRef];
}
