#!/bin/sh
echo Deploying...
rm -r *.html *.js *.css *.ico *.txt assets 
cd ramaniwebsite
ng build
cd ..
cp -r ramaniwebsite/dist/ramaniwebsite/* ./
git add .
git commit -m "."
git push origin main
