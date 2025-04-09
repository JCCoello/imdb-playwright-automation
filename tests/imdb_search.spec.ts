// Import the necessary parts from Playwright
// TypeScript uses the 'import' syntax
import { test, expect } from "@playwright/test";

// Define a test case. Give it a descriptive name.
test("Search for a movie on IMDB and check title", async ({ page }) => {
  // 'page' is the browser tab your robot controls

  // 1. Go to the IMDB homepage
  console.log("Navigating to IMDB...");
  await page.goto("https://www.imdb.com/");
  console.log("Page loaded.");

  // 2. Find the search bar and type a movie title
  const searchBoxSelector = "#suggestion-search"; // This selector might change!
  const movieTitle = "Inception";

  console.log(
    `Typing "${movieTitle}" into search box (${searchBoxSelector})...`
  );
  await page.locator(searchBoxSelector).fill(movieTitle);
  console.log("Typed successfully.");

  // 3. Press the Enter key to submit the search
  console.log("Pressing Enter...");
  await page.locator(searchBoxSelector).press("Enter");
  console.log("Search submitted.");

  // 4. Wait for the results page and check the title
  console.log("Checking page title...");
  // Use a robust locator targeting the specific movie link on results page
  const movieTitleLinkSelector = `a[href*='/title/tt1375666']`; // Example for Inception

  // Wait for the specific link to be visible
  await page
    .locator(movieTitleLinkSelector)
    .waitFor({ state: "visible", timeout: 10000 }); // Wait up to 10 seconds

  // Check the main heading (H1) contains the movie title (case-insensitive)
  await expect(page.locator("h1")).toContainText(/Inception/i, {
    timeout: 10000,
  });

  // Also verify the specific movie link itself is visible
  await expect(page.locator(movieTitleLinkSelector)).toBeVisible();

  console.log("Test completed successfully!");
});
