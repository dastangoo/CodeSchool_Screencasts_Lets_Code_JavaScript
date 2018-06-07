(() => {
  
  const semver = require('semver');

  const packageJson = require('./package'),
        expectedVersion = packageJson.engines.node,
        actualVersion = process.version;


  desc("Default build");
  task("default", ["version"], () => {
    console.log("\n\nBUILD OK");
    console.log("Hello, I'm the default task.");
  });
  
  desc("Check Node Version");
  task("version", () => {
    console.log("Checking Node version: .");
    
    // if (actualVersion !== expectedVersion) {
    if (semver.neq(actualVersion, expectedVersion)) {
      // This is a Jake function
      fail(`Incorrect Node version: expected ${expectedVersion}, but was ${actualVersion}`);
    }
  });
  
})();