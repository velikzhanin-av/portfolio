import React from 'react';
import styled from "styled-components";
import { FlexWrapper } from '../../../components/FlexWrapper';
import {SectionTitle} from "../../../components/SectionTitle";
import {StyledButton} from "../../../components/Button";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";


export const Contact = () => {
    return (
        <StyledContact id={"Contacts"}>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>
                        For any questions please mail me:
                    </SectionTitle>
                    <StyledMail>
                        a.velikzhanin90@gmail.com
                    </StyledMail>
                    <StyledForm>
                        <Label>Name</Label>
                        <Field placeholder={"name"}/>
                        <Label>Mail</Label>
                        <Field placeholder={"mail"}/>
                        <Label>Message</Label>
                        <Field placeholder={"message"} as={"textarea"}/>
                        <StyledButton type={"submit"}>Send message</StyledButton>
                    </StyledForm>
                </FlexWrapper>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  min-height: 100vh;
`

const StyledMail = styled.h2`
    background-image: linear-gradient(30deg, #00C0FD, #E70FAA);
    -webkit-background-clip: text;
    color: transparent;
  font-family: "Poppins", "sans-serif";
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-top: 30px;
`

const StyledForm = styled.form`
  width: 100%;
  max-width: 540px;
  display: flex;
  flex-direction: column;
  margin: 70px auto 0 auto;
  gap: 10px;
`

const Field = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 45px;
    border: 1px solid rgb(74, 74, 74);
    border-radius: 6px;
    background: ${theme.colors.secondaryBg};;
    color: ${theme.colors.font};
`

const Label = styled.label`
  text-align: center;
`



