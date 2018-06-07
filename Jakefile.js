(() => {
  
  const EXPECTED_NODE_VERSION = "v8.11.2";
  
  desc("Default build");
  task("default", ["version"], () => {
    console.log("\n\nBUILD OK");
    console.log("Hello, I'm the default task.");
  });
  
  desc("Check Node Version");
  task("version", () => {
    console.log("Checking Node version: .");
  
    const actualVersion = process.version;
    if (actualVersion !== EXPECTED_NODE_VERSION) {
      // This is a Jake function
      fail(`Incorrect Node version: expected ${EXPECTED_NODE_VERSION}, but was ${actualVersion}`);
    }
  });
  
})();