export declare function html5(
  tag: Function | string,
  attrs?: { [key: string]: any },
  ...children: (HTMLElement | string)[]
): HTMLElement | SVGAElement

export declare function fragment(
  _attrs?: { [key: string]: any },
  ...children: (HTMLElement | string)[]
): (HTMLElement | string)[]
