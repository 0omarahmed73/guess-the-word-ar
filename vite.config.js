import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

// PWA Manifest configuration
const manifestForPlugIn = {
  registerType: 'autoUpdate', // Automatically updates the service worker
  injectRegister: 'auto', // Automatically injects the service worker registration code
  includeAssets: ['draw_svg20210709-31688-va7bmk.svg.ico', 'masked-icon.png'],
  manifest: {
    name: 'Guess The Word',
    short_name: 'Guess The Word',
    description: 'I am a simple Vite app',
    icons: [
      {
        src: '/draw_svg20210709-31688-va7bmk.svg.ico',
        sizes: '256x256',
        type: 'image/x-icon',
        purpose: 'favicon',
      },
      {
        src: '/maskable_icon.png',
        sizes: '256x256',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    theme_color: '#171717',
    background_color: '#f0e7db',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait',
  },
};

// Vite Configuration
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
});
