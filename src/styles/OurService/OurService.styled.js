import styled from "styled-components";

export const Section = styled.section`

`;
export const ServiceContainer = styled.div`
  
  @media (min-width: 768px) {
    & div:first-child {
      & img {
        order: 3;
      }
    }
  }
  
`;
export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    margin: unset;
  }
   
`;
export const Infos = styled.div`
  margin: 0 31px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    & button {
      width: 50%;
      margin: 0 auto;
    }
  }
`;
export const Image = styled.img`
  max-width: 100%;
  height: auto;
  @media (min-width: 768px) {
    width: 50%;
  }
`;
export const Title = styled.h1`
  margin-top: 20px;
  color: rgb(71, 146, 156);
  margin-bottom: 20px;
  font-weight: normal;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: center;
  }
`;
export const Description = styled.p`
  margin-top: 5px;
  font-size: 16px;
  color: #535353;
`;

export const ButtonItem = styled.button`{
  background-color: #D38E8D;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius:10px;
  width:100%;
  height:45px;
  font-weight: bold;
  color:#000000;
  padding:10px;
  outline:none;
  border:none;

  @media (min-width: 768px) {
    background-color: #F09291;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius:10px;
    width:100%;
    height:45px;
    font-weight: bold;
    color:#000000;
    padding:10px;
    outline:none;
    border:none;
  }
}`

