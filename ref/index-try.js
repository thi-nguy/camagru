console.log("hello world");
global.luckyNumber = "13"; // khi viet nhu nay thi luc nao cung access duoc luckyNumber
console.log(global.luckyNumber);
console.log(process.platform);
console.log(process.env.USER);
//Listen on event:
process.on("exit", function () {
  console.log("exit event has just happened");
}); // Khi event exit xay ra, function kia se duoc goi. Ta co the create function o cho khac va goi fucnction do. ==> Qua trinh nay goi la Callback

/************************************************************* */
// Create your own event
const { EventEmitter } = require("events");
// dung require de load module (la smaller JS file ma da duoc viet san de execute mot nhiem vu nao do). 'fs, event' cung la modules cua JS.
// giong nhu kieu 'install' mot cai library nao do de dung, giong nhu trong React se la import something from something

// Trong ES modules thi dung import/export thay vi require function

const eventEmitter = new EventEmitter();

eventEmitter.on("lunch", () => {
  console.log("Event Lunch has just happend: yummy!!");
});

eventEmitter.emit("lunch");
/*************************************************************** */

const { readFile, readFileSync } = require("fs"); // fs = function system
/*********** These codes are blocking ********/
const txt = readFileSync("./hello.txt", "utf8");
console.log(txt);
console.log("do this ASAP");

/*********** These codes are Non-blocking ********/
readFile("./hello.txt", "utf8", (err, nonBlockingTxt) => {
  console.log(nonBlockingTxt); // do this second
});
console.log("Do this ASAP 2"); // do this first

/************************************************** */
/* Asynchronism and Promise */

// const { readFile } = require("fs").promises;
// async function hello() {
//   const file = await readFile("./hello.txt", "utf8");
// }

/************************************************** */
/* Cach dung our own module
* Nhung Thuong la chung ta 'import/install' module ma nguoi khac da viet. Vi du Express
* node package manager: npm: la mot tool de install mot remote packages/module
* Raw codes cua dependencies ma ta install bang npm install duoc chua trong folder node_modules
*/
const myModule = require("./my-module");
console.log(myModule);
 
const express = require('express');