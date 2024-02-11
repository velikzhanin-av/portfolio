import React from 'react';
import {Logo} from "../../components/logo/logo";
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

export const menu = ["Home", "Tech Stack", "Projects", "Contacts",]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <Menu items={menu}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  display: flex;
  background-color: blueviolet;
`