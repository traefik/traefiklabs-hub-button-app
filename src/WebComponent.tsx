import HubButton from 'components/HubButton'

export const WebComponent = ({
  style,
  side,
  align,
}: {
  style?: string
  side?: 'top' | 'bottom'
  align: 'left' | 'center' | 'right'
}) => {
  return <HubButton style={style} side={side} align={align} />
}

export default WebComponent
