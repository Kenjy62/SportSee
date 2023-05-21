import Logo from "../assets/logo.png";

export default function Header() {
  const HEADER = {
    sm: "flex flex-col h-24 gap-3 bg-black w-full items-center justify-center px-4",
    lg: "lg:h-24 lg:bg-black lg:w-full lg:flex lg:flex-row lg:items-center lg:justify-start",
  };

  const LOGO = {
    sm: "h-11",
    lg: "lg:h-16",
  };

  const MENU = {
    sm: "gap-4 flex flex-row justify-between",
    lg: "lg:flex lg:flex-1 lg:justify-around",
  };

  return (
    <header className={`${HEADER.sm} ${HEADER.lg}`}>
      <div>
        <img
          className={`${LOGO.sm} ${LOGO.lg}`}
          src={Logo}
          alt="Sportsee Logo"
        />
      </div>
      <nav className={`${MENU.sm} ${MENU.lg}`}>
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
