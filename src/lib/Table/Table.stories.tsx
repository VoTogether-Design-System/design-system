import type { Meta, StoryObj } from '@storybook/react';

import Table from '.';
import {
  MEMBER_LIST,
  MEMBER_LIST_COLUMN,
  MEMBER_LIST_COLUMN_WITH_BUTTON,
  MEMBER_LIST_MANY_COLUMNS,
  MEMBER_LIST_MANY_COLUMNS_LIST,
  MEMBER_LIST_WITH_BUTTON,
} from './mockData';

const meta: Meta<typeof Table> = {
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

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

export const Default: Story = {
  render: () => (
    <Table<Member> columns={MEMBER_LIST_COLUMN} rows={MEMBER_LIST} />
  ),
};

export const Dense: Story = {
  render: () => (
    <Table<Member> columns={MEMBER_LIST_COLUMN} rows={MEMBER_LIST} dense />
  ),
};

export const ManyColumns: Story = {
  render: () => (
    <Table<Member>
      columns={MEMBER_LIST_MANY_COLUMNS}
      rows={MEMBER_LIST_MANY_COLUMNS_LIST}
    />
  ),
};

export const NoData: Story = {
  render: () => <Table<Member> columns={MEMBER_LIST_COLUMN} rows={[]} />,
};

export const WithUserInteraction: Story = {
  render: () => (
    <Table<Member>
      columns={MEMBER_LIST_COLUMN_WITH_BUTTON}
      rows={MEMBER_LIST_WITH_BUTTON}
    />
  ),
};
