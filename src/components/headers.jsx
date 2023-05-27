// required
import { useContext } from "react";

// Assets
import Logo from "../assets/logo.png";

// Context
import { MenuContext } from "../context/menu";

/**
 * Composant du header.
 * @returns {JSX.Element} Le composant du header.
 */

export default function Header() {
  const { toggleOpen } = useContext(MenuContext);

  return (
    <header className="flex h-24 w-full flex-col items-center justify-center gap-3 bg-black px-4 lg:w-full lg:flex-row  lg:justify-start">
      <div
        onClick={toggleOpen}
        className="absolute left-5 top-5 text-white lg:hidden"
      >
        <i className="fa-solid fa-bars cursor-pointer text-2xl text-white"></i>
      </div>

      <div>
        <img className="h-11 lg:h-16" src={Logo} alt="Sportsee Logo" />
      </div>
      <nav className="flex flex-row justify-between gap-4 lg:flex-1 lg:justify-around">
        <a className="text-sm text-white lg:text-xl" href="#">
          Accueil
        </a>
        <a className="text-sm text-white lg:text-xl" href="#">
          Profil
        </a>
        <a className="text-sm text-white lg:text-xl" href="#">
          Réglage
        </a>
        <a className="text-sm text-white lg:text-xl" href="#">
          Communauté
        </a>
      </nav>
    </header>
  );
}
