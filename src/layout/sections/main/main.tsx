import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/photo.jpg";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main = () => {
    return (
        <StyledMain id={"Home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <StyledHello>Hi There<br/>My name is</StyledHello>
                        <StyledName> <Typewriter
                            options={{
                                strings: ['Aleksandr Velikzhanin'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></StyledName>
                        <StyledTitle>A Frontend Developer</StyledTitle>
                    </div>
                    <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.2}
                        gyroscope={true}
                    >
                        <Photo className="inner-element" alt={"my-photo"} src={photo}/>
                    </Tilt>
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
  border: 10px solid ${theme.colors.accent};
`

export const StyledName = styled.h1`
  font-family: "Popins", "sans-serif";
  font-size: 50px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
  text-align: left;
  background-image: linear-gradient(30deg, #00C0FD, #E70FAA);
  -webkit-background-clip: text;
  color: transparent;
`

export const StyledTitle = styled.h2`
  font-family: "Popins", "sans-serif";
  font-size: 50px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
  text-align: left;
`

export const StyledHello = styled.span`
  font-family: "Popins", "sans-serif";
  font-size: 50px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
  text-align: left;
`



