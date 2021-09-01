import styled from "styled-components";
import { colorScheme } from "styles/color.scheme";
import { fontsScheme } from "styles/fonts.scheme";

export const Input = styled.input`
  font-size: 1em;
  font-weight: bold;
  font-family: ${fontsScheme.primary};
  padding: 10px;
  margin: 10px;
  background-color: ${colorScheme.secondary};
  color: ${colorScheme.primary};
  border: none;
  outline: none;
  border-radius: 0.5em;
  ::placeholder {
    color: black;
    font-weight: lighter;
  }
`;
