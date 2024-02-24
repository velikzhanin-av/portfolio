import styled from "styled-components";
import {theme} from "../styles/Theme";

export const StyledButton = styled.button`
  width: 50%;
  height: 45px;
  margin: 30px auto 0;
  cursor: pointer;
  border-radius: 6px;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.font};
  
  &:hover {
    opacity: 0.8;
  }
`