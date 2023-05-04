                                                    // Module package CORE
//setTimeout(function () {
    //console.log("ishga tushdi");
//}, 5000);

//let number = 0;
//setInterval(function () {
    //console.log("hisob", number);
    //number++;
//}, 1000);

//const fs = require("fs");
//const {networkInterfaces} = require("os");
//const data = fs.readFileSync("./input.text", "utf8");
//console.log(data);

//console.log("**********");

//fs/writeFileSync("./input.txt", `${data} /n/t/t by Muxriddin`);
//const new_data = fs.readFileSync("./input.txt", "utf8");
//console.log(new_data);



                                                                //Module package External


//const moment = require("moment");

//setInterval(() =>{
    //const time = moment().format();
   // console.log(`hozirgi vaqti: ${time}`);
//},5000);


//const iquirer = require('inquirer');
//inquirer 
//.prompt ([{type: "input", name: "raqam", message: "raqamni kiriting?"}])
//.then((answer) => {
 // console.log("men kiritgan raqam qiymati:", answer.raqam);
//})
//.catch((err) => console.log(err));


//const validator = require("validator");
//const test = validator.isEmail("foo@bar.com");
//console.log("test:", test);

//const validator = require("validator");
//const test = validator.isInt("100");
//console.log("test:", test);

//const validator = require("validator");
//const test = validator.isIP("58.224.243.199");
//console.log("test:", test);

//const  { v4: uuidv4 } = require("uuid");
//const random =  uuidv4();
//console.log("random", random);

//const chalk = require("chalk");
//const log = console.log;

//log(chalk.blue("Hello") + random + chalk.red("!"));

                                                 //Module package File

//const calculate = require('./hisob.js');

//const natija = calculate.kopaytirish(80, 20);
//console.log("Natija", natija);
//console.log("********");

//const natija2 = calculate.qoshish(80, 20);
//console.log("Natija", natija2);
//console.log("********");

const Account = require('./account');
Account.tellMeAboutClass();

console.log("======");

const myAccount = new Account("Mike", 200000, 9293982829938);
myAccount.giveMeDetails();

myAccount.makeDeposit(200000);

myAccount.withdrawMoney(140000);
