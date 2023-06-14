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

  /* Media query pour tablettes et desktop*/
  @media (min-width: 768px){
    background-image: url(${desktopBanner});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    min-height: 100vh;
    flex-direction: row;
    align-items:flex-end;
    justify-content: flex-end;

    button {
      width:330px;
      height:60px;
      font-size:24px;
      font-weight:bold;
      margin-right: 90px;
      background-color: rgb(240, 146, 145);
      margin-bottom: 50px;
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
