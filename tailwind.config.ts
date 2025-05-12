import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        "tight-44": "0.0275rem",
        "tight-56": "0.035rem",
      },
      colors: {
        primary: {
          DEFAULT: "#1e4841",
        },
        secondary: {
          DEFAULT: "#bbf49c",
        },
        white: "#fff",
        increase: "#60D591",
        "main-primary": "#1e4841",
        "main-secondary": "#bbf49c",
        B1B1B1: "#B1B1B1",
        contrast: "#121212",
        accent1: "#a3a3a3",
        accent2: "#6b7271",
        accent3: "#e5e6e6",
        tertiary: "#ecf4e9",
        success: "#1ea031",
        error: "#ff434e",
        warring: "#EEAF00",
        ui: {
          text: {
            white: "#fff",
            // increase: "#60D591",
            // B1B1B1: "#B1B1B1",
            // contrast: "#121212",
            // accent1: "#a3a3a3",
            // accent2: "#6b7271",
            // accent3: "#e5e6e6",
            // tertiary: "#ecf4e9",
            // success: "#1ea031",
            // error: "#ff434e",
          },
          border: {
            "white-16": "rgba(255, 255, 255, 0.16)",
            "white-24": "rgba(255, 255, 255, 0.24)",
          },
          background: {
            white: "#fff",
            "white-24": "rgba(255, 255, 255, 0.24)",
            "white-16": "rgba(255, 255, 255, 0.16)",
            "black-24": "rgba(0, 0, 0, 0.24)",
            222: "#222",
          },
        },
      },
      fontSize: {
        "10": "0.625rem",
        "11": "0.6875rem",
        "12": "0.75rem",
        "13": "0.8125rem",
        "14": "0.875rem",
        "16": "1rem",
        "17": "1.0625rem",
        "18": "1.125rem",
        "19": "1.1875rem",
        "20": "1.25rem",
        "24": "1.5rem",
        "32": "2rem",
      },
      fontWeight: {
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
      },
      lineHeight: {
        100: "100%",
        120: "120%",
        140: "140%",
        150: "150%",
        160: "160%",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        primary: ["SF Pro Display", "sans-serif"],
        secondary: ["Clash Display", "sans-serif"],
      },
      borderRadius: {
        12: "0.75rem",
        16: "1rem",
        24: "1.5rem",
      },
      padding: {
        "bottom-page": "3rem",
      },
    },
  },
  plugins: [],
};

export default config;
