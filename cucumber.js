// cucumber.js (Place this in the root of your project)

module.exports = {
  default: {
    // --- Essential Configurations ---

    // 1. Paths to your Feature Files:
    //    Tells Cucumber where to find your Gherkin (.feature) files.
    //    'features/**/*.feature' means look in the 'features' folder
    //    and any subfolders ('**') for files ending in '.feature'.
    paths: ["features/**/*.feature"],

    // 2. Paths to your Step Definitions and Hooks:
    require: [
      "step_definitions/**/*.ts", // <-- CORRECTED PATH
      // If you create other folders for hooks or support code, add their paths here too.
      // e.g., 'support/**/*.ts' // (Removed 'features/' prefix if support is also at root)
    ],

    // 3. Enable TypeScript Execution:
    //    Tells Cucumber to use 'ts-node' to run your .ts files directly.
    //    This is crucial for executing your TypeScript step definitions.
    requireModule: ["ts-node/register"],

    // --- Optional but Recommended ---

    // 4. Default Step Timeout:
    //    While we set this in the code using `setDefaultTimeout`,
    //    you *could* set a default timeout here in milliseconds.
    //    Setting it in code (like `setDefaultTimeout(60 * 1000)`) is often preferred
    //    as it keeps timeout logic closer to the test code itself.
    // timeout: 30000, // Example: 30 seconds

    // --- Optional Configurations for Reporting and Filtering ---

    // 5. Output Formatters:
    //    Define how test results are printed to the console or files.
    //    'progress-bar' is a common console reporter.
    //    'json:reports/cucumber_report.json' generates a JSON report file.
    /*
      format: [
        'summary', // Prints a summary at the end
        'progress-bar', // Shows a progress bar during execution
        '@cucumber/pretty-formatter', // Nicer console output
        'json:reports/cucumber_report.json' // Generate a JSON report file
      ],
      */

    // 6. Tags:
    //    Filter which scenarios to run based on tags in your .feature files.
    //    Example: 'not @ignore' runs all scenarios except those tagged with @ignore.
    //    Example: '@smoke or @regression' runs scenarios tagged with @smoke OR @regression.
    // tags: '', // By default, run all scenarios unless filtered by command line

    // --- Advanced (Less Common for Basic Setup) ---

    // 7. World Parameters:
    //    Pass configuration data to your Cucumber World context (this).
    // worldParameters: {
    //   browser: 'chromium',
    //   baseUrl: 'https://www.imdb.com'
    // },

    // 8. Parallel Execution (Experimental/Advanced):
    //    Run scenarios in parallel (requires careful state management).
    // parallel: 2, // Example: run tests using 2 worker processes
  },
  // You can define other profiles here if needed, e.g., for different environments
  // ci: { ... specific settings for Continuous Integration ... }
};
