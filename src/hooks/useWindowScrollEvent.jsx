import { useEffect, useState } from 'react';

export default function useWindowScrollEvent(listener) {
  const [scrollY, setScrollY] = useState(0);

  function listener() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return {
    scrollY,
  };
}
