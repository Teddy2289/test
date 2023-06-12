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
    ButtonItem
} from "../../styles/OurService/OurService.styled";

function OurService() {
    return (
        <Section>
            <ServiceContainer>
                {Items.map((item) => (
                    <ContainerItem key={item.id}>
                        <Image src={item.img} alt={item.title} />
                        <Infos>
                            <Title>{item.title}</Title>
                            <Description>{item.description}</Description>
                            <ButtonItem>{item.buttonText}</ButtonItem>
                        </Infos>
                    </ContainerItem>
                ))}
            </ServiceContainer>
        </Section>
    );
}

export default OurService;
