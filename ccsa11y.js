console.log("searching for no alt text: ");

//set up the substitution
const options = {
  files: 'playground/**/*.adoc',
  from: /image:.*\[\]/g,
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
