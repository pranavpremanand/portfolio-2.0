import { createContext, useState } from "react";

export const SpinnerContext = createContext(null);

export const SpinnerContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <SpinnerContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </SpinnerContext.Provider>
  );
};
