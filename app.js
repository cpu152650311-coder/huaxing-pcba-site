// HUAXING PCBA — Hostinger Passenger entry point
// Serves Next.js static export from out/ directory
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, 'out');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css':   'text/css; charset=utf-8',
  '.js':    'application/javascript; charset=utf-8',
  '.json':  'application/json; charset=utf-8',
  '.png':   'image/png',
  '.jpg':   'image/jpeg',
  '.jpeg':  'image/jpeg',
  '.webp':  'image/webp',
  '.svg':   'image/svg+xml',
  '.ico':   'image/x-icon',
  '.xml':   'application/xml; charset=utf-8',
  '.txt':   'text/plain; charset=utf-8',
  '.md':    'text/plain; charset=utf-8',
};

// Pages that should serve .html without extension
const CLEAN_URLS = new Set([
  '/', '/about', '/contact', '/blog', '/capabilities', '/quality',
  '/products/pcb-manufacturing', '/products/pcb-assembly',
  '/thank-you', '/welcome',
]);

function getFilePath(url) {
  // Strip query string
  const clean = url.split('?')[0];
  
  // Root → index.html
  if (clean === '/' || clean === '') return path.join(OUT_DIR, 'index.html');
  
  // Has extension → direct file
  if (path.extname(clean)) return path.join(OUT_DIR, clean);
  
  // Blog post slugs
  if (clean.startsWith('/blog/')) return path.join(OUT_DIR, clean + '.html');
  
  // Known clean URLs → .html
  if (CLEAN_URLS.has(clean)) return path.join(OUT_DIR, clean + '.html');
  
  // Try as .html
  const htmlPath = path.join(OUT_DIR, clean + '.html');
  if (fs.existsSync(htmlPath)) return htmlPath;
  
  // Fallback: try exact path (for directories with index.html)
  return path.join(OUT_DIR, clean);
}

function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mime = MIME_TYPES[ext] || 'application/octet-stream';
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // 404 fallback
      fs.readFile(path.join(OUT_DIR, '404.html'), (e404, d404) => {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(d404 || 'Not Found');
      });
      return;
    }
    res.writeHead(200, { 'Content-Type': mime, 'Cache-Control': 'public, max-age=3600' });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const filePath = getFilePath(req.url);
  serveFile(res, filePath);
});

// Passenger sets PORT env var; fallback to 3000 for local testing
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('HUAXING PCBA static server running on port ' + port);
});

// Handle uncaught errors gracefully
process.on('uncaughtException', (err) => {
  console.error('Uncaught error:', err.message);
});
