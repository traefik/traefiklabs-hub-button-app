.PHONY: deps clean build static-assets build-and-gen

default: deps build static-assets

deps:
	yarn install

build: clean deps
	yarn build

clean:
	rm -rf static-assets
	mkdir -p static-assets

static-assets: build
	cp dist/hub-button-app.js static-assets/main-v1.js
	cp dist/hub-button-app.js.sig static-assets/main-v1.js.sig
	cp dist/hub-button-app.js.map static-assets/main-v1.js.map
	sed -i -E '1s@hub-button-app.js@https:\/\/traefik.github.io\/traefiklabs-hub-button-app\/main-v1.js@' static-assets/main-v1.js.map

static-assets-pr: build
	cp dist/hub-button-app.js static-assets/main-v1.js
	sed -i '1s@.*@\/* eslint-disable *\/@' static-assets/main-v1.js
	sed -i '23s@.*@\/\/# sourceMappingURL=https:\/\/traefik.github.io\/traefiklabs-hub-button-app\/main-v1.js.map@' static-assets/main-v1.js
	
	cp dist/hub-button-app.js.map static-assets/main-v1.js.map
	sed -i -E '1s@hub-button-app.js@https:\/\/traefik.github.io\/traefiklabs-hub-button-app\/main-v1.js@' static-assets/main-v1.js.map
