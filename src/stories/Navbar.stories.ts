import type { Meta, StoryObj } from '@storybook/vue3';

import Navbar from '../components/Navbar.vue';

const meta = {
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

