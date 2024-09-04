import React from "react";
import Text from "../ui/components/atoms/Text/Text";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import GlobalStyles from "../styles/globalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Text as="p" size="1">
        Hola
      </Text>
      <Text as="p" size="2">
        Hola
      </Text>
      <Text as="p" size="3">
        Hola
      </Text>
      <Text as="p" size="4">
        Hola
      </Text>
      <Text as="p" size="5">
        Hola
      </Text>
      <Text as="p" size="6">
        Hola
      </Text>
      <Text as="p" size="7">
        Hola
      </Text>
      <Text as="p" size="8">
        Hola
      </Text>
      <Text as="p" size="9">
        Hola
      </Text>
      <Text as="p" size="10">
        Hola
      </Text>
      <Text as="h1">Hola</Text>
      <Text as="h2">Hola</Text>
      <Text as="h3">Hola</Text>
    </ThemeProvider>
  );
}

export default App;
