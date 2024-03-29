import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {SecondarySectionTitle, SectionTitle} from '../../../components/SectionTitle';
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

type TechStackPropsType = {
    skills: Array<string>
}

export const TechStack = (props: TechStackPropsType) => {
    return (
        <StyledTechStack id={"Tech Stack"}>
            <Container>
                <FlexWrapper justify={"center"} direction={"column"} align={"center"}>
                    <SectionTitle>
                        My Tech Stack
                    </SectionTitle>
                    <SecondarySectionTitle>
                        Technologies I’ve been working with recently
                    </SecondarySectionTitle>
                    <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                        {props.skills.map((n, index) => {
                            return <Skill key={index} iconId={n} title={n}/>
                        })
                        }
                    </FlexWrapper>
                </FlexWrapper>

            </Container>
        </StyledTechStack>
    );
};

const StyledTechStack = styled.section`
  height: 100vh;
`


