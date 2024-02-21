import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type MenuPropsType = {
    items: Array<string>
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {props.items.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href={`#${item}`}>{item}</Link>
                        </li>
                    )
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 50px;
    margin-right: 50px;
  }
`
const Link = styled.a`
  font-size: 25px;
  
  &:hover {
    color: ${theme.colors.font};
  }
`