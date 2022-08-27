# _Aliado_

<!-- ![gitlab](https://img.shields.io/gitlab/stars/Instituto-Hidrografico/aliado?style=social "Gitlab") -->
![github](https://img.shields.io/github/stars/Instituto-Hidrografico/aliado?style=social "Github")
![typescript](https://img.shields.io/badge/typescript-4.7-0076c6 "Typescript")
![node](https://img.shields.io/badge/node-18.8.0-75AC64 "Node")
![vscode](https://img.shields.io/badge/vscode-1.70.2-1E97E8 "Visual Studio Code")
<!-- ![java](https://img.shields.io/badge/java-18.0.2.1-0270B0 "Java JDK") -->
<!-- ![python](https://img.shields.io/badge/python-3.10.6-FFDC51 "Python") -->
<!-- ![intellij](https://img.shields.io/badge/intellij-2022.2.1-000000 "Visual Studio Code") -->

# Necessary Tech stack:

|   name            |file name version			|link for download
|:-----------------:|--------------------------:|:-----------------
|`typescript`       |                           |https://www.typescriptlang.org/
|`node`			    |node-v18.8.0-x64			|https://nodejs.org/en/
|`visual studio`	    |VSCodeUserSetup-x64-1.70.2	|https://code.visualstudio.com/docs/?dv=win64user
<!-- |intellij           |idealC-2022.2.1            |https://download-cdn.jetbrains.com/idea/ideaIC-2022.2.1.exe -->
<!-- |java               |jdk-18_windows-x64_bin     |https://download.oracle.com/java/18/latest/jdk-18_windows-x64_bin.exe -->
<!-- |python             |python-3.10.6-amd64        |https://www.python.org/ftp/python/3.10.6/python-3.10.6-amd64.exe -->

# Description
As a naval tradition, the board game called Aliado is very similar to Ludo, which in the Merchant Navy was called Pitoco, in the Brazilian Navy it was called Aliado. .

## how to create this project
```
npm create vite@latest aliado -- --template react-ts
```
## how to install dependencies for this project
```
npm install
npm install react-router-dom
npm install @stitches/react
```

## how to run this project
```
npm run dev
```
## how to build this project
```
npm run build
```

# Libraries
## visual, css in js
>[stitches](https://stitches.dev/)
# data fetching
>[react query](https://react-query.tanstack.com/)

>[graphql](https://graphql.org/)

>[uRQL](https://formidable.com/open-source/urql/)

# tests
>[testing-library](https://testing-library.com/docs/react-testing-library/intro/) : for unitary tests

>[cypress](https://www.cypress.io/)

## Reference API download link

> [https://github.com/gadelhati/application-back](https://github.com/gadelhati/application-back)

## Reference API, running locally

> [http://localhost:5173/](http://localhost:5173)

## Git

```
git config --global http.proxy http://username:password@proxy-armacao.mb:6060

git config --global user.name "GadelhaTI"
git config --global user.email "gadelha.ti@gmail.com"

git remote add origin <>
git add archive.txt
git add .
git commit –m "comment commit"
git pull
git tag 1.1.0 <insert-commitID-here>
git push -u origin master
git diff
```

## Deploy in nginx
```
npx browserslist@latest --update-db
set -e
npm run build
npm run preview
service nginx stop
rm -rf /usr/share/nginx/html/<old-name>
cp /home/<user>/<application-name>.zip /usr/share/nginx/html/
unzip /usr/share/nginx/html/<application-name>.zip
chown tomcat:tomcat /usr/share/nginx/html/<application-name>
rm /usr/share/nginx/html/<application-name>.zip
service nginx start
```

### Edit /etc/nginx/conf.d/default.conf

Add the new code
```
location /<folder> {
    root    /usr/share/nginx/html;
    index   index.html  index.htm;
}
```
## Deploy in surge
```
surge
 >project: <path to /dist directory>
```
# Developers

> [Gadelha TI](https://github.com/gadelhati)

> [Diego](https://github.com/diegoferreirapinto)

> [Lucas](https://github.com/lucassmartins)
# License

> [MIT License](https://choosealicense.com/licenses/mit/)
```
MIT License

Copyright (c) 2020 Jason Watmore

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```