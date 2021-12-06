import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  expences: [],
  
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteExpences(id) {
    dispatch({
      type: "DELETE_EXPENCES",
      payload: id,
    });
  }


  function AddExpences(expence) {
    dispatch({
      type: "ADD_EXPENCES",
      payload: expence,
    });
  }

  function updateExpences(expence) {
    dispatch({
      type: "UPDATE_EXPENCES",
      payload: expence,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        expences: state.expences,
        deleteExpences,
        AddExpences,
        updateExpences
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
