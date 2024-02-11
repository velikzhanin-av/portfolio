import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/photo.jpg";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"}>
                    <div>
                        <StyledHello>Hi There</StyledHello>
                        <StyledTitle>I am Aleksandr Velikzhanin</StyledTitle>
                        <StyledName>A Frontend Developer</StyledName>
                    </div>
                    <Photo src={photo}/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

export const StyledMain = styled.section`
  min-height: 100vh;
`

export const Photo = styled.img`
  height: 430px;
  width: 350px;
  object-fit: cover;
  //justify-content: space-between;
`;

export const StyledTitle = styled.h1`
    
`

export const StyledName = styled.h2`
    
`

export const StyledHello = styled.span`
    
`

