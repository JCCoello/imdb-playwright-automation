// step_definitions/world.ts
import { IWorldOptions, World, setWorldConstructor } from "@cucumber/cucumber";
import { Browser, Page } from "@playwright/test"; // Import Playwright types

// Define a custom World class that can hold browser and page instances
export class CustomWorld extends World {
  browser: Browser | null = null; // Property to hold the browser instance
  page: Page | null = null; // Property to hold the page instance

  // Constructor is standard for Cucumber World
  constructor(options: IWorldOptions) {
    super(options);
  }
}

// Tell Cucumber to use our CustomWorld for the 'this' context in steps/hooks
setWorldConstructor(CustomWorld);
