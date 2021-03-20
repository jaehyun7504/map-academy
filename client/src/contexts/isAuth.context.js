import React, { createContext, useReducer } from "react";
import isAuthReducer from "../reducers/isAuth.reducer";

export const IsAuthContext = createContext();
export const IsAuthDispatchContext = createContext();

export function IsAuthProvider({ children }) {
  const [isAuth, isAuthDispatch] = useReducer(isAuthReducer, true);
  return (
    <IsAuthContext.Provider value={isAuth}>
      <IsAuthDispatchContext.Provider value={isAuthDispatch}>
        {children}
      </IsAuthDispatchContext.Provider>
    </IsAuthContext.Provider>
  );
}
