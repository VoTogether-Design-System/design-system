interface TableProps<T> {
    columns: string[];
    rows: T;
    dense?: boolean;
    columnTemplate?: string;
}
export default function Table<T extends object>({ columns, rows, dense, columnTemplate, }: TableProps<T[]>): import("react/jsx-runtime").JSX.Element;
export {};
