/// <reference types="react" />
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
export declare const Wrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, WrapperProps>>;
export declare const FirstBox: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    breakpoint: string;
    ratio: number;
}>>;
export declare const SecondBox: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    breakpoint: string;
    ratio: number;
}>>;
export {};
