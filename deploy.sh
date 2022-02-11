#!/bin/sh
echo deploying...
cd ramaniwebsite
ng build
cd ..
cp ramaniwebsite/dist/ramaniwebsite/* ./
git add .
git commit -m "."
git push origin main
