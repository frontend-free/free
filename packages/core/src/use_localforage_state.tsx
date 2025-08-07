import localforage from 'localforage';
import { useEffect, useState } from 'react';

const useLocalforageState = <T = any,>(
  key: string,
  options: {
    defaultValue?: T;
  },
): [T | undefined, (value: T) => void, boolean] => {
  const [ready, setReady] = useState(false);
  const [value, setValue] = useState<T | undefined>(options.defaultValue);

  useEffect(() => {
    localforage.getItem(key).then((v) => {
      if (v !== undefined && v !== null) {
        setValue(v as T);
      }
      setReady(true);
    });
  }, [key]);

  const setValueAndSave = (v: T) => {
    setValue(v);
    localforage.setItem(key, v);
  };

  return [value, setValueAndSave, ready];
};

export { useLocalforageState };
