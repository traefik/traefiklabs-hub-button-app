import HubButton from 'components/HubButton'

export const App = ({ style }: { style?: string }) => {
  return (
    <div style={{ height: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <HubButton style={style} />
    </div>
  )
}

export default App
