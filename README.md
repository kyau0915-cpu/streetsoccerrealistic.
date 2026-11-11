# Street Soccer 3D

A browser-based Street Soccer 3D game packaged as a small Node.js project.

## Requirements

- Node.js 18 or newer
- Internet connection when loading the game (Three.js and Google Fonts are loaded from CDNs)

## Run locally

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

To use a different port:

```bash
PORT=8080 npm start
```

On Windows PowerShell:

```powershell
$env:PORT=8080; npm start
```

## Tests

```bash
npm test
```

## Project structure

```text
streetsoccer-project/
├── public/
│   └── index.html
├── test/
│   └── project.test.js
├── .gitignore
├── package.json
├── README.md
└── server.js
```
