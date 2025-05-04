import 'styled-components'
import type { defaultTheme } from '../styles/themes/default'

type themeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends themeType {}
}
