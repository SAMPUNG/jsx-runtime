const elements: Record<string, HTMLElement> = {}
const handler = { set: handleSet }
const proxy = new Proxy({}, handler)
const refs: Record<string, string> = {}
const relays: Record<string, string[]> = {}
const templates: Record<string, string> = {}

export function clear(elm: HTMLElement) {
  elm.removeAttribute('data-signal')
}

export function createSignal<T>(value: T) {
  const key = crypto.randomUUID()
  const descriptor = {
    configurable: false,
    enumerable: true,
    value,
    writable: true,
  }
  Object.defineProperty(proxy, key, descriptor)

  function get(template?: string) {
    const value = proxy[key]
    return template ? template.replace(/\$\{self\}/g, value) : value
  }
  function set(next: T) {
    proxy[key] = next
  }

  function refer(elm: HTMLElement, event: string) {
    const id = registerElement(key, elm)
    registerRefer(key, id, event)
  }

  function relay(elm: HTMLElement, prop: string, template?: string) {
    const id = registerElement(key, elm)
    registerRelay(key, id, prop)
    registerTemplate(id, prop, template)
  }

  function sync(elm: HTMLElement): boolean {
    if (elm.tagName !== 'INPUT') {
      return false
    }
    const id = registerElement(key, elm)
    registerRefer(key, id, 'change')
    registerRelay(key, id, 'value')
    return true
  }

  return {
    get,
    refer,
    relay,
    set,
    sync,
  }
}

/** Handler for refer */
function handleRefer(evt: Event) {
  const elm = evt.target as HTMLElement
  const signal = elm.dataset.signal
  if (!signal) {
    return
  }
  proxy[signal] = readDataFromEvent(evt)
}
/** Handler for Proxy Setter */
function handleSet(target: any, key: string, value: any, receiver?: unknown) {
  relays[key].forEach((str) => updateElement(str, value))
  return Reflect.set(target, key, value, receiver)
}

/** Get data from event */
function readDataFromEvent(evt: Event): any {
  const elm = evt.target
  if (elm && 'tagName' in elm && elm.tagName === 'INPUT') {
    return (elm as HTMLInputElement).value
  }
  if ('detail' in evt) {
    return evt.detail
  }
  if ('message' in evt) {
    return evt.message
  }
  return undefined
}

/** Check or register element, retuen the unique id */
function registerElement(signal: string, elm: HTMLElement): string {
  if (elm.hasAttribute('data-unique')) {
    return elm.getAttribute('data-unique')!
  }
  const uid = crypto.randomUUID()
  elm.setAttribute('data-signal', signal)
  elm.setAttribute('data-unique', uid)
  elements[uid] = elm
  return uid
}
/** Check or register Refer */
function registerRefer(signal: string, element: string, event: string) {
  if (refs[signal]) {
    const [id, name] = refs[signal].split('@')[0]
    const elm = elements[id]
    elm.removeEventListener(name, handleRefer)
  }
  const uid = element + '@' + event
  refs[signal] = uid
  elements[element].addEventListener(event, handleRefer)
}
/** Check or register relay */
function registerRelay(signal: string, element: string, prop: string) {
  if (relays[signal] === undefined) {
    relays[signal] = []
  }
  const uid = element + '@' + prop
  relays[signal].push(uid)
}
/** Check or register template */
function registerTemplate(element: string, prop: string, template?: string) {
  if (template) {
    const uid = element + '@' + prop
    templates[uid] = template
  }
}

function updateElement(uid: string, value: any) {
  const [id, prop] = uid.split('@')
  const elm = elements[id]
  if (!elm.dataset.signal) {
    delete elements[id]
    return
  }
  const template = templates[uid] || '${self}'
  const result = template.replace(/\$\{self\}/g, value)
  if (prop === 'text') {
    elm.textContent = result
    return
  }
  if (prop === 'value' && elm.tagName === 'INPUT') {
    ;(elm as HTMLInputElement).value = value
    return
  }
  elm.setAttribute(prop, result)
}
