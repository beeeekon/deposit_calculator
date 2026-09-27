import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {//позволяет Vite перенаправлять запросы с /api/* на бэкенд
    host: true,//слушает не только localhost а все сетевые интрефейсы для докера
    port: 5173,
    strictPort: true,//если 5173 занят ищи другой
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,//подменять заголовок Host на адрес бэкенда, так он не удивится чужому порту
      },
    },
  },
})
