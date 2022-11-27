# camagru
Ref: https://www.youtube.com/watch?v=tfQXZ8jES6A&list=PL_-VfJajZj0VatBpaXkEHK_UPHL7dW6I3&index=5&ab_channel=F8Official
NodeJS, Express Framework: Server Side renderingn.

1. To Start a project:
`npm init`
- Then it will ask some setup. Entry point is the first file it search to implement, default is `index.js`.
- After this, it will create a file named `package.json`. In this file we can see all information of our project. Also when we install frameworks, libraries, they will appear in this file under `dependencies`
2. Create entry point (file `index.js`)
3. Install needed libraries, framework:
`npm install express`
- This package will appear inside `package.json`. Its dependencies will be inside `package-lock.json` (because it can depend on other packages, libraries too).
- Source codes of library is in `node_modules` folder.
4. Go to Expressjs >> Getting Started >> Follow it to have some ideas.
5. Run `node index.js` ==> run the server. Go to browser open `localhost:3000` to send request to server.
6. Install `nodemon`: a tool to automatically restart the node application while file changes. No need to Ctr+C the server and restart.
- Because this tool is used only for Development step, so we install it in `devDependencies` by doing:
`npm install nodemon --save-dev`
- After installing, we will see the package appears inside `devDependencies` in `package.json`.
`nodemon ./index.js` --> dat trong script start cua package.json. Sau do `npm start` la co the run duoc server.
- Dung nodemon de debug: https://www.youtube.com/watch?v=zCFOn4YXr00&list=PL_-VfJajZj0VatBpaXkEHK_UPHL7dW6I3&index=6&ab_channel=F8Official
`nodemon --inspect ./index.js` --> co the dung nodemon de debug, thay vi console.log. Dat duoc breakpoin...
7. Install `morgan` to see request on server.
`npm install morgan --save-dev`