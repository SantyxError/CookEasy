import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/theme";
import GlobalStyles from "../src/styles/globalStyles";

type Decorator = (Story: React.ComponentType) => JSX.Element;

export const ThemeDecorator: Decorator = (Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Story />
  </ThemeProvider>
);
