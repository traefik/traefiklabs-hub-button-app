import { CheckIcon, TraefikHubIcon } from 'components/icons'
import { CTAImage } from 'components/images'
import styled from 'styled-components'

const Tooltip = styled.div`
  display: inline-block;

  &:hover {
    .btn-hub::after,
    .tooltip {
      visibility: visible;
      opacity: 1;
    }
  }

  .btn-hub {
    display: inline-block;
    padding: 9px 16px;

    border-radius: 8px;
    background-color: #222b3c;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    line-height: inherit;
    text-decoration: none;

    position: relative;

    &::after {
      content: '';
      visibility: hidden;
      position: absolute;
      top: 88%;
      right: calc(50% - 7px);
      z-index: 2;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-bottom: 10px solid ${({ theme }) => theme.contentBackgroundColor};

      opacity: 0;
      transition: opacity 0.3s;
    }

    .btn-hub-inner {
      display: flex;
      align-items: center;
      flex-wrap: nowrap !important;
      gap: 8px;

      label {
        cursor: pointer;
      }
    }
  }

  .tooltip {
    display: flex;
    flex-direction: column;

    position: absolute;
    z-index: 1;
    top: inherit;
    right: 0;
    width: 836px;

    opacity: 0;
    transition: opacity 0.3s;
    visibility: hidden;

    .spacer {
      height: 5px;
    }

    .content {
      display: flex;
      font-size: 16px;
      border-radius: 16px;
      background-color: ${({ theme }) => theme.contentBackgroundColor};
      box-shadow: ${({ theme }) => theme.contentBoxShadow};
      overflow: hidden;

      .left {
        flex-shrink: 0;
        padding: 9px 22px 40px 22px;
        background-color: #060b21;
        text-align: center;

        svg {
          flex-shrink: 0;
        }

        p {
          max-width: 288px;
          margin: 13px auto 31px auto;
          color: #f9fafa;
          font-size: 2.25rem;
          font-weight: 900;
          line-height: 1.33;
          text-align: center;
        }

        .sign-up {
          display: inline-block;
          padding: 11px 25px 10px 25px;
          color: #03192d;
          background-color: #d5ea48;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 900;
          line-height: normal;
          text-align: center;
          text-decoration: none;
          transition: background-color 0.25s linear;

          &:hover {
            background-color: #e5f291;
          }
        }
      }

      .right {
        padding: 48px 32px;

        .features {
          display: flex;
          flex-direction: column;
          gap: 26px;
          margin: 7px 5px 53px 0;

          .feature {
            display: flex;
            gap: 16px;

            svg {
              flex-shrink: 0;
            }

            h3 {
              color: ${({ theme }) => theme.featureHColor};
              font-size: 1rem;
              font-weight: 900;
              line-height: 22px;
              margin: 0;
            }

            p {
              color: ${({ theme }) => theme.featurePColor};
              line-height: 1.5;
              margin: 0;
            }
          }
        }

        .learn-more {
          display: block;
          margin: 0 auto;
          color: ${({ theme }) => theme.learnMoreColor};
          font-size: 1rem;
          font-weight: 900;
          line-height: 22px;
          text-align: center;
          text-decoration: none;
          transition: opacity 0.25s linear;

          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }
`

const features = [
  {
    h: 'K8s-native API Management',
    p: 'K8s services auto-discovery, 100% CRDs configuration, full GitOps compliance.',
  },
  {
    h: 'Central Control Plane',
    p: 'A simple management point for all APIs, users and infrastructure components.',
  },
  {
    h: 'Self-serve API Portal',
    p: 'API discovery, documentation, testing, and access control.',
  },
]

const HubButton = () => {
  return (
    <Tooltip>
      <a href="https://traefik.io/try-hub-now" target="_blank" className="btn-hub">
        <div className="btn-hub-inner">
          <TraefikHubIcon />
          <label>Traefik Hub</label>
        </div>
      </a>
      <div className="tooltip">
        <div className="spacer">
          <span></span>
        </div>
        <div className="content">
          <div className="left">
            <CTAImage />
            <p>Your APIs deserve better</p>
            <a
              className="sign-up"
              href="https://traefik.io/try-hub-now"
              target="_blank"
              rel="noopener noreferrer"
              title="TRY TRAEFIK HUB"
            >
              TRY TRAEFIK HUB
            </a>
          </div>
          <div className="right">
            <div className="features">
              {features.map((feature, index) => (
                <div className="feature" key={index}>
                  <CheckIcon />
                  <div>
                    <h3>{feature.h}</h3>
                    <p>{feature.p}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              className="learn-more"
              href="https://traefik.io/explore-traefik-hub"
              target="_blank"
              rel="noopener noreferrer"
              title="Learn more about Traefik Hub"
            >
              Learn more about Traefik Hub →
            </a>
          </div>
        </div>
      </div>
    </Tooltip>
  )
}

export default HubButton
