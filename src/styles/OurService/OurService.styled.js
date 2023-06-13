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
  /* Ce style est appliqué à une div conteneur pour les services */
  /* Il utilise une requête media pour cibler les écrans avec une largeur minimale de 768px */
  /* Il sélectionne la première div enfant à l'intérieur de ServiceContainer */
  /* Ensuite, il sélectionne l'image à l'intérieur de cette div et lui donne un ordre de 3 */
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  /* Ce style représente un conteneur pour les éléments */
  /* Il définit les propriétés flexbox pour disposer les éléments en colonne */
  /* Il centre les éléments verticalement et horizontalement */
  /* Il ajoute une marge en haut de 10px */

  @media (min-width: 768px) {
    flex-direction: row;
    margin: unset;
    /* Lorsque la largeur de l'écran atteint au moins 768px, il change la direction flex en ligne */
    /* Il supprime la marge */
  }
`;

export const Infos = styled.div`
  margin: 0 31px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
    & button {
      width: 50%;
      margin: 0 auto;
    }
  }
  /* Ce style représente un conteneur d'informations */
  /* Il ajoute une marge de 0 en haut et en bas, et de 31px à gauche et à droite */

  /* Lorsque la largeur de l'écran atteint au moins 768px, il change l'affichage en flex */
  /* Il définit la direction flex en colonne */
  /* Il ajoute un padding de 20px */
  /* Il définit l'espacement entre les éléments enfants à 10px */

  /* Il sélectionne le bouton à l'intérieur de Infos et lui donne une largeur de 50% */
  /* Il centre le bouton horizontalement en définissant la marge à 0 auto */
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  @media (min-width: 768px) {
    width: 50%;
  }
  /* Ce style représente une image */
  /* Il définit la largeur maximale à 100% et permet à la hauteur de s'ajuster proportionnellement */
  /* Lorsque la largeur de l'écran atteint au moins 768px, il définit la largeur de l'image à 50% */
`;

export const Title = styled.h2`
  margin-top: 20px;
  color: rgb(71, 146, 156);
  margin-bottom: 20px;
  font-weight: normal;
  text-align: center;

  @media (min-width: 768px) {
    text-align: center;
    font-size: 40px;
  }
  /* Lorsque la largeur de l'écran atteint au moins 768px, il aligne le texte au centre /
  / Il définit la taille de la police à 40px */
`;

/* Ce style représente une description /
  /* Lorsque la largeur de l'écran atteint au moins 768px, il définit la taille de la police à 18px */
export const Description = styled.p`
  margin-top: 5px;
  font-size: 16px;
  color: #535353;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

/* Ce style représente un bouton /
/* Lorsque la largeur de l'écran atteint au moins 768px, il change la couleur de fond*/
export const ButtonItem = styled.button`
   {
    background-color: #d38e8d;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    width: 100%;
    height: 45px;
    font-weight: bold;
    color: #000000;
    padding: 10px;
    outline: none;
    border: none;

    @media (min-width: 768px) {
      background-color: #f09291;
      margin-top: 20px;
      margin-bottom: 20px;
      border-radius: 10px;
      width: 100%;
      height: 45px;
      font-weight: bold;
      color: #000000;
      padding: 10px;
      outline: none;
      border: none;
    }
  }
`;
