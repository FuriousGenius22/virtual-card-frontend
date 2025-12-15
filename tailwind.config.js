import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        /* ---------- Core UI ---------- */
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],

        /* ---------- Card Typography (Primary) ---------- */
        inter: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],

        /* ---------- Headlines / Marketing ---------- */
        playfair: [
          "Playfair Display",
          "Georgia",
          "serif",
        ],

        /* ---------- Technical / EMV / Numbers ---------- */
        mono: [
          "Roboto Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],

        /* ---------- Optional Premium Fonts ---------- */
        grotesk: [
          "Space Grotesk",
          "Inter",
          "sans-serif",
        ],

        display: [
          "DM Sans",
          "Inter",
          "sans-serif",
        ],
      },

      /* ---------- Font Weights ---------- */
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },

      /* ---------- Letter Spacing ---------- */
      letterSpacing: {
        tightest: "-0.05em",
        tighter: "-0.025em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },

      /* ---------- Line Heights ---------- */
      lineHeight: {
        snug: "1.1",
        normal: "1.25",
        relaxed: "1.4",
      },
    },
  },
  plugins: [nextui()],
};
tailwind.config.js
