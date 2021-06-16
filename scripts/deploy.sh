#!/usr/bin/env sh

yarn build &&
<<<<<<< HEAD
cd build &&
=======
cd dist &&
>>>>>>> b1af3a9951c31a4e3232f64d5558a27832a6eb56
git init &&
git add . &&
git commit -m deploy &&
git remote add origin git@github.com:April-cl/big-screen-website.git &&
git branch -M main &&
<<<<<<< HEAD
git push -uf origin main &&
=======
git push -uf origin main:gh-pages &&
>>>>>>> b1af3a9951c31a4e3232f64d5558a27832a6eb56
cd -;