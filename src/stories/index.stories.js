import React from 'react';
import { Button } from '@storybook/react/demo';
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'

export default { 
  title: 'Index',
  decorators: [withA11y],
};

export const withText = () => <Button onClick={action('button-click')}>Oluwasayo</Button>;

export const withEmoji = () => (
  <Button onClick={action('emoji-clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
