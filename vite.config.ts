import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true,
    emptyOutDir: true,
    lib: {
      entry: './core/jsx-runtime.ts',
      fileName: 'index',
      formats: ['es', 'cjs'],
      name: 'jsxRuntime',
    },
    manifest: false,
    minify: 'esbuild',
    outDir: './dist',
    reportCompressedSize: true,
    sourcemap: false,
    target: 'es2015',
    write: true,
  },
  esbuild: {
    jsx: 'transform',
    jsxFactory: 'html5',
    jsxFragment: 'fragment',
    jsxInject: `import { html5, fragment } from 'core/jsx-runtime'\n\n`,
  },
  publicDir: false,
})
