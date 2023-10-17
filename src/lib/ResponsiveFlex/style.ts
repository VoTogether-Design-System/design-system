import { styled } from 'styled-components';
import { MarginPadding, StringPixel } from '../types';

interface WrapperProps {
  breakpoint: StringPixel;
  $smGap: StringPixel;
  $lgGap: StringPixel;
  $smMargin: MarginPadding;
  $smPadding: MarginPadding;
  $lgMargin: MarginPadding;
  $lgPadding: MarginPadding;
  $justifyContent: string;
  $alignItems: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};

  gap: ${({ $smGap }) => $smGap};

  width: 100%;
  height: 100%;

  margin: ${({ $smMargin }) => $smMargin};
  padding: ${({ $smPadding }) => $smPadding};

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({ breakpoint }) => breakpoint}) {
    flex-direction: row;
    gap: ${({ $lgGap }) => $lgGap};

    margin: ${({ $lgMargin }) => $lgMargin};
    padding: ${({ $lgPadding }) => $lgPadding};
  }
`;

export const FirstBox = styled.div<{ breakpoint: string; ratio: number }>`
  width: 100%;
  height: ${({ ratio }) => `${ratio}%`};

  @media (min-width: ${({ breakpoint }) => breakpoint}) {
    width: ${({ ratio }) => `${ratio}%`};
    height: 100%;
  }
`;

export const SecondBox = styled.div<{ breakpoint: string; ratio: number }>`
  width: 100%;
  height: ${({ ratio }) => `${ratio}%`};

  @media (min-width: ${({ breakpoint }) => breakpoint}) {
    width: ${({ ratio }) => `${ratio}%`};
    height: 100%;
  }
`;
