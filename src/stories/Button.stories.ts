import type { Meta, StoryObj } from '@storybook/vue3';

import Button from '../components/Button.vue';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button'
  }
};

export const Link: Story = {
  args: {
    label: 'Link',
    variant: 'link'
  }
};