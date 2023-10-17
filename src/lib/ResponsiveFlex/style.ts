import { styled } from 'styled-components';
import { theme } from '../style/theme';

interface WrapperProps {
  breakpoint: number;
  gap: string;
  $smMargin: string;
  $smPadding: string;
  $lgMargin: string;
  $lgPadding: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ gap }) => gap};

  width: 100%;
  height: 100%;

  margin: ${({ $smMargin }) => $smMargin};
  padding: ${({ $smPadding }) => $smPadding};

  @media (min-width: ${theme.breakpoint.sm}) {
    flex-direction: row;
    margin: ${({ $lgMargin }) => $lgMargin};
    padding: ${({ $lgPadding }) => $lgPadding};
  }
`;

export const FirstBox = styled.div<{ ratio: number }>`
  width: 100%;
  height: ${({ ratio }) => `${ratio}%`};

  @media (min-width: ${theme.breakpoint.sm}) {
    width: ${({ ratio }) => `${ratio}%`};
    height: 100%;
  }
`;

export const SecondBox = styled.div<{ ratio: number }>`
  width: 100%;
  height: ${({ ratio }) => `${ratio}%`};

  @media (min-width: ${theme.breakpoint.sm}) {
    width: ${({ ratio }) => `${ratio}%`};
    height: 100%;
  }
`;
