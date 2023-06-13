import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Importation des icônes depuis react-icons
import { accordionItems } from "../../utils/data";
import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTitle,
  StyledIcon,
  Title,
  Container,
} from "../../styles/Accordion/Accordion.styled";
import Button from "../layouts/Button";
import { motion } from "framer-motion";
import { fadeInBottomVariant, fadeInTopVariant } from "../../utils/variant";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  //  pour ouvrir ou fermer un élément de l'accordéon
  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Vérifie si un élément de l'accordéon est ouvert
  const isItemOpen = (index) => {
    return activeIndex === index;
  };

  // Récupère l'icône appropriée en fonction de l'état d'ouverture de l'élément
  const getIcon = (index) => {
    return isItemOpen(index) ? (
      // Icône vers le haut si l'élément est ouvert
      <StyledIcon isOpen={true}>
        <IoIosArrowUp />
      </StyledIcon>
    ) : (
      // Icône vers le bas si l'élément est fermé
      <StyledIcon isOpen={false}>
        <IoIosArrowDown />
      </StyledIcon>
    );
  };

  return (
    // Conteneur principal de l'accordéon
    <AccordionContainer>
      {/* Titre de l'accordéon */}
      <Title
        as={motion.h3}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
      >
        We’re here to answer your questions
      </Title>
      <Container>
        {/* Itération sur chaque élément de l'accordéon */}
        {accordionItems.map((item, index) => (
          <AccordionItem
            as={motion.div}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
            key={index}
          >
            {/* En-tête de l'élément de l'accordéon */}
            <AccordionHeader onClick={() => toggleAccordion(index)}>
              {/* Titre de l'élément de l'accordéon */}
              <AccordionTitle>{item.title}</AccordionTitle>
              {/* Icône d'ouverture/fermeture de l'élément */}
              {getIcon(index)}
            </AccordionHeader>
            {/* Contenu de l'élément de l'accordéon */}
            <AccordionContent isOpen={isItemOpen(index)}>
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
        {/* Bouton en bas de l'accordéon */}
        <Button text="get started" />
      </Container>
    </AccordionContainer>
  );
};

export default Accordion;
