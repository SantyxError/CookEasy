import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import React from "react";
import { render } from "@testing-library/react";

export const renderProvider = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

test("renderProvider renders without crashing", () => {
  const { container } = renderProvider(<div>Test</div>);
  expect(container).toBeInTheDocument();
});
