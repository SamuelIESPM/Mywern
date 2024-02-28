import React, { createContext, useState, useEffect } from "react";
import { supabaseConnection } from "../config/supabase";

const ContextOfLevel = createContext();

const levelsContext = ({ children }) => {
  const initialLevelsList = [];
  const [levelsList, setLevelsList] = useState(initialLevelsList);
  const [situation, setSituation] = useState(null);

  const getLevels = async () => {
    try {
      const { data, error } = await supabaseConnection
        .from("levels")
        .select("*");
      if (error) throw error;
      setLevelsList(data);
    } catch (error) {
      setSituation(error.message);
    }
  };

  const selectLevels = async (levelId) => {
    try {
      const { data, error } = await supabaseConnection
        .from("levels")
        .select("*")
        .eq("id", levelId);
      if (error) throw error;
      setLevelsList(data);
    } catch (error) {
      setSituation(error.message);
    }
  };

  const createLevel = async (newLevel) => {
    try {
      const { data, error } = await supabaseConnection
        .from("levels")
        .insert(newLevel);
      if (error) throw error;
      getLevels();
    } catch (error) {
      setSituation(error.message);
    }
  };

  const updateLevel = async (toUpdateLevel) => {
    try {
      const { data, error } = await supabaseConnection
        .from("levels")
        .update([toUpdateLevel])
        .eq("id", toUpdateLevel.id);
      if (error) throw error;
      getProducts();
    } catch (error) {
      setSituation(error.message);
    }
  };

  const deleteLevel = async (toRemoveLevel) => {
    try {
      const { data, error } = await supabaseConnection
        .from("levels")
        .delete()
        .eq("id", toRemoveLevel);
      if (error) throw error;
      getLevels();
    } catch (error) {
      setSituation(error.message);
    }
  };

  useEffect(() => {
    getLevels();
  }, []);

  const exportData = {
    getLevels,
    selectLevels,
    createLevel,
    updateLevel,
    deleteLevel,
    levelsList,
    situation,
  };
  return (
    <ContextOfLevel.Provider value={exportData}>
      {children}
    </ContextOfLevel.Provider>
  );
};

export default levelsContext;

export { ContextOfLevel };
