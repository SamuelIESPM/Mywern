import { useContext } from "react";
import { ContextOfUser } from "../contexts/UserContext.jsx";

//Hook to use userContext
const useUserContext = () => {
  const context = useContext(ContextOfUser);
  return context;
};

export default useUserContext;
