// Button.stories.js|jsx
//TODO GET TO WORK IN STORYBOOK 
import { ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Button', 
  component: StandardButton, 
}; 

export const Primary: ComponentStory<typeof Button> = () => <StandardButton primary={true}/>;
Primary.storyName = 'I am the primary';