import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/4355658.jpg";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <StyledHello>Hi There<br/>My name is</StyledHello>
                        <StyledName>Aleksandr Velikzhanin</StyledName>
                        <StyledTitle>A Frontend Developer</StyledTitle>
                    </div>
                    <Photo src={photo}/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

export const StyledMain = styled.section`
    height: 100vh;
    display: flex;
`

export const Photo = styled.img`
    height: 430px;
    width: 350px;
    object-fit: cover;
    //justify-content: space-between;
`;

export const StyledName = styled.h1`
    font-family: Poppins;
    font-size: 50px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -1px;
    text-align: left;
    background: -webkit-linear-gradient(30deg, #00C0FD, #E70FAA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const StyledTitle = styled.h2`
    font-family: Poppins;
    font-size: 50px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -1px;
    text-align: left;
`

export const StyledHello = styled.span`
    font-family: Poppins;
    font-size: 50px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -1px;
    text-align: left;
`

