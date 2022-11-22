import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import basicSsl from "@vitejs/plugin-basic-ssl"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/veganizeIt/",
  plugins: [react(), basicSsl],
})

// git remote add origin https://github.com/Daniel1231234/veganizeIt.git