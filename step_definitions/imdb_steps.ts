import {
  Given,
  When,
  Then,
  BeforeAll,
  AfterAll,
  Before,
  After,
  setDefaultTimeout,
} from "@cucumber/cucumber";
import { chromium, Browser, Page, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

// Set a default timeout for Cucumber steps (e.g., 60 seconds)
setDefaultTimeout(60 * 1000);

// Runs once before all features
BeforeAll(async () => {
  // Launch headed initially for easier debugging
  browser = await chromium.launch({ headless: false });
});

// Runs once after all features
AfterAll(async () => {
  await browser.close();
});

// Runs before each Scenario
Before(async function () {
  page = await browser.newPage();
});

// Runs after each Scenario
After(async () => {
  await page.close();
});

// --- Step Definitions ---

Given("I am on the IMDB homepage", async function () {
  await page.goto("https://www.imdb.com/");
});

When("I search for {string}", async function (movieTitle: string) {
  const searchBoxSelector = "#suggestion-search"; // Update if needed
  await page.locator(searchBoxSelector).fill(movieTitle);
  await page.locator(searchBoxSelector).press("Enter");
});

Then(
  "I should see {string} in the page title or main heading",
  async function (movieTitle: string) {
    const headingLocator = page.locator("h1");
    const titleRegex = new RegExp(movieTitle, "i"); // Case-insensitive check
    await expect(headingLocator).toContainText(titleRegex, { timeout: 10000 });
    // Optional: check page title too
    // await expect(page).toHaveTitle(titleRegex, { timeout: 10000 });
  }
);
