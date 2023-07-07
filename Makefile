.PHONY: deps build static-assets build-and-gen

default: deps build static-assets

deps:
	yarn install

build:
	yarn build

static-assets:
	yarn rm-static-assets
	mkdir -p static-assets
	cp build/static/js/*.js static-assets/main-v1.js
	sed -i '1s@.*@\/* eslint-disable *\/@' static-assets/main-v1.js
	sed -i '3s@.*@\/\/# sourceMappingURL=https:\/\/traefik.github.io\/traefiklabs-hub-button-app\/main-v1.js.map@' static-assets/main-v1.js
	cp build/static/js/*.js.map static-assets/main-v1.js.map
	sed -i '1s@static\/js\/main.bf4a093e.js@https:\/\/traefik.github.io\/traefiklabs-hub-button-app\/main-v1.js@' static-assets/main-v1.js.map
