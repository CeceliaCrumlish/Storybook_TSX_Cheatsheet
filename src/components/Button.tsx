/*
* Button.tsx 
* defines interface ButtonProps, extending the @mui ButtonProps library
* for further use in storybook 
*/

import React from 'react'; 
import { Button as MuiButton } from '@mui/material';  // as typedefs name
import { ButtonProps as MuiButtonProps } from '@mui/material'


// //why do we do this? so we can change the @mui style to what we want using sx
export const Button = ({ roundedness='squareRounded', length='long', height='extraTall', children, sx, ...props } : ButtonProps) => {
  return (
    <MuiButton {...props} sx={{
      borderRadius: borderRadiusForRoundedness[roundedness],
      width: lengthOfButtons[length],
      height: heightOfButtons[height], 
      ...sx, // pass through all the styles that someone might provide when using <Button>
    }}>
      {children} 
    </MuiButton> 
  )
}

//exported default
Button.defaultProps = {
  roundedness: 'none', 
  length: 'half-page',
}


//setting interface/type to validate what properties our Button can have
//this makes our ButtonProps share the same props as the MuiButtonProps 
type Roundedness = 'none' | 'squareRounded' | 'rounded' | 'circular'
type Length = 'long'|'halfPage'| 'tiny'
type Height = 'extraTall'

export interface ButtonProps extends MuiButtonProps {
  roundedness?: Roundedness,  //  ? means prop is optional 
  length?: Length
  height?: Height
}

const lengthOfButtons: {[K in Length]:`${number}px`} = {
  'long': "334px",
  'halfPage': "207px",
  'tiny': "113px",
}

const heightOfButtons: {[K in Height]:`${number}px`} = {
  'extraTall': "144px",
}
const borderRadiusForRoundedness: { [K in Roundedness]: `${number}px` | `${number}%` } = { // K means element of this union
  'none': "0px",
  'squareRounded': '15px', 
  'rounded': '80px',
  'circular': '100%',
}
