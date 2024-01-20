import type { Meta, StoryObj } from '@storybook/react';
import CategoryCard from '@components/ui/CategoryCard/index';
import { CATEGORIES } from '@constants/categories';

const meta: Meta<typeof CategoryCard> = {
  title: 'Category card',
  component: CategoryCard,
} satisfies Meta<typeof CategoryCard>;

export default meta;
type Story = StoryObj<typeof CategoryCard>;

export const Economy: Story = {
  args: CATEGORIES[2],
};
export const Business: Story = {
  args: CATEGORIES[0],
};
export const Startup: Story = {
  args: CATEGORIES[1],
};
export const Technology: Story = {
  args: CATEGORIES[3],
};
