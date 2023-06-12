import React from 'react';
import image from "../../assets/Images/how-it-works-mobile.jpg"
import Buttons from "../layouts/Button";
import {
    Attr,
    Container,
    Content,
    HeaderImage,
    List,
    ListItemContainer,
    Title
} from "../../styles/HowItWork/HowItWork.styled";


const HowItWork = () => {
    return (
        <Container>
            <HeaderImage src={image} alt="Header Image"/>
            <List>
                <Title>How it works</Title>
                <p>Lumi’s A, B, Cs, to better Zzzzs</p>
                <div className='div-interne'>
                <ListItemContainer>
                    <Attr>A.</Attr>
                    <Content><span>We coach</span>. Our Pediatric sleep experts will take you step-by-step to sleep success</Content>
                </ListItemContainer>
                <ListItemContainer>
                    <Attr>B.</Attr>
                    <Content><span>You log.</span> Record your baby’s sleeps directly within the app</Content>
                </ListItemContainer>
                <ListItemContainer>
                    <Attr>C.</Attr>
                    <Content><span>We analyze.</span> Daily and weekly sleep insight reports measure your baby’s progress</Content>
                </ListItemContainer>
                </div>
                <p className="paragraph2">Zzzzz your baby sleeps!</p>
                <Buttons text="get started"/>
            </List>
        </Container>
    );
};

export default HowItWork;
