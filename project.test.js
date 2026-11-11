const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const projectRoot = path.join(__dirname, '..');

test('game entry point exists and contains the Street Soccer game', () => {
  const html = fs.readFileSync(path.join(projectRoot, 'public', 'index.html'), 'utf8');
  assert.match(html, /<title>Street Soccer 3D<\/title>/);
  assert.match(html, /id="game-source"/);
  assert.match(html, /THREE/);
});

test('server and package metadata exist', () => {
  assert.equal(fs.existsSync(path.join(projectRoot, 'server.js')), true);
  const pkg = JSON.parse(fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf8'));
  assert.equal(pkg.scripts.start, 'node server.js');
});
