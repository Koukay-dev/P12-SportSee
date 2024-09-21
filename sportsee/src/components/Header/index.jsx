import "../../style/header.css";

import logo from "../../assets/img/logo.svg";
import name from "../../assets/img/sportsee.svg";

export default function Header() {
  return (
    <header>
      <div id="logo">
        <img src={logo} alt="Logo de Sportsee" />
        <img src={name} alt="Sportsee" />
      </div>
      <nav className="top-nav">
        <span>Accueil</span>
        <span>Profil</span>
        <span>Réglage</span>
        <span>Communauté</span>
      </nav>
    </header>
  );
}
