import { styled } from 'styled-components';
import { Size } from '../types';
import { theme } from '../style/theme';

interface ButtonProps {
  size: Size;
  isAutoResize: boolean;
}

const SIZE = {
  sm: { button: '30px' },
  md: { button: '45px' },
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
    width: ${({ size, isAutoResize }) =>
      isAutoResize && `calc(${SIZE[size].button} * 1.1)`};
    height: ${({ size, isAutoResize }) =>
      isAutoResize && `calc(${SIZE[size].button} * 1.1)`};
  }

  @media (min-width: ${theme.breakpoint.lg}) {
    width: ${({ size, isAutoResize }) =>
      isAutoResize && `calc(${SIZE[size].button} * 1.2)`};
    height: ${({ size, isAutoResize }) =>
      isAutoResize && `calc(${SIZE[size].button} * 1.2)`};
  }
`;
