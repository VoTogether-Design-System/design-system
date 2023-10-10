import { ButtonHTMLAttributes, ReactNode } from 'react';
interface SquareButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme: 'blank' | 'fill' | 'gray';
    children: ReactNode;
}
export default function SquareButton({ theme, children, ...rest }: SquareButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
