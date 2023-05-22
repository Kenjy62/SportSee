// required
import { useContext } from "react";

// Assets
import Logo from "../assets/logo.png";

// Context
import { MenuContext } from "../context/menu";

export default function Header() {
  const { toggleOpen } = useContext(MenuContext);

  return (
    <header className="flex flex-col h-24 gap-3 bg-black w-full items-center justify-center px-4 lg:w-full lg:flex-row  lg:justify-start">
      <div
        onClick={toggleOpen}
        className="absolute top-5 left-5 text-white lg:hidden"
      >
        <i className="text-2xl text-white fa-solid fa-bars cursor-pointer"></i>
      </div>

      <div>
        <img className="h-11 lg:h-16" src={Logo} alt="Sportsee Logo" />
      </div>
      <nav className="flex flex-row justify-between gap-4 lg:flex-1 lg:justify-around">
        <a className="text-white text-sm lg:text-xl" href="#">
          Accueil
        </a>
        <a className="text-white text-sm lg:text-xl" href="#">
          Profil
        </a>
        <a className="text-white text-sm lg:text-xl" href="#">
          Réglage
        </a>
        <a className="text-white text-sm lg:text-xl" href="#">
          Communauté
        </a>
      </nav>
    </header>
  );
}
