import HubButton from 'components/HubButton'
import { darkTheme, lightTheme } from 'components/themes'
import { ThemeProvider } from 'styled-components'

export const App = ({ theme = 'light' }: { theme?: string }) => {
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <HubButton />
    </ThemeProvider>
  )
}

export default App
