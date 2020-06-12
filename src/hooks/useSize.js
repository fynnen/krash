import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

const useSize = (ref) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const getSize = () => {
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect();

        setSize({ width, height });
      }
    };
    const onResize = debounce(getSize, 100);

    getSize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [ref]);

  return size;
};

export default useSize;