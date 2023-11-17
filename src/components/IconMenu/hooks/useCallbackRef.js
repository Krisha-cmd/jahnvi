import { useMemo, useEffect, useRef } from 'react';


function useCallbackRef(callback) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  return useMemo(() => ((...args) => callbackRef.current?.(...args)), []);
}

export { useCallbackRef };
