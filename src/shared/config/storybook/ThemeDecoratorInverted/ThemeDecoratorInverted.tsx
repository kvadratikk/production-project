import { Story } from '@storybook/react';

export const ThemeDecoratorInverted = () => (StoryComponent: Story) =>
  (
    <div style={{ background: 'var(--inverted-bg-color)' }}>
      <StoryComponent />
    </div>
  );
