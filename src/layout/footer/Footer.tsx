import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {menu} from "../header/Header";
import {Icon} from "../../components/icons/icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Menu items={menu}/>
                    <Copyright>© 2024 Aleksandr Velikzhanin, All Rights Reserved.</Copyright>
                    <Links>
                        <Icon height={'50'} width={'50'} iconId={"github"}/>
                        <Icon height={'50'} width={'50'} iconId={"linkedin"}/>
                        <Icon height={'50'} width={'50'} iconId={"telegram"}/>
                    </Links>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg}
`

const Copyright = styled.small`
`

const Links = styled.div`

`



