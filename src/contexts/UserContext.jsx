import React, { createContext, useState, useEffect } from "react";
import { supabaseConnection } from "../config/supabase.js";
import { useNavigate } from "react-router-dom";

const ContextOfUser = createContext();

const userContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [situation, setSituation] = useState("");
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  const gotoPage = (page) => {
    navigate(page);
  };

  const setSessionUser = async () => {
    try {
      const { data, error } = await supabaseConnection.auth.getUser();
      if (error) throw error;
      setUser(data.user);
    } catch (error) {
      setSituation(error.message);
    }
  };

  //Function for login user with supabase
  const loginUser = async (loginFormData) => {
    try {
      const { data, error } = await supabaseConnection.auth.signInWithPassword({
        email: loginFormData.email,
        password: loginFormData.password,
      });
      if (error) throw error;
    } catch (error) {
      setSituation(error.message);
    }
  };

  //Function for logout user with supabase
  const logoutUser = async () => {
    try {
      const { data, error } = await supabaseConnection.auth.signOut();
      if (error) throw error;
    } catch (error) {
      setSituation(error.message);
    }
  };

  //Function for register a new user with supabase
  const registerUser = async (registerFormData) => {
    try {
      const { data, error } = await supabaseConnection.auth.signUp({
        email: registerFormData.email,
        password: registerFormData.password,
      });
      if (error) throw error;
    } catch (error) {
      setSituation(error.message);
    }
  };

  const openModal = () => {
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
  };

  useEffect(() => {
    const subscription = supabaseConnection.auth.onAuthStateChange(
      (event, session, error) => {
        if (session && !error) {
          setSessionUser();
          gotoPage("/");
        } else if (error) {
          setSituation(error.message);
        } else {
          setUser(null);
          gotoPage("/");
        }
      }
    );
  }, []);

  const exportData = {
    situation,
    loginUser,
    logoutUser,
    registerUser,
    user,
    modalShow,
    setModalShow,
    openModal,
    closeModal,
    editMode,
    setEditMode,
  };

  return (
    <ContextOfUser.Provider value={exportData}>
      {children}
    </ContextOfUser.Provider>
  );
};

export default userContext;
export { ContextOfUser };
