import { StyledButton } from './style';

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

export const MEMBER_LIST_COLUMN = ['Id', 'Name', 'Age', 'Gender', 'Level'];

export const MEMBER_LIST_MANY_COLUMNS = [
  'Id',
  'Name',
  'Age',
  'Gender',
  'Level',
  'Region',
  'Enrolled Year',
  'Point',
];

export const MEMBER_LIST: Member[] = [
  { id: 0, name: 'James', age: 21, gender: 'MALE', level: 'silver' },
  { id: 2, name: 'Chsua', age: 24, gender: 'MALE', level: 'gold' },
  { id: 4, name: 'Wus', age: 25, gender: 'FEMALE', level: 'bronze' },
  { id: 5, name: 'Jero', age: 23, gender: 'MALE', level: 'gold' },
  { id: 6, name: 'Dazzle', age: 21, gender: 'MALE', level: 'silver' },
  { id: 7, name: 'Lookh', age: 19, gender: 'FEMALE', level: 'gold' },
  { id: 8, name: 'Jeomxon', age: 21, gender: 'MALE', level: 'bronze' },
  { id: 11, name: 'Abel', age: 11, gender: 'FEMALE', level: 'bronze' },
  { id: 13, name: 'Chrone', age: 30, gender: 'MALE', level: 'silver' },
  { id: 15, name: 'Nero', age: 27, gender: 'FEMALE', level: 'gold' },
];

export const MEMBER_LIST_MANY_COLUMNS_LIST: Member[] = [
  {
    id: 0,
    name: 'James',
    age: 21,
    gender: 'MALE',
    level: 'silver',
    region: 'Korea',
    enrolled_year: 2023,
    point: 21,
  },
  {
    id: 2,
    name: 'Chsua',
    age: 24,
    gender: 'MALE',
    level: 'gold',
    region: 'Korea',
    enrolled_year: 2023,
    point: 21,
  },
  {
    id: 4,
    name: 'Wus',
    age: 25,
    gender: 'FEMALE',
    level: 'bronze',
    region: 'Korea',
    enrolled_year: 2023,
    point: 21,
  },
  {
    id: 5,
    name: 'Jero',
    age: 23,
    gender: 'MALE',
    level: 'gold',
    region: 'Korea',
    enrolled_year: 2023,
    point: 21,
  },
  {
    id: 6,
    name: 'Dazzle',
    age: 21,
    gender: 'MALE',
    level: 'silver',
    region: 'Korea',
    enrolled_year: 2023,
    point: 21,
  },
  {
    id: 7,
    name: 'Lookh',
    age: 19,
    gender: 'FEMALE',
    level: 'gold',
    region: 'Korea',
    enrolled_year: 2023,
    point: 21,
  },
  {
    id: 8,
    name: 'Jeomxon',
    age: 21,
    gender: 'MALE',
    level: 'bronze',
    region: 'Korea',
    enrolled_year: 2023,
    point: 21,
  },
  {
    id: 11,
    name: 'Abel',
    age: 11,
    gender: 'FEMALE',
    level: 'bronze',
    region: 'Korea',
    enrolled_year: 2023,
    point: 21,
  },
  {
    id: 13,
    name: 'Chrone',
    age: 30,
    gender: 'MALE',
    level: 'silver',
    region: 'Korea',
    enrolled_year: 2023,
    point: 21,
  },
  {
    id: 15,
    name: 'Very Long Long Long Long Long Name',
    age: 27,
    gender: 'FEMALE',
    level: 'gold',
    region: 'Korea',
    enrolled_year: 2023,
    point: 21,
  },
];

interface MemberClickButton extends Member {
  editButton: React.ReactElement;
  deleteButton: React.ReactElement;
}

export const MEMBER_LIST_COLUMN_WITH_BUTTON = [
  'Id',
  'Name',
  'Age',
  'Gender',
  'Level',
  'Edit',
  'Delete ',
];

