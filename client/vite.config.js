import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: true,
        changeOrigin: true,
      },
    },
  },

  plugins: [react()],
  resolve: {
    alias: {
      '@ionic/react': 'ionicons',
    },
  },
  css: {
    // Configure Vite to handle CSS modules and global CSS
    modules: {
      // Enable CSS modules if needed
    },
    // Ensure that Vite can load CSS from external packages correctly
    preprocessorOptions: {
      // Add any necessary options here
    },
  },
});
