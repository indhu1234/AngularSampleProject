ng build --prod --aot
cp ./domo/manifest.json ./dist/products-app
cp ./domo/thumbnail.png ./dist/products-app
cd dist/products-app && domo publish
