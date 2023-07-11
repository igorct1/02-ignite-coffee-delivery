import './styles/global.css'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <div>Home</div>
    </ThemeProvider>
  )
}
