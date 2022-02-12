#!/bin/sh
echo deploying...
rm *.html *.js *.css *.ico *.txt
cd ramaniwebsite
ng build
cd ..
cp -r ramaniwebsite/dist/ramaniwebsite/* ./
git add .
git commit -m "."
git push origin main
