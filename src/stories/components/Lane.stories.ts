import type { Meta, StoryObj } from '@storybook/vue3';

import Lane from '../../components/Lane.vue';

const meta = {
  component: Lane,
  title: 'components/Lane',
  tags: ['autodocs'],
} satisfies Meta<typeof Lane>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

