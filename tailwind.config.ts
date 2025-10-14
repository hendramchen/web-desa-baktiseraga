import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "balinese-cream": "var(--balinese-cream)",
        "balinese-beige": "var(--balinese-beige)",
        "balinese-tan": "var(--balinese-tan)",
        "balinese-green": "var(--balinese-green)",
      },
    },
  },
  plugins: [],
} satisfies Config;
