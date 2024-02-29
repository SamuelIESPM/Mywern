import React, { createContext, useState, useEffect } from "react";
import { supabaseConnection } from "../config/supabase";

const ContextOfLevel = createContext();

const levelsContext = ({ children }) => {
  const initialLevelsList = [];
  const initialLevel = null;

  const [levelsList, setLevelsList] = useState(initialLevelsList);
  const [level, setLevel] = useState(initialLevel);
  const [situation, setSituation] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const selectLevel = async (levelId) => {
    try {
      const { data, error } = await supabaseConnection
        .from("levels")
        .select("*")
        .eq("id", levelId);
      if (error) throw error;
      setLevel(data);
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

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    getLevels();
  }, []);

  const exportData = {
    getLevels,
    selectLevel,
    createLevel,
    updateLevel,
    deleteLevel,
    setLevel,
    levelsList,
    level,
    initialLevel,
    situation,
    showModal,
    setShowModal,
    openModal,
    closeModal,
  };
  return (
    <ContextOfLevel.Provider value={exportData}>
      {children}
    </ContextOfLevel.Provider>
  );
};

export default levelsContext;

export { ContextOfLevel };
