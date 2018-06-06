(() => {
  
  // Default Task
  
  desc("Default build");
  task("default", () => {
    console.log("\n\nBUILD OK");
    console.log("Hello, I'm the default task.");
  });
  
  // Google Task
  // desc("Pure ridiculosity");
  // task("google", () => {
  //   console.log("Hello, I'm the google task.");
  // });
})();