// Button.stories.js|jsx
//TODO GET TO WORK IN STORYBOOK
// Button.stories.ts|tsx

import React from 'react';

import { Box } from '@mui/material'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/Button';

//exporting the default propt name for aesthetic testing and pages
export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

//template is a wrapper around button that passes props, and allows you to set 
// lets you pass args as props to view different states
const Template: ComponentStory<typeof Button> = (args) => (
  <Button 
    children= "hello" variant="contained" // default props
    {...args} 
  />
)

//'none' | 'square-rounded' | 'rounded' | 'circular'
//👇 Each story then reuses that template
export const None = Template.bind({});
None.args = {
  roundedness: 'none',
  color: 'primary',
};

export const Square = Template.bind({});
Square.args = {
  roundedness:"square-rounded",
  color: 'primary'
};

export const Circle = Template.bind({});
Circle.args = {
  roundedness:'circular',
  color:'secondary',
};
