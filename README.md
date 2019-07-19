In general ECMA6 import export not work with NodeJS.
To do so,
1. Make sure you've installed NodeJS 10/10+ version.
2. Create files with extension `.mjs` instead `.js`
3. Run command `node --experimental-modules --harmony index.mjs`
   
   or, you can follow `package.json` and run using npm. `npm install && npm run-script run` for first time, after that `npm run-script run`
   
   or, if you would like to run immediately after change anything `nodemon --experimental-modules --harmony index.mjs ` 