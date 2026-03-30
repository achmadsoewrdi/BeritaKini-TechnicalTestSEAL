import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import https from 'https'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'html-proxy',
      configureServer(server) {
        server.middlewares.use('/api/html', (req, res) => {
          const urlStr = new URL(req.url, 'http://localhost').searchParams.get('url');
          if (!urlStr) {
            res.statusCode = 400;
            return res.end('Missing URL parameter');
          }
          https.get(urlStr, (response) => {
            let data = '';
            response.on('data', chunk => data += chunk);
            response.on('end', () => {
              res.setHeader('Content-Type', 'text/html');
              res.end(data);
            });
          }).on('error', (e) => {
            res.statusCode = 500;
            res.end(e.message);
          });
        });
      }
    }
  ],
  server: {
    proxy: {
      '/api/cnn-news': {
        target: 'https://berita-indo-api-next.vercel.app/api/cnn-news',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/cnn-news/, '')
      },
      '/api': {
        target: 'https://berita-indo-api-next.vercel.app',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
