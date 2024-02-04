import React from 'react';
import {Logo} from "../../components/logo/logo";
import styled from "styled-components";
import {Menu} from "../../components/menu/menu";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: blueviolet;
`