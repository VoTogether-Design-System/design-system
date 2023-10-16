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
  smmargin?: StringPixel;
  /**
   * padding of Flex when width is less than breakpoint
   */
  smpadding?: StringPixel;
  /**
   * margin of Flex when width is no less than breakpoint
   */
  lgmargin?: StringPixel;
  /**
   * padding of Flex when width is no less than breakpoint
   */
  lgpadding?: StringPixel;
  /**
   * children of Flex, The number of children should be 2
   */
  children: [ReactNode, ReactNode];
}

export default function ResponsiveFlex({
  breakpoint = theme.breakpoint.sm,
  gap = '10px',
  ratio = 50,
  smmargin = '10px',
  smpadding = '10px',
  lgmargin = '10px',
  lgpadding = '10px',
  children,
}: ResponsiveFlexProps) {
  if (children.length !== 2)
    return <div>ResponsiveFlex component needs two children.</div>;

  return (
    <S.Wrapper
      breakpoint={breakpoint}
      gap={gap}
      smmargin={smmargin}
      smpadding={smpadding}
      lgmargin={lgmargin}
      lgpadding={lgpadding}
    >
      <S.FirstBox ratio={ratio}>{children[0]}</S.FirstBox>
      <S.SecondBox ratio={100 - ratio}>{children[1]}</S.SecondBox>
    </S.Wrapper>
  );
}
