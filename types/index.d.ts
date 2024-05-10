/// <reference types="./jsx" />

export declare function html5(
  tag: Function | string,
  attrs?: { [key: string]: any },
  ...children: (HTMLElement | string)[]
): HTMLElement | SVGAElement

export declare function fragment(
  _attrs?: { [key: string]: any },
  ...children: (HTMLElement | string)[]
): (HTMLElement | string)[]

export declare function clear(elm: HTMLElement): void

export declare function createSignal<T>(value: T): {
  get: (template?: string) => any;
  refer: (elm: HTMLElement, event: string) => void;
  relay: (elm: HTMLElement, prop: string, template?: string) => void;
  set: (next: T) => void;
  sync: (elm: HTMLElement) => boolean;
}
