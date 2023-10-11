interface TableProps<T> {
    columns: string[];
    rows: T;
    dense?: boolean;
}
export default function Table<T extends object>({ columns, rows, dense, }: TableProps<T[]>): import("react/jsx-runtime").JSX.Element;
export {};
