import React from 'react';
import { OurTheme } from '../src/Theme'; // whereever you have defined your material ui theme
import { ThemeProvider } from '@mui/material/styles'
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';

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
    <Emotion10ThemeProvider theme={OurTheme}>
      <ThemeProvider theme={OurTheme}>
        <Story />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  ),
];