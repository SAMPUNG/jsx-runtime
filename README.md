# How to use jsx-runtime

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

# How to use signal

```ts
import { createSignal } from '@jugar/jsx-runtime'

export function HelloWorld() {
  const count = createSignal(0)

  return (
    <div className="jsx-runtime-demo">
      <button
        onclick={() => {
          count.set(count.get() + 1)
        }}
        ref={(elm) => {
          count.relay(elm, 'title')
        }}
        type="button"
      >
        Increase
      </button>
      <input
        id="count"
        name="count"
        ref={(elm) => {
          count.sync(elm)
        }}
        type="number"
        value={count.get()}
      />
      <span
        ref={(elm) => {
          count.relay(elm, 'text', 'Current: ${self}')
        }}
      >
        {count.get()}
      </span>
    </div>
  )
}

```

**Methods**

| Name  | Description                                                 | Parameters                  |
| ----- | ----------------------------------------------------------- | --------------------------- |
| get   | Get Currrent State With Optional Template                   | template                    |
| refer | Refer Element Event Data Into State                         | element, eventName          |
| relay | Relay State Into Element's Property With Optional Template | element, propName, template |
| set   | Set State                                                   | next                        |
| sync  | Bind State With `<input>` by `value` Property           | element                     |
