import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
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
 
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Header>
      <Logo href="#">
        <img src={logo} alt="logo" />
      </Logo>
      <Nav showMenu={showMenu}>
        <StyledLink href="/#">SMART SLEEP COACH</StyledLink>
        <StyledLink href="/#">Upgrade to pro</StyledLink>
        <StyledLink href="/#">sleep plan</StyledLink>
        <StyledLink href="/#">reviews</StyledLink>
        <StyledLink href="/#">
          FAQ<span>s</span>
        </StyledLink>
        <CloseButton className="nav-btn nav-close-btn" onClick={toggleMenu}>
          <FaTimes />
        </CloseButton>
        <AuthDiv>
            <Authlink href="">Sign</Authlink>
            <span>or</span>
            <Authlink href="">register</Authlink>
        </AuthDiv>
      </Nav>
      <NavButton className="nav-btn" onClick={toggleMenu}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </NavButton>
    </Header>
  );
}

export default Navbar;