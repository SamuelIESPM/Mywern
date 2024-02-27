import React, { createContext } from "react";
import { supabaseConnection } from "../config/supabase";

const ContextOfLevel = createContext();

const levelsContext = ({ children }) => {
  const exportData = {};
  return (
    <ContextOfLevel.Provider value={exportData}>
      {children}
    </ContextOfLevel.Provider>
  );
};

export default levelsContext;

export { ContextOfLevel };
