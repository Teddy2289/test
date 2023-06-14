import React from "react";
import image from "../../assets/Images/how-it-works-mobile.jpg";
import Buttons from "../layouts/Button";
import {
  Tag,
  Section,
  Content,
  HeaderImage,
  List,
  ListItemContainer,
  Title,
} from "../../styles/HowItWork/HowItWork.styled";
import { fadeInLeftVariant, fadeInRightVariant, fadeInTopVariant } from "../../utils/variant";
import { motion } from "framer-motion";

const HowItWork = () => {
  return (
    <Section>
      <HeaderImage
        as={motion.img}
        variants={fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
        src={image}
        alt="Header Image"
      />
      <List as={motion.div} variants={fadeInRightVariant}
        initial="hidden"
        whileInView="visible">
        {/* Titre */}
        <Title as={motion.h2} variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible">How it works</Title>
        {/* Paragraphe */}
        <p>Lumi’s A, B, Cs, to better Zzzzs</p>
        <div className="div-interne">
          {/* Élément de liste */}
          <ListItemContainer>
            {/* Tag */}
            <Tag>A.</Tag>
            {/* Contenu */}
            <Content>
              <span>We coach</span>. Our Pediatric sleep experts will take you
              step-by-step to sleep success
            </Content>
          </ListItemContainer>
          {/* Élément de liste */}
          <ListItemContainer>
            {/* Tag */}
            <Tag>B.</Tag>
            {/* Contenu */}
            <Content>
              <span>You log.</span> Record your baby’s sleeps directly within
              the app
            </Content>
          </ListItemContainer>
          {/* Élément de liste */}
          <ListItemContainer>
            {/* Tag */}
            <Tag>C.</Tag>
            {/* Contenu */}
            <Content>
              <span>We analyze.</span> Daily and weekly sleep insight reports
              measure your baby’s progress
            </Content>
          </ListItemContainer>
        </div>
        {/* Paragraphe */}
        <p className="paragraph2">Zzzzz your baby sleeps!</p>
        {/* Bouton depuis le composant reutilisable dans le dossier layouts */}
        <Buttons text="get started" />
      </List>
    </Section>
  );
};

export default HowItWork;