export const MEMBER_LIST_WITH_BUTTON: MemberClickButton[] = [
  {
    id: 0,
    name: 'James',
    age: 21,
    gender: 'MALE',
    level: 'silver',
    editButton: (
      <StyledButton onClick={() => alert('You Clicked Button!')}>
        Edit
      </StyledButton>
    ),
    deleteButton: (
      <StyledButton onClick={() => alert('You Clicked Button!')}>
        Delete
      </StyledButton>
    ),
  },
  {
    id: 2,
    name: 'Chsua',
    age: 24,
    gender: 'MALE',
    level: 'gold',
    editButton: (
      <StyledButton onClick={() => alert('You Clicked Button!')}>
        Edit
      </StyledButton>
    ),
    deleteButton: (
      <StyledButton onClick={() => alert('You Clicked Button!')}>
        Delete
      </StyledButton>
    ),
  },
  {
    id: 4,
    name: 'Wus',
    age: 25,
    gender: 'FEMALE',
    level: 'bronze',
    editButton: (
      <StyledButton onClick={() => alert('You Clicked Button!')}>
        Edit
      </StyledButton>
    ),
    deleteButton: (
      <StyledButton onClick={() => alert('You Clicked Button!')}>
        Delete
      </StyledButton>
    ),
  },
  {
    id: 5,
    name: 'Jero',
    age: 23,
    gender: 'MALE',
    level: 'gold',
    editButton: (
      <StyledButton onClick={() => alert('You Clicked Button!')}>
        Edit
      </StyledButton>
    ),
    deleteButton: (
      <StyledButton onClick={() => alert('You Clicked Button!')}>
        Delete
      </StyledButton>
    ),
  },
  {
    id: 6,
    name: 'Dazzle',
    age: 21,
    gender: 'MALE',
    level: 'silver',
    editButton: (
      <StyledButton onClick={() => alert('You Clicked Button!')}>
        Edit
      </StyledButton>
    ),
    deleteButton: (
      <StyledButton onClick={() => alert('You Clicked Button!')}>
        Delete
      </StyledButton>
    ),
  },
  {
    id: 7,
    name: 'Lookh',
    age: 19,
    gender: 'FEMALE',
    level: 'gold',
    editButton: (
      <StyledButton onClick={() => alert('You Clicked Button!')}>
        Edit
      </StyledButton>
    ),
    deleteButton: (
      <StyledButton onClick={() => alert('You Clicked Button!')}>
        Delete
      </StyledButton>
    ),
  },
  {
    id: 8,
    name: 'Jeomxon',
    age: 21,
    gender: 'MALE',
    level: 'bronze',
    editButton: (
      <StyledButton onClick={() => alert('You Clicked Button!')}>
        Edit
      </StyledButton>
    ),
    deleteButton: (
      <StyledButton onClick={() => alert('You Clicked Button!')}>
        Delete
      </StyledButton>
    ),
  },
  {
    id: 11,
    name: 'Abel',
    age: 11,
    gender: 'FEMALE',
    level: 'bronze',
    editButton: (
      <StyledButton onClick={() => alert('You Clicked Button!')}>
        Edit
      </StyledButton>
    ),
    deleteButton: (
      <StyledButton onClick={() => alert('You Clicked Button!')}>
        Delete
      </StyledButton>
    ),
  },
  {
    id: 13,
    name: 'Chrone',
    age: 30,
    gender: 'MALE',
    level: 'silver',
    editButton: (
      <StyledButton onClick={() => alert('You Clicked Button!')}>
        Edit
      </StyledButton>
    ),
    deleteButton: (
      <StyledButton onClick={() => alert('You Clicked Button!')}>
        Delete
      </StyledButton>
    ),
  },
  {
    id: 15,
    name: 'Nero',
    age: 27,
    gender: 'FEMALE',
    level: 'gold',
    editButton: (
      <StyledButton onClick={() => alert('You Clicked Button!')}>
        Edit
      </StyledButton>
    ),
    deleteButton: (
      <StyledButton onClick={() => alert('You Clicked Button!')}>
        Delete
      </StyledButton>
    ),
  },
];
