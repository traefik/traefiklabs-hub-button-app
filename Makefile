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
	cp dist/hub-button-app.umd.js static-assets/main-v1.umd.js
	cp dist/hub-button-app.umd.js.sig static-assets/main-v1.umd.js.sig
	cp dist/hub-button-app.umd.js.map static-assets/main-v1.umd.js.map
	sed -i -E '1s@hub-button-app.umd.js@https:\/\/traefik.github.io\/traefiklabs-hub-button-app\/main-v1.umd.js@' static-assets/main-v1.umd.js.map
