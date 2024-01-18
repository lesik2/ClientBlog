import type { Meta, StoryObj } from '@storybook/react';
import { AUTHORS } from '@constants/authors';

import { AuthorCard } from './AuthorCard';

const meta: Meta<typeof AuthorCard> = {
  title: 'Author card',
  component: AuthorCard,
} satisfies Meta<typeof AuthorCard>;

export default meta;
type Story = StoryObj<typeof AuthorCard>;

export const FirstStory: Story = {
  args: AUTHORS[0],
};
export const SecondStory: Story = {
  args: AUTHORS[1],
};
