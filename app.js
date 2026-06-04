// Hostinger Passenger entry point — serves Next.js static export
const http = require('http');
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'out');
const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'application/javascript',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.xml': 'application/xml', '.txt': 'text/plain',
};
const ROUTES = ['/pcb-manufacturing','/pcb-assembly','/capabilities','/quality','/about','/blog','/contact','/thank-you','/welcome'];

function serve(req, res) {
  let url = req.url.split('?')[0];
  if (url === '/') url = '/index.html';
  let fp = path.join(OUT, url);
  const ext = path.extname(fp);

  if (!ext || ROUTES.includes(url)) {
    fp = path.join(OUT, url + '.html');
  }

  fs.readFile(fp, (err, data) => {
    if (!err) {
      res.writeHead(200, { 'Content-Type': MIME[path.extname(fp)] || 'application/octet-stream' });
      return res.end(data);
    }
    // 404
    fs.readFile(path.join(OUT, '404.html'), (_, d) => {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(d || 'Not Found');
    });
  });
}

http.createServer(serve).listen(process.env.PORT || 3000);
