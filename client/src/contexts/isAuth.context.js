import React, { createContext, useReducer } from "react";
import isAuthReducer from "../reducers/isAuth.reducer";

export const IsAuthContext = createContext();
export const IsAuthDispatchContext = createContext();

export function IsAuthProvider({ children }) {
  const [isAuth, aDispatch] = useReducer(isAuthReducer, false);
  return (
    <IsAuthContext.Provider value={isAuth}>
      <IsAuthDispatchContext.Provider value={aDispatch}>
        {children}
      </IsAuthDispatchContext.Provider>
    </IsAuthContext.Provider>
  );
}
