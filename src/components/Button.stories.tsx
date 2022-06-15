// Button.stories.js|jsx

import Button, { ButtonProps } from '@mui/material/Button';
import React from 'react';
import { StandardButton } from './Button';

export default {
  title: 'Button', 
  component: StandardButton, 
}; 

export const Primary = () =>{
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };
  return <Button primary={isPrimary} onClick={handleOnChange} label={value} />;
};
