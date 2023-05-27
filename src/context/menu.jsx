import { createContext, useState } from "react";

export const MenuContext = createContext();

/**
 * Fournisseur de contexte pour le menu.
 * @param {ReactNode} children - Les composants enfants.
 * @returns {JSX.Element} Le composant Fournisseur de contexte.
 */

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
