# Pontue Integration Docs

Integration API documentation for the Pontue platform, written in OpenAPI 3.1 (`openapi/openapi.yaml`) and rendered
with [Scalar](https://github.com/scalar/scalar).

Published at: https://pontue.github.io/integration-docs/

## Requirements

- Node.js 24 (version pinned in `.nvmrc`; run `nvm use`)

## Install

```sh
npm install
```

## Usage

| Command           | What it does                                                                                                                                                                                                |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `npm start`       | Serves the API reference from `openapi/openapi.yaml` at http://localhost:8082 and reloads on every change. Uses Scalar's default page, so it does not reflect the custom configuration in `src/index.html`. |
| `npm run preview` | Builds the site and serves `dist/` at http://localhost:8082. This is exactly what gets published.                                                                                                           |
| `npm run build`   | Generates the static site in `dist/` (not committed).                                                                                                                                                       |
| `npm test`        | Validates `openapi/openapi.yaml` against the OpenAPI specification.                                                                                                                                         |

## Project structure

| Path                   | Content                                                                                                  |
|------------------------|----------------------------------------------------------------------------------------------------------|
| `openapi/openapi.yaml` | The API definition. All endpoint changes go here.                                                        |
| `src/index.html`       | HTML template and Scalar configuration (theme, locale, disabled features, auth).                         |
| `scripts/build.mjs`    | Build script: copies the template, the OpenAPI document, the Scalar bundle and the favicon into `dist/`. |
| `docs/favicon.png`     | Favicon.                                                                                                 |

## Updating the docs

1. Edit `openapi/openapi.yaml`.
2. Check it with `npm start` while editing and `npm run preview` before opening the pull request.
3. Run `npm test`.

Descriptions accept Markdown and inline HTML (`<br>`, `<strong>`). Multi-line quoted strings must keep the closing quote
indented deeper than the key, otherwise Scalar fails to load the document.

## Deployment

The site is built and published to GitHub Pages by GitHub Actions. Pull requests only validate and build; pushes to
`main` publish.
