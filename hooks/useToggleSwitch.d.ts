export declare const useToggleSwitch: (firstText: string, secondText: string) => {
    selectedButton: string;
    firstButton: {
        text: string;
        event: () => void;
    };
    secondButton: {
        text: string;
        event: () => void;
    };
};
