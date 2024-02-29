import { useContext } from "react";
import { ContextOfLevel } from "../contexts/LevelsContext.jsx";

const useLevelsContext = () => {
  const context = useContext(ContextOfLevel);
  return context;
};

export default useLevelsContext;
