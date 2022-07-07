import { useEffect, useState } from "react";

export default function useDebounce(initializeValue = "", deplay = 1000) {
  const [debounceValue, setDebounceValue] = useState(initializeValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initializeValue);
    }, deplay);
    return () => {
      clearTimeout(timer);
    };
  }, [deplay, initializeValue]);
  return debounceValue;
}
