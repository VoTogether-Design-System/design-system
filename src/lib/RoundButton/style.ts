import { styled } from 'styled-components';
import { Size } from '../types';
import { theme } from '../style/theme';

interface ButtonProps {
  size: Size;
}

const SIZE = {
  sm: { button: '25px' },
  md: { button: '40px' },
  lg: { button: '60px' },
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => SIZE[props.size].button};
  height: ${(props) => SIZE[props.size].button};
  border-radius: 50%;

  background-color: var(--primary-color);
  color: var(--white);

  cursor: pointer;

  @media (min-width: ${theme.breakpoint.md}) {
    width: ${(props) => `calc(${SIZE[props.size].button} * 1.2)`};
    height: ${(props) => `calc(${SIZE[props.size].button} * 1.2)`};
  }

  @media (min-width: ${theme.breakpoint.lg}) {
    width: ${(props) => `calc(${SIZE[props.size].button} * 1.4)`};
    height: ${(props) => `calc(${SIZE[props.size].button} * 1.4)`};
  }
`;
