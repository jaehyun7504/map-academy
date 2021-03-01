import { createContext } from 'react';

const AuthenticationContext = createContext({ isAuthenticated: false });

export default AuthenticationContext;
