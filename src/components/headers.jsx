import Logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="h-24 bg-black w-full flex items-center">
      <div>
        <img className="h-20" src={Logo} alt="Sportsee Logo" />
      </div>
      <nav className="flex flex-1 justify-around">
        <a className="text-white text-xl" href="#">
          Accueil
        </a>
        <a className="text-white text-xl" href="#">
          Profil
        </a>
        <a className="text-white text-xl" href="#">
          Réglage
        </a>
        <a className="text-white text-xl" href="#">
          Communauté
        </a>
      </nav>
    </header>
  );
}
