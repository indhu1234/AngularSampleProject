ng build --prod --aot
cp ./domo/manifest.json ./dist/product-app
cp ./domo/thumbnail.png ./dist/product-app
cd dist/product-app && domo publish