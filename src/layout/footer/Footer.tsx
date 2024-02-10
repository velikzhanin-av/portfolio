import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {menu} from "../header/Header";
import {Icon} from "../../components/icons/icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={"space-between"}>
                <Menu items={menu}/>
                <Copyright>© 2024 Aleksandr Velikzhanin, All Rights Reserved.</Copyright>
                <Links>
                    <Icon height={'50'} width={'50'} iconId={"telegram"}/>
                    <Icon height={'50'} width={'50'} iconId={"linkedin"}/>
                    <Icon height={'50'} width={'50'} iconId={"telegram"}/>
                </Links>

            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: beige;
`

const Copyright = styled.small`
`

const Links = styled.div`

`



