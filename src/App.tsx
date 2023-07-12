import './styles/global.css'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { AppContainer } from './styles'

export function App() {
  return (
    <AppContainer>
      <ThemeProvider theme={DefaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </AppContainer>
  )
}
