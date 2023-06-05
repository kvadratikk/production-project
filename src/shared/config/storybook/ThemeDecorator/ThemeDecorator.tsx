import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  document.body.setAttribute('class', theme);

  return (
    <ThemeProvider initialTheme={theme}>
      <StoryComponent />
    </ThemeProvider>
  );
};
