import type { Meta, StoryObj } from '@storybook/react';

import RoundButton from '.';

const meta: Meta<typeof RoundButton> = {
  component: RoundButton,
};

export default meta;
type Story = StoryObj<typeof RoundButton>;

export const SizeS: Story = {
  render: () => (
    <RoundButton size="sm" aria-label="글 작성하기">
      +
    </RoundButton>
  ),
};

export const SizeM: Story = {
  render: () => (
    <RoundButton size="md" aria-label="마이너스">
      -
    </RoundButton>
  ),
};

export const SizeL: Story = {
  render: () => <RoundButton size="lg" aria-label="" />,
};
