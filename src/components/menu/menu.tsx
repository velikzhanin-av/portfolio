import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Tech Stack
                </li>
                <li>
                    Projects
                </li>
                <li>
                    About
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 100px;
  }
`