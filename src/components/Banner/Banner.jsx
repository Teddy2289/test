import React from "react";
import Button from "../layouts/Button";
import {Container, Section,Title,Description} from "../../styles/Banner/Banner.styled";



function Banner() {
    return (
        <Section>
            <Container>
                <Title>Your baby can be a super sleeper</Title>
                <Description> Lumi’s app-bases sleep coaching and tracking tools will have your baby sleeping better in
                    just 7 days</Description>
            </Container>
            <Button text="Get started"/>
        </Section>
    );
}

export default Banner;

