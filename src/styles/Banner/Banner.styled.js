import styled from "styled-components";
import mobilebanner from "../../assets/Images/home-banner1-mobile.jpg";

export const Section = styled.section`
  background-image: url(${mobilebanner});
  background-size: cover;
  background-position: center;
  padding: 40px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  height: 70vh;
  justify-content: flex-end;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

export const Container = styled.div`
  background-color: #3a3a3c61;
  padding: 20px;
  width: 332px;
  height: 190px;
  border-radius: 8px;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
    padding: 40px;
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
