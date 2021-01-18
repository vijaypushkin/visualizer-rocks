import React from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'

interface ICustomTextIconProps extends SvgIconProps {
  text: string
}

const CustomTextIcon: React.FC<ICustomTextIconProps> = ({ text, ...props }) => (
  <SvgIcon {...props}>
    <g>
      <title>Object</title>
      <text
        fontStyle="normal"
        fontWeight="normal"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="24"
        id="svg_1"
        y="18"
        x="12"
        strokeWidth="0"
      >
        {text}
      </text>
    </g>
  </SvgIcon>
)

export default CustomTextIcon
