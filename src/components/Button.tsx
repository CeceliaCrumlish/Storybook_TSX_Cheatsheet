import React from 'react'; 
import { Button } from '@mui/material'; 
import { ButtonProps } from '@mui/material'; 


export const StandardButton = (props:ButtonProps) => {
  return <Button {...props}> clickme! </Button> 
}
