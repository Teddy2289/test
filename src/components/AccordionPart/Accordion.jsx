import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'; // Importation des icônes depuis react-icons
import {accordionItems} from '../../utils/data';
import {
    AccordionContainer, AccordionContent,
    AccordionHeader,
    AccordionItem,
    AccordionTitle, StyledIcon,Title,Container
} from "../../styles/Accordion/Accordion.styled";
import Button from "../layouts/Button";


const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const isItemOpen = (index) => {
        return activeIndex === index;
    };
    const getIcon = (index) => {
        return isItemOpen(index) ? (
            <StyledIcon isOpen={true}>
                <IoIosArrowUp />
            </StyledIcon>
        ) : (
            <StyledIcon isOpen={false}>
                <IoIosArrowDown />
            </StyledIcon>
        );
    };

    return (
        <AccordionContainer>
            <Title>
                We’re here to answer your questions
            </Title>
            <Container>
                {accordionItems.map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionHeader onClick={() => toggleAccordion(index)}>
                            <AccordionTitle>{item.title}</AccordionTitle>
                            {getIcon(index)}
                        </AccordionHeader>
                        <AccordionContent isOpen={isItemOpen(index)}>
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
                <Button text="get started"/>
            </Container>

        </AccordionContainer>
    );
};

export default Accordion;
