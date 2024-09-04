import React from "react";
import { TextComponent } from "./Text.styled";

type Tag = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Size = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
type TextAlign = "left" | "center" | "right" | "justify";
type FontWeight = "normal" | "bold";
type FontStyle = "normal" | "italic";

export type TextProps = {
  children: React.ReactNode;
  as?: Tag;
  className?: string;
  size?: Size;
  align?: TextAlign;
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
  fontSize?: string;
  color?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textDecoration?: string;
  textTransform?: string;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  textShadow?: string;
  whiteSpace?: string;
  wordBreak?: string;
};

const Text: React.FC<TextProps> = ({
  children,
  as = "span",
  className,
  size,
  align = "justify",
  fontWeight,
  fontStyle,
  fontSize,
  color,
  lineHeight,
  letterSpacing,
  textDecoration,
  textTransform,
  margin,
  padding,
  backgroundColor,
  textShadow,
  whiteSpace,
  wordBreak,
}) => {
  return (
    <TextComponent
      as={as}
      className={className}
      size={size}
      align={align}
      fontWeight={fontWeight}
      fontStyle={fontStyle}
      fontSize={fontSize}
      color={color}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      textDecoration={textDecoration}
      textTransform={textTransform}
      margin={margin}
      padding={padding}
      backgroundColor={backgroundColor}
      textShadow={textShadow}
      whiteSpace={whiteSpace}
      wordBreak={wordBreak}>
      {children}
    </TextComponent>
  );
};

export default Text;
