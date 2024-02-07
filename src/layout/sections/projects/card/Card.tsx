import React from 'react';
import styled from "styled-components";

type CardPropsType = {
    src: string,
    title: string,
    description: string,
}

export const Card = (props: CardPropsType) => {
    return (
        <StyledCard>
            <StyledImg src={props.src}/>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledDescription>{props.description}</StyledDescription>
        </StyledCard>
    );
};

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: aquamarine;
  min-height: 500px;
  max-width: 375px;
  border-radius: 10px;
  margin: 15px;
  padding: 10px;
`

const StyledImg = styled.img`
  width: 100%;
  height: 260px;
  border-radius: 10px;
  object-fit: cover;
`

const StyledTitle = styled.h3`

`
const StyledDescription = styled.div`

`