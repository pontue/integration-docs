import { cp, mkdir, rm } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

// Not exposed via the package "exports", so it is read from node_modules directly.
// The bundle is self-contained (no lazy-loaded chunks) as of 1.72.1; re-check when upgrading.
const scalarBundle = join(root, 'node_modules/@scalar/api-reference/dist/browser/standalone.js')

const files = [
  [join(root, 'src/index.html'), join(dist, 'index.html')],
  [join(root, 'openapi/openapi.yaml'), join(dist, 'openapi/openapi.yaml')],
  [scalarBundle, join(dist, 'standalone.js')],
  [join(root, 'docs/favicon.png'), join(dist, 'favicon.png')],
]

await rm(dist, { recursive: true, force: true })

for (const [from, to] of files) {
  await mkdir(dirname(to), { recursive: true })
  await cp(from, to)
}

console.log(`Built ${files.length} files into ${dist}`)
