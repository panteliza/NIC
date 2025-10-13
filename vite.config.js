import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

// ==== Images (replace with your actual paths) ====
import campus01 from "../assets/campus01.jpeg";     // College exterior
import campus02 from "../assets/campus02.jpeg";     // Campus life
import classroom01 from "../assets/classroom01.jpeg"; // Classroom
import students01 from "../assets/students01.jpeg";   // Student group