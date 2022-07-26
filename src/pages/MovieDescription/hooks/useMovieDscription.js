import { useEffect } from "react";
import { useState } from "react";

export const useMovieCurrent = (ob) => {
  const [obj, setObj] = useState({});
  setObj({
    ob
  })
  return obj
}