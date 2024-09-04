interface DefaultTheme {
  color: {
    primary: string;
    secondary: string;
    accent: string;
    white: string;
    black: string;
    grey: string;
    lightGrey: string;
    darkGrey: string;
  };

  background: {
    primary: string;
    secondary: string;
    accent: string;
    light: string;
    dark: string;
  };

  fontFamily: {
    primary: string;
    secondary: string;
    accent: string;
  };

  fontSize: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
  };

  spacing: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
  };

  borderRadius: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
  };

  border: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
  };

  boxShadow: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
  };

  lineHeight: {
    1: string; // Tamaño más pequeño
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
  };

  opacity: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
  };

  mediaQueries: {
    mobile: string;
    tablet: string;
    desktop: string;
  };

  zIndex: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    9: number;
    10: number;
  };
}

export const theme: DefaultTheme = {
  color: {
    primary: "#3498db", // Azul claro
    secondary: "#2ecc71", // Verde claro
    accent: "#e74c3c", // Rojo
    white: "#ffffff",
    black: "#000000",
    grey: "#bdc3c7", // Gris claro
    lightGrey: "#ecf0f1", // Gris más claro
    darkGrey: "#34495e", // Gris oscuro
  },

  background: {
    primary: "#ecf0f1", // Fondo gris claro
    secondary: "#bdc3c7", // Fondo gris medio
    accent: "#2c3e50", // Fondo oscuro
    light: "#ffffff", // Blanco
    dark: "#2c3e50", // Gris oscuro
  },

  fontFamily: {
    primary: "Arial, sans-serif",
    secondary: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    accent: "'Courier New', Courier, monospace",
  },

  fontSize: {
    1: "0.6rem", // Tamaño más pequeño
    2: "0.8rem",
    3: "1rem",
    4: "1.2rem",
    5: "1.4rem",
    6: "1.6rem",
    7: "1.8rem",
    8: "2rem",
    9: "3rem",
    10: "4.5rem", // Tamaño más grande
  },

  spacing: {
    1: "0.4rem", // Espaciado más pequeño
    2: "0.8rem",
    3: "1.2rem",
    4: "1.6rem",
    5: "2rem",
    6: "2.4rem",
    7: "2.8rem",
    8: "3.2rem",
    9: "3.6rem",
    10: "4rem", // Espaciado más grande
  },

  borderRadius: {
    1: "0.2rem", // Radio de borde más pequeño
    2: "0.4rem",
    3: "0.6rem",
    4: "0.8rem",
    5: "1rem",
    6: "1.2rem",
    7: "1.4rem",
    8: "1.6rem",
    9: "1.8rem",
    10: "2rem", // Radio de borde más grande
  },

  border: {
    1: "0.1rem", // Ancho de borde más pequeño
    2: "0.2rem",
    3: "0.4rem",
    4: "0.6rem",
    5: "0.8rem",
    6: "1rem",
    7: "1.2rem",
    8: "1.4rem",
    9: "1.6rem",
    10: "2rem", // Ancho de borde más grande
  },

  boxShadow: {
    1: "0 1px 2px rgba(0, 0, 0, 0.1)",
    2: "0 2px 4px rgba(0, 0, 0, 0.15)",
    3: "0 3px 6px rgba(0, 0, 0, 0.2)",
    4: "0 4px 8px rgba(0, 0, 0, 0.25)",
    5: "0 6px 12px rgba(0, 0, 0, 0.3)",
    6: "0 8px 16px rgba(0, 0, 0, 0.35)",
    7: "0 10px 20px rgba(0, 0, 0, 0.4)",
    8: "0 12px 24px rgba(0, 0, 0, 0.45)",
    9: "0 14px 28px rgba(0, 0, 0, 0.5)",
    10: "0 16px 32px rgba(0, 0, 0, 0.55)",
  },

  lineHeight: {
    1: "0.6rem", // Tamaño más pequeño
    2: "0.8rem",
    3: "1rem",
    4: "1.2rem",
    5: "1.4rem",
    6: "1.6rem",
    7: "1.8rem",
    8: "2rem",
    9: "3rem",
    10: "4.5rem", // Tamaño más grande
  },

  opacity: {
    1: "0.1",
    2: "0.2",
    3: "0.3",
    4: "0.4",
    5: "0.5",
    6: "0.6",
    7: "0.7",
    8: "0.8",
    9: "0.9",
    10: "1", // Opacidad total
  },

  mediaQueries: {
    mobile: "@media (max-width: 48rem)",
    tablet: "@media (min-width: 48rem) and (max-width: 64rem)",
    desktop: "@media (min-width: 64rem)",
  },

  zIndex: {
    1: 10,
    2: 20,
    3: 30,
    4: 40,
    5: 50,
    6: 60,
    7: 70,
    8: 80,
    9: 90,
    10: 100, 
  },
};
