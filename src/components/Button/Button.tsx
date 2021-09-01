import styled from "styled-components";
import { colorScheme } from "styles/color.scheme";
import { fontsScheme } from "styles/fonts.scheme";

interface ButtonProps {
  color: "primary" | "secondary";
}
export const Button = styled.button<ButtonProps>`
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid;
  border-color: ${({ color }) =>
    color === "secondary" ? "transparent" : colorScheme[color]};
  background-color: ${({ color }) =>
    color === "secondary" ? "transparent" : colorScheme[color]};
  margin: 0 0.3em 0.3em 0;
  border-radius: 1em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: ${fontsScheme.primary};
  font-size: 1em;
  font-weight: 700;
  color: ${({ color }) =>
    color === "secondary" ? colorScheme.primary : colorScheme[color]};
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    ${({ color }) =>
      color === "secondary"
        ? `
          border-bottom: 2px solid ${colorScheme.primary}
        `
        : `
    color: ${colorScheme[color]};
    background-color: ${colorScheme[color]};
    `}
  }
`;
