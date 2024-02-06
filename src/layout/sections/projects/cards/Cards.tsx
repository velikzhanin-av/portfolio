import React from 'react';
import styled from "styled-components";
import {Card} from "../card/Card";

export const Cards = () => {
    return (
        <StyledCards>

        </StyledCards>
    );
};

const StyledCards = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #d7d7d7;
  flex-wrap: wrap;
`