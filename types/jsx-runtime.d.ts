declare namespace JSX {
  export interface HTMLAttributes<RefType extends EventTarget = EventTarget>
    extends ClassAttributes<RefType>,
      DOMAttributes<RefType>,
      AriaAttributes {
    // Standard HTML Attributes
    accept?: string | undefined | SignalLike<string | undefined>
    acceptCharset?: string | undefined | SignalLike<string | undefined>
    accessKey?: string | undefined | SignalLike<string | undefined>
    action?: string | undefined | SignalLike<string | undefined>
    allow?: string | undefined | SignalLike<string | undefined>
    allowFullScreen?: boolean | undefined | SignalLike<boolean | undefined>
    allowTransparency?: boolean | undefined | SignalLike<boolean | undefined>
    alt?: string | undefined | SignalLike<string | undefined>
    as?: string | undefined | SignalLike<string | undefined>
    async?: boolean | undefined | SignalLike<boolean | undefined>
    autocomplete?: string | undefined | SignalLike<string | undefined>
    autoComplete?: string | undefined | SignalLike<string | undefined>
    autocorrect?: string | undefined | SignalLike<string | undefined>
    autoCorrect?: string | undefined | SignalLike<string | undefined>
    autofocus?: boolean | undefined | SignalLike<boolean | undefined>
    autoFocus?: boolean | undefined | SignalLike<boolean | undefined>
    autoPlay?: boolean | undefined | SignalLike<boolean | undefined>
    capture?: boolean | string | undefined | SignalLike<string | undefined>
    cellPadding?: number | string | undefined | SignalLike<string | undefined>
    cellSpacing?: number | string | undefined | SignalLike<string | undefined>
    charSet?: string | undefined | SignalLike<string | undefined>
    challenge?: string | undefined | SignalLike<string | undefined>
    checked?: boolean | undefined | SignalLike<boolean | undefined>
    cite?: string | undefined | SignalLike<string | undefined>
    class?: string | undefined | SignalLike<string | undefined>
    className?: string | undefined | SignalLike<string | undefined>
    cols?: number | undefined | SignalLike<number | undefined>
    colSpan?: number | undefined | SignalLike<number | undefined>
    content?: string | undefined | SignalLike<string | undefined>
    contentEditable?: boolean | undefined | SignalLike<boolean | undefined>
    contextMenu?: string | undefined | SignalLike<string | undefined>
    controls?: boolean | undefined | SignalLike<boolean | undefined>
    controlsList?: string | undefined | SignalLike<string | undefined>
    coords?: string | undefined | SignalLike<string | undefined>
    crossOrigin?: string | undefined | SignalLike<string | undefined>
    data?: string | undefined | SignalLike<string | undefined>
    dateTime?: string | undefined | SignalLike<string | undefined>
    default?: boolean | undefined | SignalLike<boolean | undefined>
    defaultChecked?: boolean | undefined | SignalLike<boolean | undefined>
    defaultValue?: string | undefined | SignalLike<string | undefined>
    defer?: boolean | undefined | SignalLike<boolean | undefined>
    dir?:
      | 'auto'
      | 'rtl'
      | 'ltr'
      | undefined
      | SignalLike<'auto' | 'rtl' | 'ltr' | undefined>
    disabled?: boolean | undefined | SignalLike<boolean | undefined>
    disableRemotePlayback?:
      | boolean
      | undefined
      | SignalLike<boolean | undefined>
    download?: any | undefined
    decoding?:
      | 'sync'
      | 'async'
      | 'auto'
      | undefined
      | SignalLike<'sync' | 'async' | 'auto' | undefined>
    draggable?: boolean | undefined | SignalLike<boolean | undefined>
    encType?: string | undefined | SignalLike<string | undefined>
    enterkeyhint?:
      | 'enter'
      | 'done'
      | 'go'
      | 'next'
      | 'previous'
      | 'search'
      | 'send'
      | undefined
      | SignalLike<
          | 'enter'
          | 'done'
          | 'go'
          | 'next'
          | 'previous'
          | 'search'
          | 'send'
          | undefined
        >
    for?: string | undefined | SignalLike<string | undefined>
    form?: string | undefined | SignalLike<string | undefined>
    formAction?: string | undefined | SignalLike<string | undefined>
    formEncType?: string | undefined | SignalLike<string | undefined>
    formMethod?: string | undefined | SignalLike<string | undefined>
    formNoValidate?: boolean | undefined | SignalLike<boolean | undefined>
    formTarget?: string | undefined | SignalLike<string | undefined>
    frameBorder?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    headers?: string | undefined | SignalLike<string | undefined>
    height?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    hidden?:
      | boolean
      | 'hidden'
      | 'until-found'
      | undefined
      | SignalLike<boolean | 'hidden' | 'until-found' | undefined>
    high?: number | undefined | SignalLike<number | undefined>
    href?: string | undefined | SignalLike<string | undefined>
    hrefLang?: string | undefined | SignalLike<string | undefined>
    htmlFor?: string | undefined | SignalLike<string | undefined>
    httpEquiv?: string | undefined | SignalLike<string | undefined>
    icon?: string | undefined | SignalLike<string | undefined>
    id?: string | undefined | SignalLike<string | undefined>
    indeterminate?: boolean | undefined | SignalLike<boolean | undefined>
    inert?: boolean | undefined | SignalLike<boolean | undefined>
    inputMode?: string | undefined | SignalLike<string | undefined>
    integrity?: string | undefined | SignalLike<string | undefined>
    is?: string | undefined | SignalLike<string | undefined>
    keyParams?: string | undefined | SignalLike<string | undefined>
    keyType?: string | undefined | SignalLike<string | undefined>
    kind?: string | undefined | SignalLike<string | undefined>
    label?: string | undefined | SignalLike<string | undefined>
    lang?: string | undefined | SignalLike<string | undefined>
    list?: string | undefined | SignalLike<string | undefined>
    loading?:
      | 'eager'
      | 'lazy'
      | undefined
      | SignalLike<'eager' | 'lazy' | undefined>
    loop?: boolean | undefined | SignalLike<boolean | undefined>
    low?: number | undefined | SignalLike<number | undefined>
    manifest?: string | undefined | SignalLike<string | undefined>
    marginHeight?: number | undefined | SignalLike<number | undefined>
    marginWidth?: number | undefined | SignalLike<number | undefined>
    max?: number | string | undefined | SignalLike<string | undefined>
    maxLength?: number | undefined | SignalLike<number | undefined>
    media?: string | undefined | SignalLike<string | undefined>
    mediaGroup?: string | undefined | SignalLike<string | undefined>
    method?: string | undefined | SignalLike<string | undefined>
    min?: number | string | undefined | SignalLike<string | undefined>
    minLength?: number | undefined | SignalLike<number | undefined>
    multiple?: boolean | undefined | SignalLike<boolean | undefined>
    muted?: boolean | undefined | SignalLike<boolean | undefined>
    name?: string | undefined | SignalLike<string | undefined>
    nomodule?: boolean | undefined | SignalLike<boolean | undefined>
    nonce?: string | undefined | SignalLike<string | undefined>
    noValidate?: boolean | undefined | SignalLike<boolean | undefined>
    open?: boolean | undefined | SignalLike<boolean | undefined>
    optimum?: number | undefined | SignalLike<number | undefined>
    part?: string | undefined | SignalLike<string | undefined>
    pattern?: string | undefined | SignalLike<string | undefined>
    ping?: string | undefined | SignalLike<string | undefined>
    placeholder?: string | undefined | SignalLike<string | undefined>
    playsInline?: boolean | undefined | SignalLike<boolean | undefined>
    poster?: string | undefined | SignalLike<string | undefined>
    preload?: string | undefined | SignalLike<string | undefined>
    radioGroup?: string | undefined | SignalLike<string | undefined>
    readonly?: boolean | undefined | SignalLike<boolean | undefined>
    readOnly?: boolean | undefined | SignalLike<boolean | undefined>
    referrerpolicy?:
      | 'no-referrer'
      | 'no-referrer-when-downgrade'
      | 'origin'
      | 'origin-when-cross-origin'
      | 'same-origin'
      | 'strict-origin'
      | 'strict-origin-when-cross-origin'
      | 'unsafe-url'
      | undefined
      | SignalLike<
          | 'no-referrer'
          | 'no-referrer-when-downgrade'
          | 'origin'
          | 'origin-when-cross-origin'
          | 'same-origin'
          | 'strict-origin'
          | 'strict-origin-when-cross-origin'
          | 'unsafe-url'
          | undefined
        >
    rel?: string | undefined | SignalLike<string | undefined>
    required?: boolean | undefined | SignalLike<boolean | undefined>
    reversed?: boolean | undefined | SignalLike<boolean | undefined>
    role?: AriaRole | undefined | SignalLike<AriaRole | undefined>
    rows?: number | undefined | SignalLike<number | undefined>
    rowSpan?: number | undefined | SignalLike<number | undefined>
    sandbox?: string | undefined | SignalLike<string | undefined>
    scope?: string | undefined | SignalLike<string | undefined>
    scoped?: boolean | undefined | SignalLike<boolean | undefined>
    scrolling?: string | undefined | SignalLike<string | undefined>
    seamless?: boolean | undefined | SignalLike<boolean | undefined>
    selected?: boolean | undefined | SignalLike<boolean | undefined>
    shape?: string | undefined | SignalLike<string | undefined>
    size?: number | undefined | SignalLike<number | undefined>
    sizes?: string | undefined | SignalLike<string | undefined>
    slot?: string | undefined | SignalLike<string | undefined>
    span?: number | undefined | SignalLike<number | undefined>
    spellcheck?: boolean | undefined | SignalLike<boolean | undefined>
    spellCheck?: boolean | undefined | SignalLike<boolean | undefined>
    src?: string | undefined | SignalLike<string | undefined>
    srcset?: string | undefined | SignalLike<string | undefined>
    srcDoc?: string | undefined | SignalLike<string | undefined>
    srcLang?: string | undefined | SignalLike<string | undefined>
    srcSet?: string | undefined | SignalLike<string | undefined>
    start?: number | undefined | SignalLike<number | undefined>
    step?: number | string | undefined | SignalLike<number | string | undefined>
    style?:
      | string
      | CSSProperties
      | undefined
      | SignalLike<string | CSSProperties | undefined>
    summary?: string | undefined | SignalLike<string | undefined>
    tabIndex?: number | undefined | SignalLike<number | undefined>
    target?: string | undefined | SignalLike<string | undefined>
    title?: string | undefined | SignalLike<string | undefined>
    type?: string | undefined | SignalLike<string | undefined>
    useMap?: string | undefined | SignalLike<string | undefined>
    value?:
      | string
      | string[]
      | number
      | undefined
      | SignalLike<string | string[] | number | undefined>
    volume?:
      | string
      | number
      | undefined
      | SignalLike<string | number | undefined>
    width?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    wmode?: string | undefined | SignalLike<string | undefined>
    wrap?: string | undefined | SignalLike<string | undefined>

    // Non-standard Attributes
    autocapitalize?:
      | 'off'
      | 'none'
      | 'on'
      | 'sentences'
      | 'words'
      | 'characters'
      | undefined
      | SignalLike<
          | 'off'
          | 'none'
          | 'on'
          | 'sentences'
          | 'words'
          | 'characters'
          | undefined
        >
    autoCapitalize?:
      | 'off'
      | 'none'
      | 'on'
      | 'sentences'
      | 'words'
      | 'characters'
      | undefined
      | SignalLike<
          | 'off'
          | 'none'
          | 'on'
          | 'sentences'
          | 'words'
          | 'characters'
          | undefined
        >
    disablePictureInPicture?:
      | boolean
      | undefined
      | SignalLike<boolean | undefined>
    results?: number | undefined | SignalLike<number | undefined>
    translate?: 'yes' | 'no' | undefined | SignalLike<'yes' | 'no' | undefined>

    // RDFa Attributes
    about?: string | undefined | SignalLike<string | undefined>
    datatype?: string | undefined | SignalLike<string | undefined>
    inlist?: any
    prefix?: string | undefined | SignalLike<string | undefined>
    property?: string | undefined | SignalLike<string | undefined>
    resource?: string | undefined | SignalLike<string | undefined>
    typeof?: string | undefined | SignalLike<string | undefined>
    vocab?: string | undefined | SignalLike<string | undefined>

    // Microdata Attributes
    itemProp?: string | undefined | SignalLike<string | undefined>
    itemScope?: boolean | undefined | SignalLike<boolean | undefined>
    itemType?: string | undefined | SignalLike<string | undefined>
    itemID?: string | undefined | SignalLike<string | undefined>
    itemRef?: string | undefined | SignalLike<string | undefined>

    // Event Handlers
    onblur?: ((this: GlobalEventHandlers, ev: FocusEvent) => any)
    onchange?: ((this: GlobalEventHandlers, ev: Event) => any)
    onclick?: ((this: GlobalEventHandlers, ev: MouseEvent) => any)
    onerror?: OnErrorEventHandler
    onfocus?: ((this: GlobalEventHandlers, ev: FocusEvent) => any)
    oninput?: ((this: GlobalEventHandlers, ev: Event) => any)
    oninvalid?: ((this: GlobalEventHandlers, ev: Event) => any)
    onkeydown?: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any)
    onkeypress?: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any)
    onkeyup?: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any)
    onmousedown?: ((this: GlobalEventHandlers, ev: MouseEvent) => any)
    onmouseenter?: ((this: GlobalEventHandlers, ev: MouseEvent) => any)
    onmouseleave?: ((this: GlobalEventHandlers, ev: MouseEvent) => any)
    onmousemove?: ((this: GlobalEventHandlers, ev: MouseEvent) => any)
    onmouseout?: ((this: GlobalEventHandlers, ev: MouseEvent) => any)
    onmouseover?: ((this: GlobalEventHandlers, ev: MouseEvent) => any)
    onmouseup?: ((this: GlobalEventHandlers, ev: MouseEvent) => any)
    onreset?: ((this: GlobalEventHandlers, ev: Event) => any)
    onresize?: ((this: GlobalEventHandlers, ev: UIEvent) => any)
    onscroll?: ((this: GlobalEventHandlers, ev: Event) => any)
    onsubmit?: ((this: GlobalEventHandlers, ev: SubmitEvent) => any)
    onwheel?: ((this: GlobalEventHandlers, ev: WheelEvent) => any)

    // Element Reference
    ref?: (elm: HTMLElement) => any
  }

  export interface SVGAttributes<Target extends EventTarget = SVGElement>
    extends HTMLAttributes<Target> {
    accentHeight?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    accumulate?:
      | 'none'
      | 'sum'
      | undefined
      | SignalLike<'none' | 'sum' | undefined>
    additive?:
      | 'replace'
      | 'sum'
      | undefined
      | SignalLike<'replace' | 'sum' | undefined>
    alignmentBaseline?:
      | 'auto'
      | 'baseline'
      | 'before-edge'
      | 'text-before-edge'
      | 'middle'
      | 'central'
      | 'after-edge'
      | 'text-after-edge'
      | 'ideographic'
      | 'alphabetic'
      | 'hanging'
      | 'mathematical'
      | 'inherit'
      | undefined
      | SignalLike<
          | 'auto'
          | 'baseline'
          | 'before-edge'
          | 'text-before-edge'
          | 'middle'
          | 'central'
          | 'after-edge'
          | 'text-after-edge'
          | 'ideographic'
          | 'alphabetic'
          | 'hanging'
          | 'mathematical'
          | 'inherit'
          | undefined
        >
    allowReorder?:
      | 'no'
      | 'yes'
      | undefined
      | SignalLike<'no' | 'yes' | undefined>
    alphabetic?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    amplitude?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    arabicForm?:
      | 'initial'
      | 'medial'
      | 'terminal'
      | 'isolated'
      | undefined
      | SignalLike<'initial' | 'medial' | 'terminal' | 'isolated' | undefined>
    ascent?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    attributeName?: string | undefined | SignalLike<string | undefined>
    attributeType?: string | undefined | SignalLike<string | undefined>
    autoReverse?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    azimuth?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    baseFrequency?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    baselineShift?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    baseProfile?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    bbox?: number | string | undefined | SignalLike<number | string | undefined>
    begin?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    bias?: number | string | undefined | SignalLike<number | string | undefined>
    by?: number | string | undefined | SignalLike<number | string | undefined>
    calcMode?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    capHeight?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    clip?: number | string | undefined | SignalLike<number | string | undefined>
    clipPath?: string | undefined | SignalLike<string | undefined>
    clipPathUnits?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    clipRule?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    colorInterpolation?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    colorInterpolationFilters?:
      | 'auto'
      | 'sRGB'
      | 'linearRGB'
      | 'inherit'
      | undefined
      | SignalLike<'auto' | 'sRGB' | 'linearRGB' | 'inherit' | undefined>
    colorProfile?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    colorRendering?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    contentScriptType?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    contentStyleType?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    cursor?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    cx?: number | string | undefined | SignalLike<number | string | undefined>
    cy?: number | string | undefined | SignalLike<number | string | undefined>
    d?: string | undefined | SignalLike<string | undefined>
    decelerate?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    descent?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    diffuseConstant?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    direction?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    display?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    divisor?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    dominantBaseline?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    dur?: number | string | undefined | SignalLike<number | string | undefined>
    dx?: number | string | undefined | SignalLike<number | string | undefined>
    dy?: number | string | undefined | SignalLike<number | string | undefined>
    edgeMode?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    elevation?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    enableBackground?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    end?: number | string | undefined | SignalLike<number | string | undefined>
    exponent?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    externalResourcesRequired?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    fill?: string | undefined | SignalLike<string | undefined>
    fillOpacity?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    fillRule?:
      | 'nonzero'
      | 'evenodd'
      | 'inherit'
      | undefined
      | SignalLike<'nonzero' | 'evenodd' | 'inherit' | undefined>
    filter?: string | undefined | SignalLike<string | undefined>
    filterRes?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    filterUnits?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    floodColor?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    floodOpacity?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    focusable?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    fontFamily?: string | undefined | SignalLike<string | undefined>
    fontSize?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    fontSizeAdjust?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    fontStretch?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    fontStyle?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    fontVariant?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    fontWeight?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    format?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    from?: number | string | undefined | SignalLike<number | string | undefined>
    fx?: number | string | undefined | SignalLike<number | string | undefined>
    fy?: number | string | undefined | SignalLike<number | string | undefined>
    g1?: number | string | undefined | SignalLike<number | string | undefined>
    g2?: number | string | undefined | SignalLike<number | string | undefined>
    glyphName?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    glyphOrientationHorizontal?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    glyphOrientationVertical?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    glyphRef?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    gradientTransform?: string | undefined | SignalLike<string | undefined>
    gradientUnits?: string | undefined | SignalLike<string | undefined>
    hanging?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    horizAdvX?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    horizOriginX?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    ideographic?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    imageRendering?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    in2?: number | string | undefined | SignalLike<number | string | undefined>
    in?: string | undefined | SignalLike<string | undefined>
    intercept?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    k1?: number | string | undefined | SignalLike<number | string | undefined>
    k2?: number | string | undefined | SignalLike<number | string | undefined>
    k3?: number | string | undefined | SignalLike<number | string | undefined>
    k4?: number | string | undefined | SignalLike<number | string | undefined>
    k?: number | string | undefined | SignalLike<number | string | undefined>
    kernelMatrix?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    kernelUnitLength?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    kerning?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    keyPoints?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    keySplines?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    keyTimes?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    lengthAdjust?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    letterSpacing?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    lightingColor?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    limitingConeAngle?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    local?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    markerEnd?: string | undefined | SignalLike<string | undefined>
    markerHeight?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    markerMid?: string | undefined | SignalLike<string | undefined>
    markerStart?: string | undefined | SignalLike<string | undefined>
    markerUnits?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    markerWidth?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    mask?: string | undefined | SignalLike<string | undefined>
    maskContentUnits?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    maskUnits?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    mathematical?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    mode?: number | string | undefined | SignalLike<number | string | undefined>
    numOctaves?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    offset?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    opacity?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    operator?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    order?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    orient?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    orientation?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    origin?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    overflow?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    overlinePosition?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    overlineThickness?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    paintOrder?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    panose1?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    pathLength?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    patternContentUnits?: string | undefined | SignalLike<string | undefined>
    patternTransform?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    patternUnits?: string | undefined | SignalLike<string | undefined>
    pointerEvents?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    points?: string | undefined | SignalLike<string | undefined>
    pointsAtX?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    pointsAtY?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    pointsAtZ?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    preserveAlpha?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    preserveAspectRatio?: string | undefined | SignalLike<string | undefined>
    primitiveUnits?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    r?: number | string | undefined | SignalLike<number | string | undefined>
    radius?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    refX?: number | string | undefined | SignalLike<number | string | undefined>
    refY?: number | string | undefined | SignalLike<number | string | undefined>
    renderingIntent?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    repeatCount?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    repeatDur?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    requiredExtensions?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    requiredFeatures?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    restart?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    result?: string | undefined | SignalLike<string | undefined>
    rotate?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    rx?: number | string | undefined | SignalLike<number | string | undefined>
    ry?: number | string | undefined | SignalLike<number | string | undefined>
    scale?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    seed?: number | string | undefined | SignalLike<number | string | undefined>
    shapeRendering?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    slope?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    spacing?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    specularConstant?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    specularExponent?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    speed?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    spreadMethod?: string | undefined | SignalLike<string | undefined>
    startOffset?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    stdDeviation?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    stemh?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    stemv?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    stitchTiles?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    stopColor?: string | undefined | SignalLike<string | undefined>
    stopOpacity?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    strikethroughPosition?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    strikethroughThickness?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    string?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    stroke?: string | undefined | SignalLike<string | undefined>
    strokeDasharray?:
      | string
      | number
      | undefined
      | SignalLike<number | string | undefined>
    strokeDashoffset?:
      | string
      | number
      | undefined
      | SignalLike<number | string | undefined>
    strokeLinecap?:
      | 'butt'
      | 'round'
      | 'square'
      | 'inherit'
      | undefined
      | SignalLike<'butt' | 'round' | 'square' | 'inherit' | undefined>
    strokeLinejoin?:
      | 'miter'
      | 'round'
      | 'bevel'
      | 'inherit'
      | undefined
      | SignalLike<'miter' | 'round' | 'bevel' | 'inherit' | undefined>
    strokeMiterlimit?:
      | string
      | number
      | undefined
      | SignalLike<number | string | undefined>
    strokeOpacity?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    strokeWidth?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    surfaceScale?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    systemLanguage?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    tableValues?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    targetX?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    targetY?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    textAnchor?: string | undefined | SignalLike<string | undefined>
    textDecoration?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    textLength?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    textRendering?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    to?: number | string | undefined | SignalLike<number | string | undefined>
    transform?: string | undefined | SignalLike<string | undefined>
    u1?: number | string | undefined | SignalLike<number | string | undefined>
    u2?: number | string | undefined | SignalLike<number | string | undefined>
    underlinePosition?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    underlineThickness?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    unicode?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    unicodeBidi?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    unicodeRange?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    unitsPerEm?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    vAlphabetic?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    values?: string | undefined | SignalLike<string | undefined>
    vectorEffect?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    version?: string | undefined | SignalLike<string | undefined>
    vertAdvY?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    vertOriginX?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    vertOriginY?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    vHanging?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    vIdeographic?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    viewBox?: string | undefined | SignalLike<string | undefined>
    viewTarget?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    visibility?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    vMathematical?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    widths?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    wordSpacing?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    writingMode?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    x1?: number | string | undefined | SignalLike<number | string | undefined>
    x2?: number | string | undefined | SignalLike<number | string | undefined>
    x?: number | string | undefined | SignalLike<number | string | undefined>
    xChannelSelector?: string | undefined | SignalLike<string | undefined>
    xHeight?:
      | number
      | string
      | undefined
      | SignalLike<number | string | undefined>
    xlinkActuate?: string | undefined | SignalLike<string | undefined>
    xlinkArcrole?: string | undefined | SignalLike<string | undefined>
    xlinkHref?: string | undefined | SignalLike<string | undefined>
    xlinkRole?: string | undefined | SignalLike<string | undefined>
    xlinkShow?: string | undefined | SignalLike<string | undefined>
    xlinkTitle?: string | undefined | SignalLike<string | undefined>
    xlinkType?: string | undefined | SignalLike<string | undefined>
    xmlBase?: string | undefined | SignalLike<string | undefined>
    xmlLang?: string | undefined | SignalLike<string | undefined>
    xmlns?: string | undefined | SignalLike<string | undefined>
    xmlnsXlink?: string | undefined | SignalLike<string | undefined>
    xmlSpace?: string | undefined | SignalLike<string | undefined>
    y1?: number | string | undefined | SignalLike<number | string | undefined>
    y2?: number | string | undefined | SignalLike<number | string | undefined>
    y?: number | string | undefined | SignalLike<number | string | undefined>
    yChannelSelector?: string | undefined | SignalLike<string | undefined>
    z?: number | string | undefined | SignalLike<number | string | undefined>
    zoomAndPan?: string | undefined | SignalLike<string | undefined>
  }

  type Element = string
  export interface IntrinsicElements {
    // HTML
    a: HTMLAttributes<HTMLAnchorElement>
    abbr: HTMLAttributes<HTMLElement>
    address: HTMLAttributes<HTMLElement>
    area: HTMLAttributes<HTMLAreaElement>
    article: HTMLAttributes<HTMLElement>
    aside: HTMLAttributes<HTMLElement>
    audio: HTMLAttributes<HTMLAudioElement>
    b: HTMLAttributes<HTMLElement>
    base: HTMLAttributes<HTMLBaseElement>
    bdi: HTMLAttributes<HTMLElement>
    bdo: HTMLAttributes<HTMLElement>
    big: HTMLAttributes<HTMLElement>
    blockquote: HTMLAttributes<HTMLQuoteElement>
    body: HTMLAttributes<HTMLBodyElement>
    br: HTMLAttributes<HTMLBRElement>
    button: HTMLAttributes<HTMLButtonElement>
    canvas: HTMLAttributes<HTMLCanvasElement>
    caption: HTMLAttributes<HTMLTableCaptionElement>
    cite: HTMLAttributes<HTMLElement>
    code: HTMLAttributes<HTMLElement>
    col: HTMLAttributes<HTMLTableColElement>
    colgroup: HTMLAttributes<HTMLTableColElement>
    data: HTMLAttributes<HTMLDataElement>
    datalist: HTMLAttributes<HTMLDataListElement>
    dd: HTMLAttributes<HTMLElement>
    del: HTMLAttributes<HTMLModElement>
    details: HTMLAttributes<HTMLDetailsElement>
    dfn: HTMLAttributes<HTMLElement>
    dialog: HTMLAttributes<HTMLDialogElement>
    div: HTMLAttributes<HTMLDivElement>
    dl: HTMLAttributes<HTMLDListElement>
    dt: HTMLAttributes<HTMLElement>
    em: HTMLAttributes<HTMLElement>
    embed: HTMLAttributes<HTMLEmbedElement>
    fieldset: HTMLAttributes<HTMLFieldSetElement>
    figcaption: HTMLAttributes<HTMLElement>
    figure: HTMLAttributes<HTMLElement>
    footer: HTMLAttributes<HTMLElement>
    form: HTMLAttributes<HTMLFormElement>
    h1: HTMLAttributes<HTMLHeadingElement>
    h2: HTMLAttributes<HTMLHeadingElement>
    h3: HTMLAttributes<HTMLHeadingElement>
    h4: HTMLAttributes<HTMLHeadingElement>
    h5: HTMLAttributes<HTMLHeadingElement>
    h6: HTMLAttributes<HTMLHeadingElement>
    head: HTMLAttributes<HTMLHeadElement>
    header: HTMLAttributes<HTMLElement>
    hgroup: HTMLAttributes<HTMLElement>
    hr: HTMLAttributes<HTMLHRElement>
    html: HTMLAttributes<HTMLHtmlElement>
    i: HTMLAttributes<HTMLElement>
    iframe: HTMLAttributes<HTMLIFrameElement>
    img: HTMLAttributes<HTMLImageElement>
    input: HTMLAttributes<HTMLInputElement>
    ins: HTMLAttributes<HTMLModElement>
    kbd: HTMLAttributes<HTMLElement>
    keygen: HTMLAttributes<HTMLUnknownElement>
    label: HTMLAttributes<HTMLLabelElement>
    legend: HTMLAttributes<HTMLLegendElement>
    li: HTMLAttributes<HTMLLIElement>
    link: HTMLAttributes<HTMLLinkElement>
    main: HTMLAttributes<HTMLElement>
    map: HTMLAttributes<HTMLMapElement>
    mark: HTMLAttributes<HTMLElement>
    marquee: HTMLAttributes<HTMLMarqueeElement>
    menu: HTMLAttributes<HTMLMenuElement>
    menuitem: HTMLAttributes<HTMLUnknownElement>
    meta: HTMLAttributes<HTMLMetaElement>
    meter: HTMLAttributes<HTMLMeterElement>
    nav: HTMLAttributes<HTMLElement>
    noscript: HTMLAttributes<HTMLElement>
    object: HTMLAttributes<HTMLObjectElement>
    ol: HTMLAttributes<HTMLOListElement>
    optgroup: HTMLAttributes<HTMLOptGroupElement>
    option: HTMLAttributes<HTMLOptionElement>
    output: HTMLAttributes<HTMLOutputElement>
    p: HTMLAttributes<HTMLParagraphElement>
    param: HTMLAttributes<HTMLParamElement>
    picture: HTMLAttributes<HTMLPictureElement>
    pre: HTMLAttributes<HTMLPreElement>
    progress: HTMLAttributes<HTMLProgressElement>
    q: HTMLAttributes<HTMLQuoteElement>
    rp: HTMLAttributes<HTMLElement>
    rt: HTMLAttributes<HTMLElement>
    ruby: HTMLAttributes<HTMLElement>
    s: HTMLAttributes<HTMLElement>
    samp: HTMLAttributes<HTMLElement>
    script: HTMLAttributes<HTMLScriptElement>
    section: HTMLAttributes<HTMLElement>
    select: HTMLAttributes<HTMLSelectElement>
    slot: HTMLAttributes<HTMLSlotElement>
    small: HTMLAttributes<HTMLElement>
    source: HTMLAttributes<HTMLSourceElement>
    span: HTMLAttributes<HTMLSpanElement>
    strong: HTMLAttributes<HTMLElement>
    style: HTMLAttributes<HTMLStyleElement>
    sub: HTMLAttributes<HTMLElement>
    summary: HTMLAttributes<HTMLElement>
    sup: HTMLAttributes<HTMLElement>
    table: HTMLAttributes<HTMLTableElement>
    tbody: HTMLAttributes<HTMLTableSectionElement>
    td: HTMLAttributes<HTMLTableCellElement>
    textarea: HTMLAttributes<HTMLTextAreaElement>
    tfoot: HTMLAttributes<HTMLTableSectionElement>
    th: HTMLAttributes<HTMLTableCellElement>
    thead: HTMLAttributes<HTMLTableSectionElement>
    time: HTMLAttributes<HTMLTimeElement>
    title: HTMLAttributes<HTMLTitleElement>
    tr: HTMLAttributes<HTMLTableRowElement>
    track: HTMLAttributes<HTMLTrackElement>
    u: HTMLAttributes<HTMLElement>
    ul: HTMLAttributes<HTMLUListElement>
    var: HTMLAttributes<HTMLElement>
    video: HTMLAttributes<HTMLVideoElement>
    wbr: HTMLAttributes<HTMLElement>

    //SVG
    svg: SVGAttributes<SVGSVGElement>
    animate: SVGAttributes<SVGAnimateElement>
    circle: SVGAttributes<SVGCircleElement>
    animateMotion: SVGAttributes<SVGAnimateMotionElement>
    animateTransform: SVGAttributes<SVGAnimateTransformElement>
    clipPath: SVGAttributes<SVGClipPathElement>
    defs: SVGAttributes<SVGDefsElement>
    desc: SVGAttributes<SVGDescElement>
    ellipse: SVGAttributes<SVGEllipseElement>
    feBlend: SVGAttributes<SVGFEBlendElement>
    feColorMatrix: SVGAttributes<SVGFEColorMatrixElement>
    feComponentTransfer: SVGAttributes<SVGFEComponentTransferElement>
    feComposite: SVGAttributes<SVGFECompositeElement>
    feConvolveMatrix: SVGAttributes<SVGFEConvolveMatrixElement>
    feDiffuseLighting: SVGAttributes<SVGFEDiffuseLightingElement>
    feDisplacementMap: SVGAttributes<SVGFEDisplacementMapElement>
    feDistantLight: SVGAttributes<SVGFEDistantLightElement>
    feDropShadow: SVGAttributes<SVGFEDropShadowElement>
    feFlood: SVGAttributes<SVGFEFloodElement>
    feFuncA: SVGAttributes<SVGFEFuncAElement>
    feFuncB: SVGAttributes<SVGFEFuncBElement>
    feFuncG: SVGAttributes<SVGFEFuncGElement>
    feFuncR: SVGAttributes<SVGFEFuncRElement>
    feGaussianBlur: SVGAttributes<SVGFEGaussianBlurElement>
    feImage: SVGAttributes<SVGFEImageElement>
    feMerge: SVGAttributes<SVGFEMergeElement>
    feMergeNode: SVGAttributes<SVGFEMergeNodeElement>
    feMorphology: SVGAttributes<SVGFEMorphologyElement>
    feOffset: SVGAttributes<SVGFEOffsetElement>
    fePointLight: SVGAttributes<SVGFEPointLightElement>
    feSpecularLighting: SVGAttributes<SVGFESpecularLightingElement>
    feSpotLight: SVGAttributes<SVGFESpotLightElement>
    feTile: SVGAttributes<SVGFETileElement>
    feTurbulence: SVGAttributes<SVGFETurbulenceElement>
    filter: SVGAttributes<SVGFilterElement>
    foreignObject: SVGAttributes<SVGForeignObjectElement>
    g: SVGAttributes<SVGGElement>
    image: SVGAttributes<SVGImageElement>
    line: SVGAttributes<SVGLineElement>
    linearGradient: SVGAttributes<SVGLinearGradientElement>
    marker: SVGAttributes<SVGMarkerElement>
    mask: SVGAttributes<SVGMaskElement>
    metadata: SVGAttributes<SVGMetadataElement>
    mpath: SVGAttributes<SVGMPathElement>
    path: SVGAttributes<SVGPathElement>
    pattern: SVGAttributes<SVGPatternElement>
    polygon: SVGAttributes<SVGPolygonElement>
    polyline: SVGAttributes<SVGPolylineElement>
    radialGradient: SVGAttributes<SVGRadialGradientElement>
    rect: SVGAttributes<SVGRectElement>
    set: SVGAttributes<SVGSetElement>
    stop: SVGAttributes<SVGStopElement>
    switch: SVGAttributes<SVGSwitchElement>
    symbol: SVGAttributes<SVGSymbolElement>
    text: SVGAttributes<SVGTextElement>
    textPath: SVGAttributes<SVGTextPathElement>
    tspan: SVGAttributes<SVGTSpanElement>
    use: SVGAttributes<SVGUseElement>
    view: SVGAttributes<SVGViewElement>
  }
}
