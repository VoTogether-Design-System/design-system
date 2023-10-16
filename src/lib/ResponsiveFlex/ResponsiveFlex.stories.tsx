import type { Meta, StoryObj } from '@storybook/react';

import { theme } from '../style/theme';
import styled from 'styled-components';

import ResponsiveFlex from '.';

const meta: Meta<typeof ResponsiveFlex> = {
  component: ResponsiveFlex,
};

export default meta;
type Story = StoryObj<typeof ResponsiveFlex>;

const FirstBox = styled.div`
  height: 100px;

  border: 1px solid gray;
  padding: 10px;

  background-color: #b2a592;
`;

const SecondBox = styled.div`
  height: 50px;

  border: 1px solid gray;
  padding: 10px;

  background-color: #d5c8ae;
`;

export const Default: Story = {
  render: () => (
    <ResponsiveFlex breakpoint={theme.breakpoint.sm}>
      <FirstBox>FirstBox</FirstBox>
      <SecondBox>SecondBox</SecondBox>
    </ResponsiveFlex>
  ),
};

export const BreakpointTablet: Story = {
  render: () => (
    <ResponsiveFlex breakpoint={theme.breakpoint.md}>
      <FirstBox>FirstBox</FirstBox>
      <SecondBox>SecondBox</SecondBox>
    </ResponsiveFlex>
  ),
};

export const RatioForFirstBoxSeventy: Story = {
  render: () => (
    <ResponsiveFlex breakpoint={theme.breakpoint.sm} ratio={70}>
      <FirstBox>FirstBox</FirstBox>
      <SecondBox>SecondBox</SecondBox>
    </ResponsiveFlex>
  ),
};

export const LargeMarginTwentyPixel: Story = {
  render: () => (
    <ResponsiveFlex
      breakpoint={theme.breakpoint.sm}
      ratio={70}
      lgmargin={'20px'}
    >
      <FirstBox>FirstBox</FirstBox>
      <SecondBox>SecondBox</SecondBox>
    </ResponsiveFlex>
  ),
};

export const LargePaddingTwentyPixel: Story = {
  render: () => (
    <ResponsiveFlex
      breakpoint={theme.breakpoint.sm}
      ratio={70}
      lgpadding={'20px'}
    >
      <FirstBox>FirstBox</FirstBox>
      <SecondBox>SecondBox</SecondBox>
    </ResponsiveFlex>
  ),
};

export const SmallMarginTwentyPixel: Story = {
  render: () => (
    <ResponsiveFlex
      breakpoint={theme.breakpoint.sm}
      ratio={70}
      smmargin={'20px'}
    >
      <FirstBox>FirstBox</FirstBox>
      <SecondBox>SecondBox</SecondBox>
    </ResponsiveFlex>
  ),
};

export const SmallPaddingTwentyPixel: Story = {
  render: () => (
    <ResponsiveFlex
      breakpoint={theme.breakpoint.sm}
      ratio={70}
      smpadding={'20px'}
    >
      <FirstBox>FirstBox</FirstBox>
      <SecondBox>SecondBox</SecondBox>
    </ResponsiveFlex>
  ),
};
