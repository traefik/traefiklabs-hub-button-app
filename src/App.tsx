import HubButton from 'components/HubButton'

export const App = ({ background = '#54b4cd', color = '#ffffff' }: { background?: string; color?: string }) => {
  return <HubButton background={background} color={color} />
}

export default App
