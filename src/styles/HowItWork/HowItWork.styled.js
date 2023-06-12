import styled from "styled-components";


export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  padding: 20px;

  @media (min-width: 768px) {
    width: 100%;
    margin-top: unset;
    flex-direction: row;
    justify-content: space-between;
    padding: unset;
    gap: unset;
  }
`;

export const HeaderImage = styled.img`
  width: 100%;
  object-fit: cover;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 400;
  color: #47929C;
  & + p {
    font-weight: 700;
    font-size: 16px;
    color:#535353;
  }

  @media (min-width: 768px) {
    font-size: 40px;
    font-weight: 400;
    color: #47929C;
    text-align:center;

    & + p {
      font-weight: 700;
      font-size: 24px;
      color:#535353;
    }
  }
`;


export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .paragraph2{
    color: #47929C;
    font-size: 28px;
    font-weight: 400;
  }

  
  @media (min-width: 768px) {
    width: 50%;
    padding: 20px;
    
    & button {
      width: 50%;
      background-color:#F09291;
      margin: 0 auto;
    }
  }
`;


export const ListItemContainer = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  width: 100%;
  gap: 10px;
  display: flex;
  @media (min-width: 768px) {
    font-size: 24px;
    gap:20px;
  }
`;
export const Attr = styled.span`
  color: #47929C;
  font-size: 24px;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 24px;
    font-weight:bold;
  }
`;


export const Content = styled.p`
  margin-top: 5px;
  color: #535353;
  overflow-wrap: break-word;

  span{
    font-weight: bold;
  }
`;