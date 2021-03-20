import React, { createContext, useReducer } from "react";
import tokenReducer from "../reducers/token.reducer";

export const TokenContext = createContext();
export const TokenDispatchContext = createContext();

export function TokenProvider({ children }) {
  const [token, tokenDispatch] = useReducer(tokenReducer, "");
  return (
    <TokenContext.Provider value={token}>
      <TokenDispatchContext.Provider value={tokenDispatch}>
        {children}
      </TokenDispatchContext.Provider>
    </TokenContext.Provider>
  );
}
