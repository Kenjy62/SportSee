import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(open ? false : true);
  };

  return (
    <MenuContext.Provider value={{ toggleOpen, open }}>
      {children}
    </MenuContext.Provider>
  );
};
