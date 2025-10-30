import styled from 'styled-components'

const parseInlineStyle = (style: string) => {
  const template = document.createElement('template')
  template.setAttribute('style', style)
  return Object.entries(template.style)
    .filter(([key]) => !/^[0-9]+$/.test(key))
    .filter(([, value]) => Boolean(value))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
}

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: fit-content;
  font-family:
    Rubik,
    -apple-system,
    system-ui,
    'Segoe UI',
    'Helvetica Neue',
    helvetica,
    arial,
    sans-serif;
`

const TooltipContent = styled.div<{ $side: 'top' | 'bottom'; $align: 'left' | 'center' | 'right' }>`
  position: absolute;
  z-index: 1000;
  padding: 8px 12px;
  background-color: #363b56;
  color: #ffffff;
  font-size: 14px;
  border-radius: 6px;
  opacity: 0;
  visibility: hidden;
  width: 260px;
  transition:
    opacity 0.3s,
    visibility 0.3s;
  pointer-events: none;

  ${({ $side }) =>
    $side === 'top'
      ? `
    bottom: calc(100% + 8px);
  `
      : `
    top: calc(100% + 8px);
  `}

  ${({ $align }) => {
    if ($align === 'left') {
      return `
        left: 0;
        transform: translateX(0);
      `
    } else if ($align === 'right') {
      return `
        right: 0;
        transform: translateX(0);
      `
    } else {
      return `
        left: 50%;
        transform: translateX(-50%);
      `
    }
  }}

  /* Arrow */
  &::after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 6px;

    ${({ $side }) =>
      $side === 'top'
        ? `
      top: 100%;
    `
        : `
      bottom: 100%;
    `}

    ${({ $align }) => {
      if ($align === 'left') {
        return `
          left: 12px;
          transform: translateX(0);
        `
      } else if ($align === 'right') {
        return `
          right: 12px;
          transform: translateX(0);
        `
      } else {
        return `
          left: 50%;
          transform: translateX(-50%);
        `
      }
    }}
  }
`

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
  width: fit-content;

  span {
    margin-bottom: 1px;
  }

  &:hover {
    filter: brightness(110%);
  }

  &:hover + ${TooltipContent} {
    opacity: 1;
    visibility: visible;
  }
`

interface HubButtonProps {
  style?: string
  side?: 'top' | 'bottom'
  align?: 'left' | 'center' | 'right'
}

const HubButton = ({ style, side = 'bottom', align = 'center' }: HubButtonProps) => {
  return (
    <TooltipWrapper>
      <StyledButton
        href="https://traefik.io/upgrade-traefik"
        target="_blank"
        style={style ? parseInlineStyle(style) : {}}
      >
        <span>Upgrade to Traefik Hub</span>
      </StyledButton>

      <TooltipContent $side={side} $align={align}>
        In-place upgrade (less than 1 minute) that preserves your proxy configuration.
      </TooltipContent>
    </TooltipWrapper>
  )
}

export default HubButton
