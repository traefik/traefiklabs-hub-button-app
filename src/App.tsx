import HubButton from 'components/HubButton'
import { darkTheme, lightTheme } from 'components/themes'
import { useMemo } from 'react'
import { ThemeProvider } from 'styled-components'

export const App = ({ theme = 'light' }: { theme?: 'light' | 'dark' }) => {
  const safeTheme = useMemo(() => {
    if (!['light', 'dark'].includes(theme)) {
      return 'light'
    }
    return theme
  }, [theme])

  return (
    <ThemeProvider theme={safeTheme === 'dark' ? darkTheme : lightTheme}>
      <HubButton theme={safeTheme} />
    </ThemeProvider>
  )
}

export default App
