import 'styled-components';
import { Breakpoint } from './lib/style/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoint: Breakpoint;
  }
}
