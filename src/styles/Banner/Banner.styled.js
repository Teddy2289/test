import styled from "styled-components";
import mobilebanner from "../../assets/Images/home-banner1-mobile.jpg";
import desktopBanner from "../../assets/Images/home-banner1-desktop.jpg";

export const Section = styled.section`
  background-image: url(${mobilebanner});
  background-size: cover;
  background-position: center;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  height: 90vh;
  justify-content: flex-end;

  button {
    width: 100%;
  }

  /* Media query pour tablettes */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    background-image: url(${mobilebanner});
    background-size: cover;
    align-items: end;
    height: auto;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;

    button {
      width: auto;
      margin: 30px auto;
      background-color: #f09291;
    }
  }

  /* Media query pour les ordinateurs de bureau */

  @media only screen and (min-width: 1025px) {
    background-image: url(${desktopBanner});
    width: 100%;
    height: 100vh;
    flex-direction: row;
    justify-content: flex-end;

    button {
      width: auto;
      margin: 30px auto;
      background-color: #f09291;
    }
  }
`;

export const Container = styled.div`
  background-color: #3a3a3c61;
  padding: 20px;
  width: 100%;
  height: auto;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: auto;
    width: 0;
    visibility: hidden;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: #fff;
  font-weight: lighter;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
