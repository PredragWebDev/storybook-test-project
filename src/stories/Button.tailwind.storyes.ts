import type { Meta, StoryObj } from '@storybook/react';

import { ButtonTailwind } from '../components/ButtonTailwid/ButtonTailwind';

const meta = {
  title: 'components/Tailwind',
  component: ButtonTailwind,

  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof ButtonTailwind>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Button',
  },
};

export const Text: Story = {
  args: {
    type: 'text',
    label: 'Button',
  },
};

export const OutlineButton: Story = {
  args: {
    type: 'default',
    label: 'Button',
  },
};

export const Dashed: Story = {
  args: {
    type: 'dashed',
    label: 'Button',
  },
};
