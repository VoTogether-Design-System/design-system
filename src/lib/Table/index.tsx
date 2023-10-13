import * as S from './style';

interface TableProps<T> {
  columns: string[];
  rows: T;
  dense?: boolean;
  columnTemplate?: string;
}

export default function Table<T extends object>({
  columns,
  rows,
  dense = false,
  columnTemplate,
}: TableProps<T[]>) {
  return (
    <S.Wrapper>
      <S.Table>
        <S.THead>
          <S.Tr $columnTemplate={columnTemplate} $childLength={columns.length}>
            {columns.map((column) => (
              <S.Th>{column}</S.Th>
            ))}
          </S.Tr>
        </S.THead>
        <S.Tbody>
          {rows.length === 0 ? (
            <S.EmptyData>No Data</S.EmptyData>
          ) : (
            <>
              {rows.map((row, index) => (
                <S.Tr
                  key={index}
                  $columnTemplate={columnTemplate}
                  $childLength={columns.length}
                >
                  {Object.entries(row).map(([key, value], index) => (
                    <S.Td key={`${key}${index}`} $dense={dense}>
                      {value}
                    </S.Td>
                  ))}
                </S.Tr>
              ))}
            </>
          )}
        </S.Tbody>
      </S.Table>
    </S.Wrapper>
  );
}
