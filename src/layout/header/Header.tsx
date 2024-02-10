import React from 'react';
import {Logo} from "../../components/logo/logo";
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";

export const menu = ["Home", "Tech Stack", "Projects", "Contacts",]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu items={menu}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: blueviolet;
`