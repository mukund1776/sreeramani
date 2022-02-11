#!/bin/sh
echo deploying...
rm *.html *.js *.css *.ico
cd ramaniwebsite
ng build
cd ..
cp ramaniwebsite/dist/ramaniwebsite/* ./
git add .
git commit -m "."
git push origin main
