import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '@components/ui/Footer/index';

const meta: Meta<typeof Footer> = {
  title: 'Footer',
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

export const FirstStory: Story = {
  args: {},
};
