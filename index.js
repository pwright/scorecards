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
    exec(`mkdir playground/`, {});
    
    }
    catch (e) {
      
      console.log("playground exists? deleting and recreating")
      exec(`rm -r playground/`, {});
      exec(`mkdir playground/`, {});
      
    }
    exec(`cp -r ${source} playground/`, {});
    switch (testname) {
      case 'accessibility':
        console.log('testing accessibility.');
        autosubs.accessibility();
        break;
      case 'wordcount':
        console.log('creates docs that work better for wc.');
        autosubs.wordcount();
        break;

      case 'titles':
        console.log('creating csv of titles.');
        break;
      default:
        console.log(`Running all tests, because testname is ${testname}.`);
    }



  }
).argv;
