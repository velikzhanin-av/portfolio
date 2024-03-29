import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SecondarySectionTitle, SectionTitle} from "../../../components/SectionTitle";
import {Card} from "./card/Card";
import GreenImg from './../../../assets/images/4355658.jpg'
import {Container} from "../../../components/Container";

export const Projects = () => {
    return (
        <StyledProject id={"Projects"}>
            <Container>
                <FlexWrapper justify={"center"} direction={"column"} align={"center"}>
                    <SectionTitle>
                        Projects
                    </SectionTitle>
                    <SecondarySectionTitle>
                        Things I’ve built so far
                    </SecondarySectionTitle>
                </FlexWrapper>
                <FlexWrapper justify={"center"} wrap={"wrap"}> 
                    <Card src={GreenImg} title={"green-corp-landing"}
                          description={"This is sample project description random things are here in description " +
                              "This is sample project lorem ipsum generator for dummy content"}/>
                    <Card src={GreenImg} title={"green-corp-landing"}
                          description={"This is sample project description random things are here in description " +
                              "This is sample project lorem ipsum generator for dummy content"}/>
                    <Card src={GreenImg} title={"green-corp-landing"}
                          description={"This is sample project description random things are here in description " +
                              "This is sample project lorem ipsum generator for dummy content"}/>
                    <Card src={GreenImg} title={"green-corp-landing"}
                          description={"This is sample project description random things are here in description " +
                              "This is sample project lorem ipsum generator for dummy content"}/>
                </FlexWrapper>
            </Container>
        </StyledProject>
    );
};

const StyledProject = styled.section`
  min-height: 100vh;
`
