import React from "react";
import { Items } from "../../utils/data";
import {
  ContainerItem,
  Section,
  ServiceContainer,
  Image,
  Title,
  Description,
  Infos,
  ButtonItem,
} from "../../styles/OurService/OurService.styled";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInBottomVariant,
  fadeInLeftVariant,
  fadeInRightVariant,
  fadeInTopVariant,
} from "../../utils/variant";

function OurService() {
  return (
    <Section>
      <ServiceContainer>
        <AnimatePresence>
          {Items.map((item, id) => (
            <ContainerItem key={item.id}>
              <Image
                src={item.img}
                alt={item.title}
                as={motion.img}
                variants={fadeInBottomVariant}
                initial="hidden"
                whileInView="visible"
              />
              <Infos
                as={motion.div}
                variants={fadeInBottomVariant}
                initial="hidden"
                whileInView="visible"
              >
                <Title
                  as={motion.h2}
                  variants={fadeInTopVariant}
                  initial="hidden"
                  whileInView="visible"
                >
                  {item.title}
                </Title>
                <Description>{item.description}</Description>
                <ButtonItem
                  as={motion.button}
                  variants={fadeInBottomVariant}
                  initial="hidden"
                  whileInView="visible"
                >
                  {item.buttonText}
                </ButtonItem>
              </Infos>
            </ContainerItem>
          ))}
        </AnimatePresence>
      </ServiceContainer>
    </Section>
  );
}

export default OurService;
