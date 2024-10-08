declare namespace JSX {
  export interface HTMLAttributes {
    // Standard HTML Attributes
    accept?: string
    acceptCharset?: string
    accessKey?: string
    action?: string
    allow?: string
    allowFullScreen?: boolean
    allowTransparency?: boolean
    alt?: string
    as?: string
    async?: boolean
    autocomplete?: string
    autoComplete?: string
    autocorrect?: string
    autoCorrect?: string
    autofocus?: boolean
    autoFocus?: boolean
    autoPlay?: boolean
    capture?: boolean | string
    cellPadding?: number | string
    cellSpacing?: number | string
    charSet?: string
    challenge?: string
    checked?: boolean
    cite?: string
    class?: string
    className?: string
    cols?: number
    colSpan?: number
    content?: string
    contentEditable?: boolean
    contextMenu?: string
    controls?: boolean
    controlsList?: string
    coords?: string
    crossOrigin?: string
    data?: string
    dateTime?: string
    default?: boolean
    defaultChecked?: boolean
    defaultValue?: string
    defer?: boolean
    dir?: 'auto' | 'rtl' | 'ltr'
    disabled?: boolean
    disableRemotePlayback?: boolean
    download?: any
    decoding?: 'sync' | 'async' | 'auto'
    draggable?: boolean
    encType?: string
    enterkeyhint?:
      | 'enter'
      | 'done'
      | 'go'
      | 'next'
      | 'previous'
      | 'search'
      | 'send'
    for?: string
    form?: string
    formAction?: string
    formEncType?: string
    formMethod?: string
    formNoValidate?: boolean
    formTarget?: string
    frameBorder?: number | string
    headers?: string
    height?: number | string
    hidden?: boolean | 'hidden' | 'until-found'
    high?: number
    href?: string
    hrefLang?: string
    htmlFor?: string
    httpEquiv?: string
    icon?: string
    id?: string
    indeterminate?: boolean
    inert?: boolean
    inputMode?: string
    integrity?: string
    is?: string
    keyParams?: string
    keyType?: string
    kind?: string
    label?: string
    lang?: string
    list?: string
    loading?: 'eager' | 'lazy'
    loop?: boolean
    low?: number
    manifest?: string
    marginHeight?: number
    marginWidth?: number
    max?: number | string
    maxLength?: number
    media?: string
    mediaGroup?: string
    method?: string
    min?: number | string
    minLength?: number
    multiple?: boolean
    muted?: boolean
    name?: string
    nomodule?: boolean
    nonce?: string
    noValidate?: boolean
    open?: boolean
    optimum?: number
    part?: string
    pattern?: string
    ping?: string
    placeholder?: string
    playsInline?: boolean
    poster?: string
    preload?: string
    radioGroup?: string
    readonly?: boolean
    readOnly?: boolean
    referrerpolicy?:
      | 'no-referrer'
      | 'no-referrer-when-downgrade'
      | 'origin'
      | 'origin-when-cross-origin'
      | 'same-origin'
      | 'strict-origin'
      | 'strict-origin-when-cross-origin'
      | 'unsafe-url'
    rel?: string
    required?: boolean
    reversed?: boolean
    role?: AriaRole
    rows?: number
    rowSpan?: number
    sandbox?: string
    scope?: string
    scoped?: boolean
    scrolling?: string
    seamless?: boolean
    selected?: boolean
    shape?: string
    size?: number
    sizes?: string
    slot?: string
    span?: number
    spellcheck?: boolean
    spellCheck?: boolean
    src?: string
    srcset?: string
    srcDoc?: string
    srcLang?: string
    srcSet?: string
    start?: number
    step?: number | string
    style?: string | CSSProperties
    summary?: string
    tabIndex?: number
    target?: string
    title?: string
    type?: string
    useMap?: string
    value?: string | string[] | number
    volume?: string | number
    width?: number | string
    wmode?: string
    wrap?: string
    // Non-standard Attributes
    autocapitalize?:
      | 'off'
      | 'none'
      | 'on'
      | 'sentences'
      | 'words'
      | 'characters'
    autoCapitalize?:
      | 'off'
      | 'none'
      | 'on'
      | 'sentences'
      | 'words'
      | 'characters'
    disablePictureInPicture?: boolean
    results?: number
    translate?: 'yes' | 'no'
    // RDFa Attributes
    about?: string
    datatype?: string
    inlist?: any
    prefix?: string
    property?: string
    resource?: string
    typeof?: string
    vocab?: string
    // Microdata Attributes
    itemProp?: string
    itemScope?: boolean
    itemType?: string
    itemID?: string
    itemRef?: string
    // Event Handlers
    onblur?: (this: GlobalEventHandlers, ev: FocusEvent) => any
    onchange?: (this: GlobalEventHandlers, ev: Event) => any
    onclick?: (this: GlobalEventHandlers, ev: MouseEvent) => any
    onerror?: OnErrorEventHandler
    onfocus?: (this: GlobalEventHandlers, ev: FocusEvent) => any
    oninput?: (this: GlobalEventHandlers, ev: Event) => any
    oninvalid?: (this: GlobalEventHandlers, ev: Event) => any
    onkeydown?: (this: GlobalEventHandlers, ev: KeyboardEvent) => any
    onkeypress?: (this: GlobalEventHandlers, ev: KeyboardEvent) => any
    onkeyup?: (this: GlobalEventHandlers, ev: KeyboardEvent) => any
    onmousedown?: (this: GlobalEventHandlers, ev: MouseEvent) => any
    onmouseenter?: (this: GlobalEventHandlers, ev: MouseEvent) => any
    onmouseleave?: (this: GlobalEventHandlers, ev: MouseEvent) => any
    onmousemove?: (this: GlobalEventHandlers, ev: MouseEvent) => any
    onmouseout?: (this: GlobalEventHandlers, ev: MouseEvent) => any
    onmouseover?: (this: GlobalEventHandlers, ev: MouseEvent) => any
    onmouseup?: (this: GlobalEventHandlers, ev: MouseEvent) => any
    onreset?: (this: GlobalEventHandlers, ev: Event) => any
    onresize?: (this: GlobalEventHandlers, ev: UIEvent) => any
    onscroll?: (this: GlobalEventHandlers, ev: Event) => any
    onsubmit?: (this: GlobalEventHandlers, ev: SubmitEvent) => any
    onwheel?: (this: GlobalEventHandlers, ev: WheelEvent) => any
    // Element Reference
    ref?: (elm: HTMLElement) => any
  }

  export interface SVGAttributes extends HTMLAttributes {
    accentHeight?: number | string
    accumulate?: 'none' | 'sum'
    additive?: 'replace' | 'sum'
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
    allowReorder?: 'no' | 'yes'
    alphabetic?: number | string
    amplitude?: number | string
    arabicForm?: 'initial' | 'medial' | 'terminal' | 'isolated'
    ascent?: number | string
    attributeName?: string
    attributeType?: string
    autoReverse?: number | string
    azimuth?: number | string
    baseFrequency?: number | string
    baselineShift?: number | string
    baseProfile?: number | string
    bbox?: number | string
    begin?: number | string
    bias?: number | string
    by?: number | string
    calcMode?: number | string
    capHeight?: number | string
    clip?: number | string
    clipPath?: string
    clipPathUnits?: number | string
    clipRule?: number | string
    colorInterpolation?: number | string
    colorInterpolationFilters?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit'
    colorProfile?: number | string
    colorRendering?: number | string
    contentScriptType?: number | string
    contentStyleType?: number | string
    cursor?: number | string
    cx?: number | string
    cy?: number | string
    d?: string
    decelerate?: number | string
    descent?: number | string
    diffuseConstant?: number | string
    direction?: number | string
    display?: number | string
    divisor?: number | string
    dominantBaseline?: number | string
    dur?: number | string
    dx?: number | string
    dy?: number | string
    edgeMode?: number | string
    elevation?: number | string
    enableBackground?: number | string
    end?: number | string
    exponent?: number | string
    externalResourcesRequired?: number | string
    fill?: string
    fillOpacity?: number | string
    fillRule?: 'nonzero' | 'evenodd' | 'inherit'
    filter?: string
    filterRes?: number | string
    filterUnits?: number | string
    floodColor?: number | string
    floodOpacity?: number | string
    focusable?: number | string
    fontFamily?: string
    fontSize?: number | string
    fontSizeAdjust?: number | string
    fontStretch?: number | string
    fontStyle?: number | string
    fontVariant?: number | string
    fontWeight?: number | string
    format?: number | string
    from?: number | string
    fx?: number | string
    fy?: number | string
    g1?: number | string
    g2?: number | string
    glyphName?: number | string
    glyphOrientationHorizontal?: number | string
    glyphOrientationVertical?: number | string
    glyphRef?: number | string
    gradientTransform?: string
    gradientUnits?: string
    hanging?: number | string
    horizAdvX?: number | string
    horizOriginX?: number | string
    ideographic?: number | string
    imageRendering?: number | string
    in2?: number | string
    in?: string
    intercept?: number | string
    k1?: number | string
    k2?: number | string
    k3?: number | string
    k4?: number | string
    k?: number | string
    kernelMatrix?: number | string
    kernelUnitLength?: number | string
    kerning?: number | string
    keyPoints?: number | string
    keySplines?: number | string
    keyTimes?: number | string
    lengthAdjust?: number | string
    letterSpacing?: number | string
    lightingColor?: number | string
    limitingConeAngle?: number | string
    local?: number | string
    markerEnd?: string
    markerHeight?: number | string
    markerMid?: string
    markerStart?: string
    markerUnits?: number | string
    markerWidth?: number | string
    mask?: string
    maskContentUnits?: number | string
    maskUnits?: number | string
    mathematical?: number | string
    mode?: number | string
    numOctaves?: number | string
    offset?: number | string
    opacity?: number | string
    operator?: number | string
    order?: number | string
    orient?: number | string
    orientation?: number | string
    origin?: number | string
    overflow?: number | string
    overlinePosition?: number | string
    overlineThickness?: number | string
    paintOrder?: number | string
    panose1?: number | string
    pathLength?: number | string
    patternContentUnits?: string
    patternTransform?: number | string
    patternUnits?: string
    pointerEvents?: number | string
    points?: string
    pointsAtX?: number | string
    pointsAtY?: number | string
    pointsAtZ?: number | string
    preserveAlpha?: number | string
    preserveAspectRatio?: string
    primitiveUnits?: number | string
    r?: number | string
    radius?: number | string
    refX?: number | string
    refY?: number | string
    renderingIntent?: number | string
    repeatCount?: number | string
    repeatDur?: number | string
    requiredExtensions?: number | string
    requiredFeatures?: number | string
    restart?: number | string
    result?: string
    rotate?: number | string
    rx?: number | string
    ry?: number | string
    scale?: number | string
    seed?: number | string
    shapeRendering?: number | string
    slope?: number | string
    spacing?: number | string
    specularConstant?: number | string
    specularExponent?: number | string
    speed?: number | string
    spreadMethod?: string
    startOffset?: number | string
    stdDeviation?: number | string
    stemh?: number | string
    stemv?: number | string
    stitchTiles?: number | string
    stopColor?: string
    stopOpacity?: number | string
    strikethroughPosition?: number | string
    strikethroughThickness?: number | string
    string?: number | string
    stroke?: string
    strokeDasharray?: string | number
    strokeDashoffset?: string | number
    strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit'
    strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit'
    strokeMiterlimit?: string | number
    strokeOpacity?: number | string
    strokeWidth?: number | string
    surfaceScale?: number | string
    systemLanguage?: number | string
    tableValues?: number | string
    targetX?: number | string
    targetY?: number | string
    textAnchor?: string
    textDecoration?: number | string
    textLength?: number | string
    textRendering?: number | string
    to?: number | string
    transform?: string
    u1?: number | string
    u2?: number | string
    underlinePosition?: number | string
    underlineThickness?: number | string
    unicode?: number | string
    unicodeBidi?: number | string
    unicodeRange?: number | string
    unitsPerEm?: number | string
    vAlphabetic?: number | string
    values?: string
    vectorEffect?: number | string
    version?: string
    vertAdvY?: number | string
    vertOriginX?: number | string
    vertOriginY?: number | string
    vHanging?: number | string
    vIdeographic?: number | string
    viewBox?: string
    viewTarget?: number | string
    visibility?: number | string
    vMathematical?: number | string
    widths?: number | string
    wordSpacing?: number | string
    writingMode?: number | string
    x1?: number | string
    x2?: number | string
    x?: number | string
    xChannelSelector?: string
    xHeight?: number | string
    xlinkActuate?: string
    xlinkArcrole?: string
    xlinkHref?: string
    xlinkRole?: string
    xlinkShow?: string
    xlinkTitle?: string
    xlinkType?: string
    xmlBase?: string
    xmlLang?: string
    xmlns?: string
    xmlnsXlink?: string
    xmlSpace?: string
    y1?: number | string
    y2?: number | string
    y?: number | string
    yChannelSelector?: string
    z?: number | string
    zoomAndPan?: string
  }

  type Element = HTMLElement | SVGElement
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
