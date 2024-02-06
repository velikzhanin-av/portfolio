import React from 'react';
import styled from "styled-components";

type CardPropsType = {
    src: string,
    title: string,

}

export const Card = (props: CardPropsType) => {
    return (
        <StyledCard>
            <StyledImg src={props.src}/>
            <StyledTitle>{props.title}</StyledTitle>
        </StyledCard>
    );
};

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 375px;
  background-color: aquamarine;
  min-height: 500px;
  min-width: 370px;
  border-radius: 10px;
  margin: 15px;
`

const StyledImg = styled.img`
  width: 375px;
  height: 260px;
`

const StyledTitle = styled.h3`

`