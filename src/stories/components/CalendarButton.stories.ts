import type { Meta, StoryObj } from '@storybook/vue3';

import CalendarButton from '../../components/CalendarButton.vue';

const meta = {
  component: CalendarButton,
  title: 'components/CalendarButton',
  tags: ['autodocs'],
} satisfies Meta<typeof CalendarButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Go To'
  }
};


export const Secondary: Story = {
  args: {
    label: 'Go To',
    variant: 'secondary'
  }
};

export const Success: Story = {
  args: {
    label: 'Go To',
    variant: 'success'
  }
};

export const Info: Story = {
  args: {
    label: 'Go To',
    variant: 'info'
  }
};

export const Warning: Story = {
  args: {
    label: 'Go To',
    variant: 'warning'
  }
};

export const Danger: Story = {
  args: {
    label: 'Go To',
    variant: 'danger'
  }
};