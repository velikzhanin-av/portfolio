import React from 'react';
import {Icon} from "../../../../components/icons/icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string,
    title: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} height={"100"} width={"100"}/>
            {/*<SkillTitle>{props.title}</SkillTitle>*/}
        </StyledSkill>
    );
};

const SkillTitle = styled.h3`
  text-align: center;
`

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
`