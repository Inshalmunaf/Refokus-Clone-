import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"], // Register the font
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        bold: "700",
      },
    },
  },
  plugins: [react(),tailwindcss(),],


})
