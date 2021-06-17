#!/usr/bin/env sh

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m deploy &&
git remote add origin git@github.com:April-cl/big-screen-website.git &&
git branch -M main &&
git push -uf origin main &&
cd -;