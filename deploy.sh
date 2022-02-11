#!/bin/sh
echo deploying...
ng build
cp ramaniwebsite/dist/ramaniwebsite/* ./
git add .
git commit -m "."
