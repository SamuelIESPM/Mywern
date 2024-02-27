import { useContext } from "react";
import { ContextOfLevels } from "../contexts/LlevelsContext.jsx";

const useLevelsContext = () => {
  const context = useContext(ContextOfLevels);
  return context;
};

export default useLevelsContext;
