import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: max-content;
  text-align: center;
  padding-block: 1.2rem;
  padding-inline: 5rem;
  text-transform: uppercase;
  font-weight: 600;
  border: 1px solid ${({theme}) => theme.COLORS.BLACK};
  background-color: ${props => props.isBlack ? props.theme.COLORS.BLACK : props.theme.COLORS.WHITE};
  color: ${props => props.isBlack ? props.theme.COLORS.WHITE : props.theme.COLORS.BLACK};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: ${props => props.isBlack ? props.theme.COLORS.WHITE : props.theme.COLORS.BLACK};
    color: ${props => props.isBlack ? props.theme.COLORS.BLACK : props.theme.COLORS.WHITE};
  }

`