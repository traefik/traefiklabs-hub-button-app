import styled from 'styled-components'

const parseInlineStyle = (style: string) => {
  const template = document.createElement('template')
  template.setAttribute('style', style)
  return Object.entries(template.style)
    .filter(([key]) => !/^[0-9]+$/.test(key))
    .filter(([, value]) => Boolean(value))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
}

const StyledButton = styled.a`
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 12px;
  background-color: #54b4cd;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  color: #ffffff;
  position: relative;

  span {
    margin-bottom: 1px;
  }

  &:hover {
    filter: brightness(110%);
  }
`

const HubButton = ({ style }: { style?: string }) => {
  return (
    <StyledButton
      href="https://traefik.io/upgrade-traefik"
      target="_blank"
      style={style ? parseInlineStyle(style) : {}}
    >
      <span>Upgrade</span>
    </StyledButton>
  )
}

export default HubButton
