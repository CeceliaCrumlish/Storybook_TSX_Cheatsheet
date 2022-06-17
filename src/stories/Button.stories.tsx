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

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

//'none' | 'square-rounded' | 'rounded' | 'circular'
//👇 Each story then reuses that template
export const None = Template.bind({});
None.args = {
  roundedness: 'none'
};