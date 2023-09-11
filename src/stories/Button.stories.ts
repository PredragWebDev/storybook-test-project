import type { Meta, StoryObj } from '@storybook/react';

import { ButtonGroup } from '../components/Button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'components/Button',
  component: ButtonGroup,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
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
