import { useState } from "react";

export const useToggle = () => {
  const [isTrue, setIsTrue] = useState<boolean>(false);
  function toggle() {
    setIsTrue(!isTrue);
  }
  return { isTrue, toggle };
};
