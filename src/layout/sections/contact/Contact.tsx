import React from 'react';
import styled from "styled-components";
import { FlexWrapper } from '../../../components/FlexWrapper';
import {SectionTitle} from "../../../components/SectionTitle";

export const Contact = () => {
    return (
        <StyledContact>
            <FlexWrapper direction={"column"} align={"center"}>
                <SectionTitle>
                    For any questions please mail me:
                </SectionTitle>
                <StyledMail>
                    a.velikzhanin90@gmail.com
                </StyledMail>
            </FlexWrapper>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  background-color: #3a3a3a;
  min-height: 100vh;
`

const StyledMail = styled.h2`
  color: aqua;
  font-family: "Lucida Console";
`


