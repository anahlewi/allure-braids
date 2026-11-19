import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves the site from /allure-braids/, so production assets need that prefix.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/allure-braids/' : '/',
}));
