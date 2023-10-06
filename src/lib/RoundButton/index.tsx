import { ButtonHTMLAttributes, CSSProperties, PropsWithChildren } from 'react';

import { Size } from '../types';

import * as S from './style';
import { GlobalStyle } from '../style/globalStyle';

interface RoundButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  size?: Size;
  style?: CSSProperties;
}

export default function RoundButton({
  size = 'sm',
  style,
  children,
  ...rest
}: RoundButtonProps) {
  return (
    <>
      <GlobalStyle />
      <S.Button style={style} size={size} aria-label="더하기" {...rest}>
        {children}
      </S.Button>
    </>
  );
}
