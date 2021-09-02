import styled from "styled-components";
import { colorScheme } from "styles/color.scheme";
import { fontsScheme } from "styles/fonts.scheme";

interface ButtonProps {
  color: "primary" | "secondary";
}
export const Button = styled.button<ButtonProps>`
  display: inline-block;
  padding: 0.4em 1.3em;
  border: 0.1em solid;
  border-color: ${({ color }) =>
    color === "secondary" ? "transparent" : colorScheme[color]};
  background-color: ${({ color }) =>
    color === "secondary" ? "transparent" : colorScheme[color]};
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.7em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: ${fontsScheme.primary};
  font-size: 0.9em;
  font-weight: 700;
  color: ${({ color }) =>
    color === "secondary" ? colorScheme.primary : colorScheme.secondary};
  text-align: center;
  transition: background-color 0.2s;
  cursor: pointer;
  &:hover {
    ${({ color }) =>
      color === "secondary"
        ? `
          border-bottom: 0.1em solid ${colorScheme.primary};
          border-radius: 0.3em;

        `
        : `
    color: ${colorScheme[color]};
    background-color: ${colorScheme.secondary};
    border: 0.1em solid ${colorScheme.primary}
    `}
  }
`;
