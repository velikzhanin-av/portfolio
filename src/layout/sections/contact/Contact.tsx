import React from 'react';
import styled from "styled-components";
import { FlexWrapper } from '../../../components/FlexWrapper';
import {SectionTitle} from "../../../components/SectionTitle";
import {StuledButton} from "../../../components/Button";


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
                <StyledForm>
                    <Field placeholder={"name"}/>
                    <Field placeholder={"mail"}/>
                    <Field placeholder={"message"} as={"textarea"}/>
                    <StuledButton type={"submit"}>Send message</StuledButton>
                </StyledForm>
            </FlexWrapper>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  min-height: 100vh;
`

const StyledMail = styled.h2`

`

const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin: 280px auto 0 auto;
  gap: 10px;
`

const Field = styled.input`
  
`



