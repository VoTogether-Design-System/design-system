import { PropsWithChildren, ReactNode } from 'react';

import { theme } from '../style/theme';
import { StringPixel } from '../types';

import * as S from './style';

interface ResponsiveFlexProps extends PropsWithChildren {
  /**
   * breakpoint that arranges children from horizontal to vertical (min-width: breakpoint)
   */
  breakpoint: number;
  /**
   * gap between two children
   */
  gap?: StringPixel;
  /**
   * ratio of left-sided child(first index of children)
   * unit is percent (ex. 40%)
   * (if 70%, right-sided is automatically 30%)
   */
  ratio?: number;
  /**
   * margin of Flex when width is less than breakpoint
   */
  $smMargin?: StringPixel;
  /**
   * padding of Flex when width is less than breakpoint
   */
  $smPadding?: StringPixel;
  /**
   * margin of Flex when width is no less than breakpoint
   */
  $lgMargin?: StringPixel;
  /**
   * padding of Flex when width is no less than breakpoint
   */
  $lgPadding?: StringPixel;
  /**
   * children of Flex, The number of children should be 2
   */
  children: [ReactNode, ReactNode];
}

export default function ResponsiveFlex({
  breakpoint = theme.breakpoint.sm,
  gap = '10px',
  ratio = 50,
  $smMargin = '10px',
  $smPadding = '10px',
  $lgMargin = '10px',
  $lgPadding = '10px',
  children,
}: ResponsiveFlexProps) {
  if (children.length !== 2)
    return <div>ResponsiveFlex component needs two children.</div>;

  return (
    <S.Wrapper
      breakpoint={breakpoint}
      gap={gap}
      $smMargin={$smMargin}
      $smPadding={$smPadding}
      $lgMargin={$lgMargin}
      $lgPadding={$lgPadding}
    >
      <S.FirstBox ratio={ratio}>{children[0]}</S.FirstBox>
      <S.SecondBox ratio={100 - ratio}>{children[1]}</S.SecondBox>
    </S.Wrapper>
  );
}
