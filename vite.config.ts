import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// Set VITE_BASE_PATH if the site is served from a sub-folder (e.g. "/paramedical/").
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
  // Mirrors the production rewrite (vercel.json / _redirects) so /legacy/* media works in dev and preview.
  server: { proxy: { '/legacy': { target: 'http://amaltasgroup.co.in', changeOrigin: true, rewrite: (p) => p.replace(/^\/legacy/, '/paramedical') } } },
  preview: { proxy: { '/legacy': { target: 'http://amaltasgroup.co.in', changeOrigin: true, rewrite: (p) => p.replace(/^\/legacy/, '/paramedical') } } },
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
});
