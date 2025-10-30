/* eslint-env node */
import { webcrypto } from 'crypto'

import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'


// https://vite.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const signBundle = () => ({
    name: 'sign-bundle',
    writeBundle: async (options, bundle) => {
      const privateKeyB64 = env.PRIVATE_KEY
      const isPR = env.IS_PR === 'true' || process.env.IS_PR === 'true'

      if (!privateKeyB64) {
        if (isPR) {
          console.warn('⚠️  PR build - skipping bundle signing')
          return
        }
        throw new Error('❌ PRIVATE_KEY environment variable is required for bundle signing')
      }

      try {
        const fs = await import('fs/promises')
        const path = await import('path')

        const privateKeyBuffer = Buffer.from(privateKeyB64, 'base64')
        const privateKey = await webcrypto.subtle.importKey('pkcs8', privateKeyBuffer, { name: 'Ed25519' }, false, [
          'sign',
        ])

        for (const fileName in bundle) {
          const file = bundle[fileName]
          if (file.type === 'chunk') {
            console.log(`Processing ${fileName}...`)

            // Apply modifications that were previously inside Makefile before signing
            let modifiedCode = file.code

            // Add eslint-disable comment at the beginning
            modifiedCode = '/* eslint-disable */\n' + modifiedCode

            // Update sourcemap URL to GitHub Pages URL
            modifiedCode = modifiedCode.replace(
              /\/\/# sourceMappingURL=([^.]+\.umd\.js\.map)/g,
              '//# sourceMappingURL=https://traefik.github.io/traefiklabs-hub-button-app/main-v1.umd.js.map',
            )

            file.code = modifiedCode

            console.log(`Signing ${fileName}...`)
            const signature = await webcrypto.subtle.sign(
              { name: 'Ed25519' },
              privateKey,
              new TextEncoder().encode(modifiedCode),
            )

            const filePath = path.join(options.dir, fileName)
            await fs.writeFile(filePath, modifiedCode)

            const sigFilePath = path.join(options.dir, `${fileName}.sig`)
            await fs.writeFile(sigFilePath, new Uint8Array(signature))
          }
        }

      } catch (error) {
        console.error('Bundle signing failed:', error)
        throw error
      }
    },
  })

  return defineConfig({
    plugins: [react(), viteTsconfigPaths(), signBundle()],
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['test/setup.ts'],
      coverage: {
        reporter: ['text', 'json', 'html'],
      },
    },
    define: {
      'process.env': {
        NODE_ENV: 'production',
      },
    },
    build: {
      lib: {
        entry: './src/index.tsx',
        name: 'hub-button-app',
        formats: ['umd'],
        fileName: (format) => `hub-button-app.${format}.js`,
      },
      sourcemap: true,
      target: 'esnext',
    },
    server: {
      open: true,
      port: 3003,
    },
  })
}
