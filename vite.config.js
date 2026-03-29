import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Ise add karo

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Ise list mein daal do
  ],
})