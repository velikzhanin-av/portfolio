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
  background-color: rgba(31, 31, 32, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  `