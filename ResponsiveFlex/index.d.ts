import { PropsWithChildren, ReactNode } from 'react';
import { StringPixel } from '../types';
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
export default function ResponsiveFlex({ breakpoint, gap, ratio, smmargin, smpadding, lgmargin, lgpadding, children, }: ResponsiveFlexProps): import("react/jsx-runtime").JSX.Element;
export {};
