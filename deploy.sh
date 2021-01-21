#!bin/bash
cd docs && npm run build
cp -R src/.vuepress/dist/* ../