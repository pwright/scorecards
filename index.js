#!/usr/bin/env node
//var matchExt = require("match-extension");
var autosubs = require('./substitutions');
const exec = require("child_process").execSync;

const argv = require("yargs").command(
  "$0 <source> [test name]",
  "the default command",
  () => {},
  function ({ source, testname }) {
    console.log({ source, testname });
    try{
    //exec(`rm -r playground/*`, {});
    //exec(`mkdir playground/temp/`, {});
    //exec(`cp -r ${source} playground/temp/${source}`, {});
    }
    catch (e) {
      console.log("not able to copy")
    }
    switch (testname) {
      case 'accessibility':
        console.log('testing accessibility.');
        autosubs.accessibility();
        break;
      case 'Mangoes':
      case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      default:
        console.log(`Running all tests, because testname is ${testname}.`);
    }



  }
).argv;
