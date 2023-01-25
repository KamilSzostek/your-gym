import React, { createContext, FC } from "react";

interface IContext {
  body: HTMLElement;
}

interface Props {
  children?: React.ReactNode;
}

const body = document.body;

const StoreContext = createContext<Partial<IContext>>({});

export const StoreProvider: FC<Props> = ({ children }) => {
  return (
    <StoreContext.Provider
      value={{body}}
    >
      {children}
    </StoreContext.Provider>
  );
};
