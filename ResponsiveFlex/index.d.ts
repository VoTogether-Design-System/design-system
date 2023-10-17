import { PropsWithChildren, ReactNode } from 'react';
import { MarginPadding, StringPixel } from '../types';
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
export default function ResponsiveFlex({ breakpoint, $smGap, $lgGap, ratio, $smMargin, $smPadding, $lgMargin, $lgPadding, $justifyContent, $alignItems, children, }: ResponsiveFlexProps): import("react/jsx-runtime").JSX.Element;
export {};
