import React from 'react'
import styled from 'styled-components'

import { Flex, Grid, Heading } from '@containous/faency'
import NavItem from './NavItem'
import Product from './Product'
import * as MenuColumn from './MenuColumn'

import {
  TraefikHubLogo,
  TraefikEnterpriseLogo,
  TraefikProxyLogo,
  TraefikMeshLogo,
  RocketIcon,
  GithubIcon,
  DocsIcon,
  PriceTagIcon,
  LaptopIcon,
  APIIcon,
  KubernetesIcon,
  DockerSwarmIcon,
} from 'images'
import PostCard from './PostCard'

const Wrapper = styled(Flex)`
  display: none;

  @media (min-width: 1150px) {
    display: flex;
  }
`

const MainNav: React.FC = () => {

  return (
    <Wrapper as="nav" style={{ height: '100%', alignItems: 'center', marginLeft: '65px' }} aria-label="Main menu">
      <Flex as="ul" sx={{ height: '100%', alignItems: 'center', p: 0, m: 0, listStyle: 'none' }}>
        <NavItem name="Try Traefik Hub" hasSubmenu>
          <Grid sx={{ gridTemplateColumns: 'repeat(2, 364px)' }}>
            <Product
                title="Traefik Hub"
                titleHtml={
                  <Flex sx={{ alignItems: 'center', mt: '12px' }}>
                    <Heading
                        as="h2"
                        sx={{
                          fontSize: '20px',
                          fontWeight: 700,
                          lineHeight: 1.33,
                          letterSpacing: 0,
                          fontFamily: 'inherit',
                        }}
                    >
                      Traefik Hub
                    </Heading>
                  </Flex>
                }
                description="Your APIs deserve better"
                logo={<TraefikHubLogo />}
                url="https://traefik.io/traefik-hub/"
                color="#7f8c2b"
                bgColor="#f4f5f6"
                links={[
                  {
                    title: 'Free Trial',
                    url: 'http://traefik.io/traefik-hub-signup',
                    external: true,
                    icon: <RocketIcon aria-hidden="true" />,
                  },
                ]}
            />
          </Grid>
        </NavItem>

      </Flex>
    </Wrapper>
  )
}

export default MainNav
