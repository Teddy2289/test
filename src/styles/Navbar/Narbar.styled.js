import styled from "styled-components";
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 2rem;
  background-color: #85c5b9;
  color: #fff;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding-bottom: 1rem;
  }
`;

export const Logo = styled.a`
   {
    @media only screen and (max-width: 768px) {
      margin-top: 10px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: -100vh;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    background-color: #85c5b9;
    transition: 1s;
    transform: ${({ showMenu }) =>
      showMenu ? "translateY(100vh)" : "translateY(-100vh)"};
  }
`;

export const StyledLink = styled.a`
  margin: 0 1rem;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  transition: ease-in all 0.3s;
  cursor: pointer;
  font-size: 12px;

  span {
    text-transform: none;
  }

  &:hover {
    marigin-bottom:10px;
    text-decoration: underline;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const NavButton = styled.button`
  padding: 5px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  color: var(--textColor);
  visibility: hidden;
  opacity: 0;
  font-size: 1.8rem;

  @media only screen and (max-width: 768px) {
    visibility: visible;
    opacity: 1;
    position: absolute;
    top: 50%;
    left: 2rem;
    transform: translateY(-50%);
  }
`;

export const CloseButton = styled(NavButton)`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const AuthDiv = styled.div`
   {
    position: absolute;
    right: 25px;
  }

  @media only screen and (max-width: 768px) {
    position: relative;
    margin-left: 56px;
  }
`;

export const Authlink = styled.a`
   {
    text-decoration: none;
    margin: 0 5px;
    color: white;
    text-transform: uppercase;
    text-decoration: underline;
    transition: ease-in all 0.3s;
    font-size: 12px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
