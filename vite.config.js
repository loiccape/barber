import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'assets',
    outDir: 'build' // Spécifie le répertoire de sortie de la construction
  }
});