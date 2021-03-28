// searches for images issues
exports.images = function () {
  const replace = require("replace-in-file");
  const alasql = require("alasql");
  const fs= require("fs")

  console.log("searching for alt text: ");

  fs.writeFileSync("images.csv", "image,altText,filename\n");

  //set up the substitution
  const options = {
    files: 'playground/**/*.adoc',
    from: /image:(.*)\[(.*)\]/g,
    to: (...args) => {

      fs.appendFileSync("images.csv", args[1]+","+args[2]+","+args.pop() +"\n");
      return 'dummy';
    },
    countMatches: true,
    dry: true,
    };

  //perform the substitution

  try {
    const results = replace.sync(options);
    var res = alasql('SELECT * into CSV("results-images.csv") FROM ?',[results]);
    //console.log("Results:", results);
  } catch (error) {
    console.error("Error occurred:", error);
  }

  // return
  return Date();
};

// searches for links issues
exports.links = function () {
  const replace = require("replace-in-file");
  const alasql = require("alasql");
  const fs= require("fs")

  console.log("searching for links: ");

  fs.writeFileSync("links.csv", "link,descText,filename\n");

  //set up the substitution
  const options = {
    files: 'playground/**/*.adoc',
    from: /link:(.*)\[(.*)\]/g,
    to: (...args) => {

      fs.appendFileSync("links.csv", args[1]+","+args[2]+","+args.pop() +"\n");
      return 'dummy';
    },
    countMatches: true,
    dry: true,
    };

  //perform the substitution

  try {
    const results = replace.sync(options);
    var res = alasql('SELECT * into CSV("results-links.csv") FROM ?',[results]);
    //console.log("Results:", results);
  } catch (error) {
    console.error("Error occurred:", error);
  }

  // return
  return Date();
};

