import { ButtonHTMLAttributes, CSSProperties, PropsWithChildren } from 'react';
import { Size } from '../types';
interface RoundButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
    size?: Size;
    style?: CSSProperties;
    isAutoResize?: boolean;
}
export default function RoundButton({ size, style, isAutoResize, children, ...rest }: RoundButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
