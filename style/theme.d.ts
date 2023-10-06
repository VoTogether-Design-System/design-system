import { DefaultTheme } from 'styled-components';
declare const breakpoint: {
    /** @media (min-width: 576px) { ... } */
    sm: string;
    /** @media (min-width: 768px) { ... } */
    md: string;
    /** @media (min-width: 1440px) { ... }*/
    lg: string;
};
export type Breakpoint = typeof breakpoint;
export declare const theme: DefaultTheme;
export {};
