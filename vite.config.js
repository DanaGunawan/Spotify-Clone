import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import autoprefixer from "autoprefixer";
export default defineConfig({
  root: "./src",
  plugins: [tailwindcss(), autoprefixer()],
});
