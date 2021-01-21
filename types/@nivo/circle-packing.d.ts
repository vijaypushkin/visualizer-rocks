declare module '@nivo/circle-packing' {
  export class ResponsiveBubble extends React.Component<BubbleProps> {}

  interface CommonProps {
    // data
    // `root` managed by `withHierarchy()` HOC
    root: any
    value: any
    identity: string | (() => any)
    defs: any[]

    // dimensions managed by `withDimensions()` HOC
    margin: any
    fill: any[]

    // theme managed by `withTheme()` HOC
    colors?: any
    colorBy?: any
    animate?: boolean
    motionStiffness?: number
    motionDamping?: number

    leavesOnly?: boolean
    padding?: number

    borderWidth?: number
    borderColor?: any

    enableLabel?: boolean
    label?: string | (() => any)
    labelFormat?: string
    labelTextColor?: any
    labelSkipRadius?: number

    isInteractive?: boolean
    onClick?: () => any
    isZoomable?: boolean
    tooltipFormat?: string | (() => any)
    tooltip?: () => any
  }

  export interface BubbleProps extends CommonProps {
    nodeComponent?: () => any
    role?: string
  }

  export interface BubbleHtmlPropTypes extends CommonProps {
    nodeComponent: () => any
  }

  export interface BubbleCanvasPropTypes extends CommonProps {
    pixelRatio: number
  }
}
