import './styles/global.css'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
