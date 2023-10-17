import { PropsWithChildren, ReactNode } from 'react';

import { theme } from '../style/theme';
import { MarginPadding, StringPixel } from '../types';

import * as S from './style';

interface ResponsiveFlexProps extends PropsWithChildren {
  /**
   * breakpoint that arranges children from horizontal to vertical (min-width: breakpoint)
   */
  breakpoint: StringPixel;
  /**
   * gap between two children when width is less than breakpoint
   */
  $smGap?: StringPixel;
  /**
   * gap between two children when width is no less than breakpoint
   */
  $lgGap?: StringPixel;
  /**
   * ratio of left-sided child(first index of children)
   * unit is percent (ex. 40%)
   * (if 70%, right-sided is automatically 30%)
   */
  ratio?: number;
  /**
   * margin of Flex when width is less than breakpoint
   */
  $smMargin?: MarginPadding;
  /**
   * padding of Flex when width is less than breakpoint
   */
  $smPadding?: MarginPadding;
  /**
   * margin of Flex when width is no less than breakpoint
   */
  $lgMargin?: MarginPadding;
  /**
   * padding of Flex when width is no less than breakpoint
   */
  $lgPadding?: MarginPadding;
  /**
   * justify-content of Flex
   */
  $justifyContent?: string;
  /**
   * align-items of Flex
   */
  $alignItems?: string;
  /**
   * children of Flex, The number of children should be 2
   */
  children: [ReactNode, ReactNode];
}

export default function ResponsiveFlex({
  breakpoint = theme.breakpoint.sm,
  $smGap = '10px',
  $lgGap = '10px',
  ratio = 50,
  $smMargin = '10px',
  $smPadding = '10px',
  $lgMargin = '10px',
  $lgPadding = '10px',
  $justifyContent = 'space-between',
  $alignItems = 'center',
  children,
}: ResponsiveFlexProps) {
  if (children.length !== 2)
    return <div>ResponsiveFlex component needs two children.</div>;

  return (
    <S.Wrapper
      breakpoint={breakpoint}
      $smGap={$smGap}
      $lgGap={$lgGap}
      $smMargin={$smMargin}
      $smPadding={$smPadding}
      $lgMargin={$lgMargin}
      $lgPadding={$lgPadding}
      $justifyContent={$justifyContent}
      $alignItems={$alignItems}
    >
      <S.FirstBox breakpoint={breakpoint} ratio={ratio}>
        {children[0]}
      </S.FirstBox>
      <S.SecondBox breakpoint={breakpoint} ratio={100 - ratio}>
        {children[1]}
      </S.SecondBox>
    </S.Wrapper>
  );
}
