/// <reference types="react" />
interface Member {
    id: number;
    name: string;
    age: number;
    gender: 'MALE' | 'FEMALE';
    level: 'gold' | 'silver' | 'bronze';
    region?: string;
    enrolled_year?: number;
    point?: number;
}
export declare const MEMBER_LIST_COLUMN: string[];
export declare const MEMBER_LIST_MANY_COLUMNS: string[];
export declare const MEMBER_LIST: Member[];
export declare const MEMBER_LIST_MANY_COLUMNS_LIST: Member[];
interface MemberClickButton extends Member {
    editButton: React.ReactElement;
    deleteButton: React.ReactElement;
}
export declare const MEMBER_LIST_COLUMN_WITH_BUTTON: string[];
export declare const MEMBER_LIST_WITH_BUTTON: MemberClickButton[];
export {};
