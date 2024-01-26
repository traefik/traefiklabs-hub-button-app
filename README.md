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

## How to use

Put the full URL of the script file in the `src` attribute of a `<script>` tag:

```html
<script src="https://traefik.github.io/traefiklabs-hub-button-app/main-v1.js"></script>
```

You can place the script reference in head or body tag, as you like.

Then, you can use the **hub-button-app** custom element wherever you need it.
Please notice the custom element exposes a property called **theme** to control its appearance; possible values can be
`dark` or `light`, with light as the default value.

The script (and its sourcemap) can be also embedded in another project codebase; this can be useful as a local fallback
in case the remote source became unavailable.
While doing this please remember to update, in both the script and its sourcemap, the following lines:

| File | Line | Key |
| - | - | - |
| main-v1.js | 3 | `sourceMappingURL` |
| main-v1.js.map | 1 | `file` |

### Deployments URLs

- https://traefik.github.io/traefiklabs-hub-button-app/main-v1.js
- https://traefik.github.io/traefiklabs-hub-button-app/main-v1.js.map
