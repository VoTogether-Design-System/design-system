import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../style/globalStyle';
import { ReactNode } from 'react';
import { theme } from '../style/theme';

interface VDSProviderProps {
  children: ReactNode;
}

export default function VDSProvider({ children }: VDSProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
