interface EscapeMap {
  [key: string]: string
}
const escapeMap: EscapeMap = {
  '&': 'amp',
  '<': 'lt',
  '>': 'gt',
  '"': 'quot',
  "'": '#39',
  '/': '#x2F',
}

const escapeHtml = (str: object[] | string) =>
  String(str).replace(/[&<>"'\/\\]/g, (s) => `&${escapeMap[s]};`)

// To keep some consistency with React DOM, lets use a mapper
// https://reactjs.org/docs/dom-elements.html
const AttributeMapper = (val: string) =>
  ({
    tabIndex: 'tabindex',
    className: 'class',
    readOnly: 'readonly',
  }[val] || val)

export function html5(
  tag: Function | string,
  attrs?: { [key: string]: any },
  ...children: (HTMLElement | string)[]
) {
  attrs = attrs || {}
  const stack: any[] = [...children]

  // Support for components(ish)
  if (typeof tag === 'function') {
    attrs.children = stack
    return tag(attrs)
  }

  // Support some SVG elements
  const svgs = ['svg', 'g', 'path']
  const elm = svgs.includes(tag)
    ? document.createElementNS('http://www.w3.org/2000/svg', tag)
    : document.createElement(tag)

  // Add attributes
  for (let [name, val] of Object.entries(attrs)) {
    name = escapeHtml(AttributeMapper(name))
    if (name.startsWith('on') && name.toLowerCase() in window) {
      elm.addEventListener(name.toLowerCase().substring(2), val)
    } else if (name === 'ref') {
      val(elm)
    } else if (name === 'style') {
      Object.assign(elm.style, val)
    } else if (val === true) {
      elm.setAttribute(name, name)
    } else if (val !== false && val != null) {
      elm.setAttribute(name, escapeHtml(val))
    } else if (val === false) {
      elm.removeAttribute(name)
    }
  }

  // Append children
  while (stack.length) {
    const child = stack.shift()

    // Is child a leaf?
    if (!Array.isArray(child)) {
      elm.appendChild(
        (child as HTMLElement).nodeType == null
          ? document.createTextNode(child.toString())
          : child
      )
    } else {
      stack.push(...child)
    }
  }

  return elm
}

export const fragment = (
  _attrs?: { [key: string]: any },
  ...children: (HTMLElement | string)[]
): (HTMLElement | string)[] => {
  return children
}
