import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import basicSsl from "@vitejs/plugin-basic-ssl"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl],
  base: "/",
  build: {
    outDir: "../backend/public",
    emptyOutDir: true,
  },
})

// git remote add origin https://github.com/Daniel1231234/veganizeIt.git