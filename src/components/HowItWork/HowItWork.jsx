import React from 'react';
import styled from 'styled-components';
import image from "../../assets/Images/how-it-works-mobile.jpg"
import Buttons from "../layouts/Button";
import {ListItems} from "../../utils/data";

// Composant conteneur principal
const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 40px;
  border: 1px solid #ccc;
`;

// Composant pour l'image d'en-tête
const HeaderImage = styled.img`
  width: 350px;
  max-height: 290px;
  object-fit: cover;
`;

// Composant pour le titre
const Title = styled.h2`
  margin-top: 20px;
  font-size: 24px;
  color: #333;
`;

// Composant pour la liste
const List = styled.ul`
  margin-top: 20px;
  list-style-type: none;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
`;

const ListItemContainer = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
  width: 100%;
  gap: 10px;
  display: flex;
`;
const Attr = styled.span`
  color: #47929C;
  font-size: 24px;
  font-weight: 500;
`;


const Content = styled.p`
  margin-top: 5px;
  color: #535353;
  inline-size: 244px;
  overflow-wrap: break-word;
`;

const HowItWork = () => {
    return (
        <Container>
            <HeaderImage src={image} alt="Header Image" />
            <Title>Mon Titre</Title>
            <List>
                {
                    ListItems.map((listItem,id)=>(
                        <ListItemContainer key={listItem.id}>
                            <Attr>{listItem.attr}</Attr>
                            <Content>{listItem.content}</Content>
                        </ListItemContainer>
                    ))
                }
            </List>
            <Buttons text="get started" />
        </Container>
    );
};

export default HowItWork;
