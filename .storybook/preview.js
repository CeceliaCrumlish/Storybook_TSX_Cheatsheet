import React from 'react';
import { Theme } from '../src/Theme'; // whereever you have defined your material ui theme
import { ThemeProvider } from '@mui/material/styles'
//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };

export const decorators = [
  Story => (
    <ThemeProvider theme={Theme}>
      <Story />
    </ThemeProvider>
  ),
];