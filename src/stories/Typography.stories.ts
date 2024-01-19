import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@components/ui/Typography/index';

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof Typography>;

export const FirstStory: Story = {
  args: {},
};
