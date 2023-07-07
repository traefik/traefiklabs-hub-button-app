# Traefik Hub Button with WebComponents

This Project aims to solve the issue to have a Hub buttonin the Traefik dashboard.

WebComponents are a way to define a custom component that runs as any other HTML component, so it can be used in any framework or even in pure HTML files, after importing the JS file with the component definition.

For this project, it was used a React version of the Header, encapsulated in a custom component called "hub-button-app".

Any future changes in the header must be done in this Repo, and should be automatically propagated to all pages that uses it.

## How to test

- Clone the project
- `yarn install`
- `yarn start`

Check the page that opens if the Header is properly rendered and if the latest post has been fetched.

## How to build

- `yarn install`
- `yarn build`

It will create a `build` folder with the compiled assets.

## URL

https://traefik.github.io/traefiklabs-hub-button-app/main-v1.js
https://traefik.github.io/traefiklabs-hub-button-app/main-v1.js.map
