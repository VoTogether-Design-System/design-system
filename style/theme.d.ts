import { DefaultTheme } from 'styled-components';
declare const breakpoint: {
    /** @media (min-width: 576px) { ... } */
    sm: string;
    /** @media (min-width: 768px) { ... } */
    md: string;
    /** @media (min-width: 1440px) { ... }*/
    lg: string;
};
declare const zIndex: {
    select: number;
    tagButton: number;
    header: number;
    modal: number;
};
declare const animation: {
    skeletonGradientPulse: import("styled-components/dist/models/Keyframes").default;
    skeletonGradientWave: import("styled-components/dist/models/Keyframes").default;
};
export type ZIndex = typeof zIndex;
export type Breakpoint = typeof breakpoint;
export type Animation = typeof animation;
export declare const theme: DefaultTheme;
export {};
