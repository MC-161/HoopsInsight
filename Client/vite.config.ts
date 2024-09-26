import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      VITE_API_URL: process.env.VITE_API_URL,
      VITE_YT_KEY: process.env.VITE_YT_KEY,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }, 
})
