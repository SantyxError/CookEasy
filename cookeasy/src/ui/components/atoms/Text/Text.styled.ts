import styled, { css } from "styled-components";
import React from "react";
import { TextProps } from "./Text";

const sizeMap: Record<string, string> = {
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "10": "10",
};

const commonTextStyles = css<TextProps>`
  font-weight: ${({ fontWeight = "normal" }) => fontWeight};
  font-style: ${({ fontStyle = "normal" }) => fontStyle};
  text-align: ${({ align = "justify" }) => align};
  color: ${({ color, theme }) => color || (theme && theme.color.grey)};
  line-height: ${({ lineHeight, theme }) =>
    lineHeight || (theme && theme.lineHeight["5"])};
  letter-spacing: ${({ letterSpacing = "normal" }) => letterSpacing};
  text-decoration: ${({ textDecoration = "none" }) => textDecoration};
  text-transform: ${({ textTransform = "none" }) => textTransform};
  margin: ${({ margin = "0" }) => margin};
  padding: ${({ padding = "0" }) => padding};
  background-color: ${({ backgroundColor = "transparent" }) => backgroundColor};
  text-shadow: ${({ textShadow = "none" }) => textShadow};
  white-space: ${({ whiteSpace = "normal" }) => whiteSpace};
  word-break: ${({ wordBreak = "normal" }) => wordBreak};
`;

const generateHeadingStyles = (
  defaultFontSize: string,
  tabletFontSizeKey: string,
  fontWeight: number
) => css<TextProps>`
  ${commonTextStyles};
  padding: ${({ theme }) =>
    theme && `${theme.spacing["1"]} ${theme.spacing["4"]}`};
  font-size: ${({ theme, size }) =>
    size ? theme.fontSize[sizeMap[size]] : theme.fontSize[defaultFontSize]};
  font-weight: ${fontWeight};

  ${({ theme }) => theme && theme.mediaQueries.tablet} {
    font-size: ${({ theme }) => theme && theme.fontSize[tabletFontSizeKey]};
    padding: ${({ theme }) =>
      theme && `${theme.spacing["1"]} ${theme.spacing["2"]}`};
  }
`;

const TAG = {
  h1: generateHeadingStyles("10", "10", 700),
  h2: generateHeadingStyles("9", "7", 600),
  h3: generateHeadingStyles("8", "6", 500),
  h4: generateHeadingStyles("7", "5", 400),
  h5: generateHeadingStyles("6", "4", 300),
  h6: generateHeadingStyles("5", "3", 300),
  p: css<TextProps>`
    ${commonTextStyles};
    font-size: ${({ theme, size }) =>
      theme && theme.fontSize[sizeMap[size ?? "5"]]};

    ${({ theme }) => theme && theme.mediaQueries.tablet} {
      font-size: ${({ theme }) => theme && theme.fontSize["5"]};
      line-height: ${({ theme }) => theme && theme.lineHeight["4"]};
    }
  `,
  span: css<TextProps>`
    ${commonTextStyles};
    font-size: ${({ fontSize, theme }) =>
      fontSize || (theme && theme.fontSize["4"])};
  `,
  default: css``,
};

export const TextComponent = styled(
  ({ as = "span", children, className, ...rest }: TextProps) =>
    React.createElement(as, { className, ...rest }, children)
)`
  ${({ as }) => TAG[as as keyof typeof TAG] || TAG.default}
`;
