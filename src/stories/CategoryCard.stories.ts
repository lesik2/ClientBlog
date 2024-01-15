import type { Meta, StoryObj } from '@storybook/react';
import CategoryCard from '@components/ui/CategoryCard/index';

const meta: Meta<typeof CategoryCard> = {
  title: 'Category card',
  component: CategoryCard,
} satisfies Meta<typeof CategoryCard>;

export default meta;
type Story = StoryObj<typeof CategoryCard>;

export const FirstStory: Story = {
  args: {},
};
