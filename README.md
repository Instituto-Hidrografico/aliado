# _Application Front_

![github](https://img.shields.io/github/stars/gadelhati/application-front?style=social "Github")
![react](https://img.shields.io/badge/react-17.0.2-6495ED "React")

#### Necessary Tech stack:

- [x] name			file name version			link for download
- [x] node:			node-v18.8.0-x64			https://nodejs.org/en/
- [x] visual studio:	VSCodeUserSetup-x64-1.70.2	https://code.visualstudio.com/docs/?dv=win64user

## Description
As a naval tradition, the board game called Aliado is very similar to Ludo, which in the Merchant Navy was called Pitoco, in the Brazilian Navy it was called Aliado. .


## how to create this project
```
npm create vite@latest aliado -- --template react-ts
```
## License

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

### Necessary Tech stack
## installation of dependencies
```
npm install
npm install -g npm
npm install react-router-dom
npm install --save styled-components
npm install @stitches/react
npm install @radix-ui/react-*
npm install bootstrap
<!-- npm install --save react-dropzone -->
npm install --save-dev @types/node
npm install surge --legacy-peer-deps
npm install caniuse-lite --legacy-peer-deps
npm install coreui/react@3.4.1 --force
```

## how to run project
```
npm run dev
```
## how to build project
```
npm run build
```

# libraries
## visual, css in js
>[styled-components](https://styled-components.com/)

>[stitches](https://stitches.dev/)
## functional
>[radix ui](https://www.radix-ui.com/docs/primitives/overview/introduction)

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

> [http://localhost:3128/](http://localhost:3128)

## Developer

> [Gadelha TI](https://github.com/gadelhati)
> [Diego](https://github.com)
> [Lucas](https://github.com)

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

## Deploy
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

## deploy in surge
```
surge
 >project: <path to /dist directory>
```

### Edit /etc/nginx/conf.d/default.conf

Add the new code
```
location /<folder> {
    root    /usr/share/nginx/html;
    index   index.html  index.htm;
}
```