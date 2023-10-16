/// <reference types="react" />
interface WrapperProps {
    breakpoint: number;
    gap: string;
    smmargin: string;
    smpadding: string;
    lgmargin: string;
    lgpadding: string;
}
export declare const Wrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, WrapperProps>>;
export declare const FirstBox: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    ratio: number;
}>>;
export declare const SecondBox: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    ratio: number;
}>>;
export {};
