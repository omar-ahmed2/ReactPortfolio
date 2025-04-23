import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/AdminPro/', // ← حط اسم الريبو هنا بالظبط
});
