import type { Meta, StoryObj } from '@storybook/react';
import PostCard from '@components/ui/PostCard';
import { POST_CARDS } from '@constants/cards';

const meta: Meta<typeof PostCard> = {
  title: 'Post card',
  component: PostCard,
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof PostCard>;

export const DefaultPostCard: Story = {
  args: { ...POST_CARDS[1] },
};
export const SmallPostCard: Story = {
  args: { ...POST_CARDS[1], size: 'small' },
};
