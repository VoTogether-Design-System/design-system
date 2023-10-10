import { Size } from '../types';
interface ButtonInfo {
    text: string;
    event: () => void;
}
interface ToggleSwitchProps {
    size: Size | 'free';
    selectedButton: string;
    firstButton: ButtonInfo;
    secondButton: ButtonInfo;
}
export default function ToggleSwitch({ size, selectedButton, firstButton, secondButton, }: ToggleSwitchProps): import("react/jsx-runtime").JSX.Element;
export {};
