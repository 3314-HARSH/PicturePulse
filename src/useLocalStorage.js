import { useState, useEffect } from "react";
export function useLocalStorage(initialValue, key) {
  const [value, setValue] = useState(function () {
    let stored = JSON.parse(localStorage.getItem(key)) || initialValue;
    return stored;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
