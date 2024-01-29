import HubButton from 'components/HubButton'
import { darkTheme, lightTheme } from 'components/themes'
import { ThemeProvider } from 'styled-components'

export const App = ({ theme = 'light' }: { theme?: 'light' | 'dark' }) => {
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <HubButton theme={theme} />
    </ThemeProvider>
  )
}

export default App
