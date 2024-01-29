import { TraefikEnterpriseIcon, TraefikHubIcon, TraefikProxyIcon } from 'components/icons'
import { ReactNode } from 'react'
import styled from 'styled-components'

const Tooltip = styled.div`
  display: inline-block;

  &:hover {
    .btn-hub {
      background-color: #54b4cd;
      transition: background-color 0.3s;
    }

    .btn-hub::after,
    .tooltip {
      visibility: visible;
      opacity: 1;
    }
  }

  .btn-hub {
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

    &::after {
      content: '';
      visibility: hidden;
      position: absolute;
      top: 87%;
      right: calc(50% - 8px);
      z-index: 2;
      border-style: solid;
      border-width: 0 8px 14px 8px;
      border-color: transparent transparent ${({ theme }) => theme.contentBackgroundColor} transparent;

      opacity: 0;
      transition: opacity 0.3s;
    }

    label {
      cursor: pointer;
      text-align: center;
    }
  }

  .tooltip {
    display: flex;
    flex-direction: column;

    position: absolute;
    z-index: 1;
    top: inherit;
    right: 0;
    width: 400px;

    opacity: 0;
    transition: opacity 0.3s;
    visibility: hidden;

    .spacer {
      height: 8px;
    }

    .content {
      display: flex;
      font-size: 16px;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.contentBackgroundColor};
      box-shadow: ${({ theme }) => theme.contentBoxShadow};
      overflow: hidden;

      .products {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
        margin: 16px;

        .product {
          display: flex;
          gap: 16px;
          padding: 16px;
          border-radius: 8px;
          transition: background-color 0.3s;

          &:hover {
            background-color: ${({ theme }) => theme.productBackgroundColor};
          }

          svg {
            flex-shrink: 0;
          }

          h3 {
            color: ${({ theme }) => theme.productNameColor};
            font-size: 1rem;
            font-weight: 900;
            line-height: 22px;
            margin: 2px 0 0 0;
          }

          p {
            color: ${({ theme }) => theme.productDescColor};
            line-height: 1.5;
            margin: 0 0 10px 0;
          }

          a {
            font-weight: 900;
            line-height: 22px;
            text-decoration: none;
            transition: opacity 0.25s linear;

            &:hover {
              opacity: 0.7;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .btn-hub {
      line-height: 1em;
    }

    .tooltip {
      right: 16px;

      .spacer {
        height: 3px;
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .btn-hub {
      line-height: 1.25em;
    }

    .tooltip .spacer {
      height: 3px;
    }
  }
`

type Product = {
  icon: {
    color: {
      dark: string
      light: string
    }
    el: ReactNode
  }
  name: string
  desc: string
  link: {
    color: {
      dark: string
      light: string
    }
    href: string
    text: string
  }
}

const products: Product[] = [
  {
    icon: {
      color: {
        dark: '#2aa2c1',
        light: '#21819a',
      },
      el: <TraefikProxyIcon />,
    },
    name: 'Traefik Proxy',
    desc: 'OSS Cloud-Native Application Proxy',
    link: {
      color: {
        dark: '#2aa2c1',
        light: '#21819a',
      },
      text: 'Get Commercial Support',
      href: 'https://traefik.io/get-traefik-commercial-support/',
    },
  },
  {
    icon: {
      color: {
        dark: '#337fe6',
        light: '#337fe6',
      },
      el: <TraefikEnterpriseIcon />,
    },
    name: 'Traefik Enterprise',
    desc: 'Enterprise-Grade API Gateway',
    link: {
      color: {
        dark: '#337fe6',
        light: '#337fe6',
      },
      text: 'Learn more',
      href: 'https://traefik.io/explore-traefik-enterprise/',
    },
  },
  {
    icon: {
      color: {
        dark: '#d5ea48',
        light: '#7f8c2b',
      },
      el: <TraefikHubIcon />,
    },
    name: 'Traefik Hub',
    desc: 'GitOps-Driven API Management',
    link: {
      color: {
        dark: '#d5ea48',
        light: '#555d1c',
      },
      text: 'Learn more',
      href: 'https://traefik.io/explore-traefik-hub/',
    },
  },
]

const HubButton = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <Tooltip>
      <a href="https://traefik.io/try-hub-now" target="_blank" className="btn-hub">
        Upgrade
      </a>
      <div className="tooltip">
        <div className="spacer">
          <span></span>
        </div>
        <div className="content">
          <div className="products">
            {products.map((product, index) => (
              <div className="product" key={index}>
                <div style={{ color: product.icon.color[theme] }}>{product.icon.el}</div>
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.desc}</p>
                  <a
                    href={product.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={product.link.text}
                    style={{ color: product.link.color[theme] }}
                  >
                    {product.link.text} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Tooltip>
  )
}

export default HubButton
