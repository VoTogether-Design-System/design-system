import { styled } from 'styled-components';
import { theme } from '../style/theme';

export const Wrapper = styled.section`
  @media (max-width: 679px) {
    overflow-x: scroll;
  }
`;

export const Table = styled.table`
  width: 100%;
  min-width: 270px;
  min-height: 80px;

  font: var(--text-caption);
  text-align: center;

  border: 1px solid #e2e2e2;

  @media (max-width: 679px) {
    overflow-x: scroll;
    border-collapse: collapse;
  }
`;

export const Tbody = styled.tbody`
  width: 200px;
`;

export const THead = styled.thead`
  background-color: #dcf0fa;
`;

export const Tr = styled.tr<{ $columnTemplate?: string; $childLength: number }>`
  display: grid;
  grid-template-columns: ${({ $columnTemplate, $childLength }) =>
    $columnTemplate ? $columnTemplate : `repeat(${$childLength}, 1fr)`};
  gap: 10px;

  width: 100%;
  border-bottom: 1px solid #e2e2e2;
  padding: 0 15px;

  &:hover {
    background-color: #eeeeee;
  }
`;

export const Th = styled.th`
  display: flex;
  justify-content: start;

  padding: 10px 0;

  font: var(--text-caption);
  font-weight: 600;
`;

export const Td = styled.td<{ $dense: boolean }>`
  display: flex;
  justify-content: start;

  padding: ${(props) => (props.$dense ? '5px 0' : '10px 0')};

  @media (max-width: ${theme.breakpoint.sm}) {
    font-size: 13px;
  }
`;

export const EmptyData = styled.p`
  margin: 15px 0;
`;

export const StyledButton = styled.button`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px;
`;
