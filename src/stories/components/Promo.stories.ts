import type { Meta, StoryObj } from '@storybook/vue3';

import Promo from '../../components/Promo.vue';

/**https://codepen.io/alvaromontoro/pen/yLZVJRR */
const meta = {
  component: Promo,
  title: 'components/Promo',
  tags: ['autodocs'],
} satisfies Meta<typeof Promo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

