import styled from 'styled-components'

const StyledButton = styled.a`
  display: inline-block;
  padding: 13px 12px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;

  position: relative;

  label {
    cursor: pointer;
    text-align: center;
  }

  &:hover {
    filter: brightness(110%);
  }
`

const HubButton = ({ background = '#54b4cd', color = '#ffffff' }: { background: string; color: string }) => {
  return (
    <StyledButton href="https://traefik.io/upgrade-traefik" target="_blank" style={{ background, color }}>
      Upgrade
    </StyledButton>
  )
}

export default HubButton
