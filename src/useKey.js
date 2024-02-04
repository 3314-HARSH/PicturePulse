import { useEffect } from "react";
export function useKey(key, action) {
  useEffect(
    function () {
      let callback = function (e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      };
      document.addEventListener("keydown", callback);

      return () => document.removeEventListener("keydown", callback);
    },
    [key, action]
  );
}
