import styled from "styled-components";

// Container pour le contenu principal
export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

// Image d'en-tête
export const HeaderImage = styled.img`
  width: 100%;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

// Titre
export const Title = styled.h2`
  font-size: 28px;
  font-weight: 400;
  color: #47929C;

  & + p {
    font-weight: 700;
    font-size: 16px;
    color: #535353;
  }

  @media (min-width: 768px) {
    font-size: 40px;
    font-weight: 400;
    color: #47929C;
    text-align: center;

    & + p {
      font-weight: 700;
      font-size: 24px;
      color: #535353;
    }
  }
`;

// Liste
export const List = styled.div`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .paragraph2 {
    color: #47929C;
    font-size: 28px;
    font-weight: 400;
  }

  @media (min-width: 768px) {
    width: 50%;
    margin: 0 auto;
    padding: 56px;

    & button {
      width: 50%;
      background-color: #F09291;
      margin: 0 auto;
    }
  }
`;

// Conteneur d'un élément de liste
export const ListItemContainer = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  width: 100%;
  gap: 10px;
  display: flex;

  @media (min-width: 768px) {
    font-size: 24px;
    gap: 20px;
  }
`;

// Tag d'un élément de liste
export const Tag = styled.span`
  color: #47929C;
  font-size: 24px;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 24px;
    font-weight: bold;
  }
`;

// Contenu d'un élément de liste
export const Content = styled.p`
  margin-top: 5px;
  color: #535353;
  overflow-wrap: break-word;

  span {
    font-weight: bold;
  }
`;
