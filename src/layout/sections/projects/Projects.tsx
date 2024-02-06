import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SecondarySectionTitle, SectionTitle} from "../../../components/SectionTitle";
import {Card} from "./card/Card";
import GreenImg from './../../../assets/images/4355658.jpg'

export const Projects = () => {
    return (
        <StyledProject>
            <FlexWrapper justify={"center"} direction={"column"} align={"center"}>
                <SectionTitle>
                    Projects
                </SectionTitle>
                <SecondarySectionTitle>
                    Things I’ve built so far
                </SecondarySectionTitle>
            </FlexWrapper>
            <FlexWrapper justify={"center"} wrap={"wrap"}>
                <Card src={GreenImg} title={"green-corp-landing"}/>
                <Card src={GreenImg} title={"green-corp-landing"}/>
                <Card src={GreenImg} title={"green-corp-landing"}/>
                <Card src={GreenImg} title={"green-corp-landing"}/>
                <Card src={GreenImg} title={"green-corp-landing"}/>
                <Card src={GreenImg} title={"green-corp-landing"}/>
                <Card src={GreenImg} title={"green-corp-landing"}/>

            </FlexWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.section`
  background-color: #484848;
  min-height: 100vh;
`
