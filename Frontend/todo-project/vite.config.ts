import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Adicione esta linha para escutar em todas as interfaces
    port: 5173, // A porta na qual o Vite deve rodar
  },
})
