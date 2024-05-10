import { createSignal } from '../core/signal'

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
        {count.get('Init Count: ${self}')}
      </span>
    </div>
  )
}
