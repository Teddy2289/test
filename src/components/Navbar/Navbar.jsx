import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  AuthDiv,
  Authlink,
  CloseButton,
  Header,
  Logo,
  Nav,
  NavButton,
  StyledLink,
} from "../../styles/Navbar/Narbar.styled";
import logo from "../../assets/Icons/Logo.svg";

function Navbar() {
  // Déclaration de l'état du menu, par defaut a false
  const [showMenu, setShowMenu] = useState(false);

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // effacer l'effet de scroll quand le menu est ouvert
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showMenu]);

  return (
    <Header>
      <Logo href="#">
        <img src={logo} alt="logo" />
      </Logo>

      {/* Menu de navigation */}
      <Nav showMenu={showMenu}>
        {/* Liens de navigation */}
        <StyledLink href="/#">SMART SLEEP COACH</StyledLink>
        <StyledLink href="/#">Upgrade to pro</StyledLink>
        <StyledLink href="/#">sleep plan</StyledLink>
        <StyledLink href="/#">reviews</StyledLink>
        <StyledLink href="/#">
          FAQ<span>s</span>
        </StyledLink>

        {/* Bouton de fermeture du menu */}
        <CloseButton showMenu={showMenu} onClick={() => setShowMenu(false)}>
          {" "}
          <FaTimes />
        </CloseButton>

        {/* Authentification */}
        <AuthDiv>
          <Authlink href="">Sign</Authlink>
          <span>or</span>
          <Authlink href="">register</Authlink>
        </AuthDiv>
      </Nav>

      {/* Bouton pour ouvrir/fermer le menu */}
      <NavButton className="nav-btn" onClick={toggleMenu}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </NavButton>
    </Header>
  );
}

export default Navbar;
