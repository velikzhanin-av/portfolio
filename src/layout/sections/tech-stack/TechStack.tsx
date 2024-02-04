import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {SecondarySectionTitle, SectionTitle} from '../../../components/SectionTitle';
import {Icon} from "../../../components/icons/icon";

export const TechStack = () => {
    return (
        <StyledTechStack>
            <FlexWrapper justify={"center"} direction={"column"} align={"center"}>
                <SectionTitle>
                    My Tech Stack
                </SectionTitle>
                <SecondarySectionTitle>
                    Technologies I’ve been working with recently
                </SecondarySectionTitle>
            </FlexWrapper>
            <FlexWrapper justify={"space-evenly"}>
                <Icon iconId={'html'} height={"120"} width={"120"}/>
                <Icon iconId={'css'} height={"120"} width={"120"}/>
                <Icon iconId={'js'} height={"120"} width={"120"}/>
                <Icon iconId={'react'} height={"120"} width={"120"}/>
                <Icon iconId={'git'} height={"120"} width={"120"}/>
            </FlexWrapper>
            <FlexWrapper justify={"space-around"}>
                <Icon iconId={'html'} height={"120"} width={"120"}/>
                <Icon iconId={'css'} height={"120"} width={"120"}/>
                <Icon iconId={'js'} height={"120"} width={"120"}/>
                <Icon iconId={'react'} height={"120"} width={"120"}/>
                <Icon iconId={'git'} height={"120"} width={"120"}/>
            </FlexWrapper>
        </StyledTechStack>
    );
};

const StyledTechStack = styled.section`
  background-color: #3a3a3a;
  height: 100vh;
`
