// converts single line markdown code examples to didact links
exports.accessibility = function () {
  const replace = require("replace-in-file");

  // get file to process

  console.log("processing: ");

  //set up the substitution
  const options = {
    files: 'playground/**/*.adoc',
    from: /image::.*[]/g,
    to: 'dummy',
    countMatches: true,
    dry: true,
    };

  //perform the substitution

  try {
    const results = replace.sync(options);
    console.log("Replacement results:", results);
  } catch (error) {
    console.error("Error occurred:", error);
  }

  // return
  return Date();
};

