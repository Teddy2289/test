import React from "react";
import Button from "../layouts/Button";
import {
  Container,
  Section,
  Title,
  Description,
} from "../../styles/Banner/Banner.styled";
import { motion } from "framer-motion";
import { fadeInBottomVariant, fadeInLeftVariant } from "../../utils/variant";

function Banner() {
  return (
    // Section principale
    <Section>
      <Container
        as={motion.div}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
      >
        {/* Titre */}
        <Title>Your baby can be a super sleeper</Title>
        {/* Description */}
        <Description>
          Lumi’s app-bases sleep coaching and tracking tools will have your baby
          sleeping better in just 7 days
        </Description>
      </Container>
      {/* Bouton depuis le composant reutilisable dans le dossier layouts */}
      <Button
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        text="Get started"
      />
    </Section>
  );
}

export default Banner;
