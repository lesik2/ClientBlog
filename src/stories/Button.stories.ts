import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@components/ui/Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const FirstStory: Story = {
  args: {},
};
export const SecondStory: Story = {
  args: {
    type: 'secondary',
  },
};
