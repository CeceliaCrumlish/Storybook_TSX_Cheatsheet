/*
* Button.tsx 
* defines interface ButtonProps, extending the @mui ButtonProps library
* for further use in storybook 
*/

import React from 'react'; 
import { Button as MuiButton } from '@mui/material';  // as typedefs name
import { ButtonProps as MuiButtonProps } from '@mui/material'; 


// //why do we do this? so we can change the @mui style to what we want using sx
export const Button = ({ roundedness='square-rounded', children, sx, ...props } : ButtonProps) => {
  return (
    <MuiButton {...props} sx={{
      borderRadius: borderRadiusForRoundedness[roundedness],
      text: "test",
      ...sx, // pass through all the styles that someone might provide when using <Button>
    }}>
      {children}
    </MuiButton> 
  )
}
//setting interface/type to validate what properties our Button can have
//this makes our ButtonProps share the same props as the MuiButtonProps 

type Roundedness = 'none' | 'square-rounded' | 'rounded' | 'circular'
export interface ButtonProps extends MuiButtonProps {
  roundedness?: Roundedness  //  ? means prop is optional 
}

const borderRadiusForRoundedness: { [K in Roundedness]: `${number}px` | `${number}%` } = { // K means element of this union
  'none': "0px",
  'square-rounded': '15px', 
  'rounded': '80px',
  'circular': '100%',
}


// example of children

// const withChildren = <Button roundedness={'none'}>Button Text</Button>

Button.defaultProps = {
  roundedness: 'none', 
}