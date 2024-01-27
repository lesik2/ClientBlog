'use client';

import { useEffect } from 'react';

export interface IError {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: IError) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button type='button' onClick={reset}>
        Try again
      </button>
    </div>
  );
}
