import type { Meta, StoryObj } from '@storybook/vue3';

import Button from '../../components/Button.vue';

const meta = {
  component: Button,
  title: 'components/Buttons',
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    variant: 'secondary'
  }
};

export const Success: Story = {
  args: {
    label: 'Button',
    variant: 'success'
  }
};

export const Info: Story = {
  args: {
    label: 'Button',
    variant: 'info'
  }
};

export const Warning: Story = {
  args: {
    label: 'Button',
    variant: 'warning'
  }
};

export const Danger: Story = {
  args: {
    label: 'Button',
    variant: 'danger'
  }
};