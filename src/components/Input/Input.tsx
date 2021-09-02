import styled, { css } from "styled-components";
import { colorScheme } from "styles/color.scheme";
import { fontsScheme } from "styles/fonts.scheme";

const shared = css`
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

export const Input = styled.input`
  ${shared}
`;

export const Textarea = styled.textarea`
  ${shared}
`;
