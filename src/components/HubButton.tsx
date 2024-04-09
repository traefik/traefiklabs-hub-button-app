import styled from 'styled-components'

const StyledButton = styled.a`
  display: inline-block;
  padding: 13px 12px;

  border-radius: 8px;
  background-color: #54b4cd;
  color: #03192d;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.38;
  text-decoration: none;

  position: relative;

  label {
    cursor: pointer;
    text-align: center;
  }

  &:hover {
    background-color: #7fc7d9;
    transition: background-color 0.1s;
  }
`

const HubButton = () => {
  return (
    <StyledButton href="https://traefik.io/upgrade-traefik" target="_blank">
      Upgrade
    </StyledButton>
  )
}

export default HubButton
