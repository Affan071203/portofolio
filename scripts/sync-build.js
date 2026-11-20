import fs from 'fs';

try {
  if (fs.existsSync('dist/index.source.html')) {
    fs.copyFileSync('dist/index.source.html', 'index.html');
    fs.copyFileSync('dist/index.source.html', 'dist/index.html');
  } else if (fs.existsSync('dist/index.html')) {
    fs.copyFileSync('dist/index.html', 'index.html');
  }

  if (fs.existsSync('dist/assets')) {
    fs.cpSync('dist/assets', 'assets', { recursive: true });
  }
  console.log('Build output successfully synced to root and assets/ for GitHub Pages compatibility.');
} catch (err) {
  console.error('Sync failed:', err);
}
