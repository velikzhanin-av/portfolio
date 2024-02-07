import styled from "styled-components";


type FlexWrapperPropsType = {
    direction?: string,
    justify?: string,
    align?: string,
    wrap?: string,
}


export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  justify-content: ${props => props.justify || "flex-start" };
  align-items: ${props => props.align || "stretch" };
  flex-direction: ${props => props.direction || "row" };
  flex-wrap: ${props => props.wrap || "nowrap" };
`