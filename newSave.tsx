// Button.stories.js|jsx

import React from 'react';

import { StandardButton } from './Button';

export default {
  title: 'Button',
  component: StandardButton,
};

export const Primary = () => <StandardButton primary>primaryClicked</StandardButton>;