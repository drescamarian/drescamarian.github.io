import { useState } from "react";

const useLimit = (initialLimit) => {
  const [itemsPerPage, setLimit] = useState(initialLimit);
  
  const handleLimit = (e) => {
    setLimit(e.target.value);
  };

  return { itemsPerPage, handleLimit, setLimit };
};

export default useLimit;