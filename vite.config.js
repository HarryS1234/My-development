import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5181, // Explicitly set port
    allowedHosts: [
      '2544-65-95-241-241.ngrok-free.app', // Add your ngrok host here (without https://)
    ],
  },
  plugins: [react(), tailwindcss()],
});