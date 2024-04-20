import type { Meta, StoryObj } from '@storybook/vue3';

import Page from '../../components/Page.vue';

const meta = {
  component: Page,
  title: 'components/Page',
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

