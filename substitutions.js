// searches for accessibility issues
exports.accessibility = function () {
  const replace = require("replace-in-file");
  const alasql = require("alasql");

  // get file to process

  console.log("processing: ");

  //set up the substitution
  const options = {
    files: 'playground/**/*.adoc',
    from: /image::.*\[\]/g,
    to: 'dummy',
    countMatches: true,
    dry: true,
    };

  //perform the substitution

  try {
    const results = replace.sync(options);
    var res = alasql('SELECT * into CSV("output.csv") FROM ? where numMatches >0',[results]);


    console.log("Results:", results);
  } catch (error) {
    console.error("Error occurred:", error);
  }

  // return
  return Date();
};

// searches for accessibility issues
exports.wordcount = function () {
  const replace = require("replace-in-file");
  const alasql = require("alasql");

  // get file to process

  console.log("processing: ");

  //set up the substitution

  const regex = new RegExp('^----.*?^----', 'mgs');
  const options = {
    files: 'playground/**/*.adoc',
    from: regex,
    to: '',
    countMatches: true,
    //dry: true,
    };

  //perform the substitution

  try {
    const results = replace.sync(options);
    var res = alasql('SELECT * into CSV("output.csv") FROM ? where numMatches >0',[results]);


    console.log("Results:", results);
  } catch (error) {
    console.error("Error occurred:", error);
  }

  // return
  return Date();
};

