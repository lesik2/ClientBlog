import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '@components/ui/Header/index';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const FirstStory: Story = {
  args: {},
};
