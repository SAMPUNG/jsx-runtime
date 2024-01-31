# jsx-runtime

- CMD

```cmd
npm install @jugar/jsx-runtime
```

- tsconfig.json

```json
{
  "compilerOptions": {
    /** JSX */
    "jsx": "preserve",
    "jsxFactory": "html5",
    "jsxFragmentFactory": "fragment",
    "jsxImportSource": "@jugar"
  }
}
```

- vite-env.d.ts

```ts
/// <reference types="@jugar/jsx-runtime" />
```

- vite.config.ts

```ts
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsx: 'transform',
    jsxFactory: 'html5',
    jsxFragment: 'fragment',
    jsxInject: `import { html5, fragment } from '@jugar/jsx-runtime'\n\n`,
  },
})

```
