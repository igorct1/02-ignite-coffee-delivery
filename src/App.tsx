import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { AppContainer } from './styles'
import { CartProvider } from './contexts/CartContext'
import { GlobalStyles } from './styles/global'

export function App() {
  return (
    <AppContainer>
      <CartProvider>
        <ThemeProvider theme={DefaultTheme}>
          <BrowserRouter>
            <Router />
            <GlobalStyles />
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
    </AppContainer>
  )
}
