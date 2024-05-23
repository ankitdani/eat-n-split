import { test, expect } from "@playwright/test";

test("Add a friend", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.getByRole("button", { name: "Add friend" }).click();

  await page.getByRole("textbox").first().click();

  await page.getByRole("textbox").first().fill("John");
  await page.getByRole("button", { name: "Add" }).click();
  await expect(
    page.locator("li").filter({ hasText: "JohnYou and John are" })
  ).toBeVisible();
  await page
    .locator("li")
    .filter({ hasText: "JohnYou and John are" })
    .getByRole("button")
    .click();
  await page.getByRole("textbox").first().click();
  await page.getByRole("textbox").first().fill("120");
  await page.getByRole("textbox").nth(1).click();
  await page.getByRole("textbox").nth(1).fill("70");
  await page.getByRole("combobox").selectOption("friend");
  await page.getByRole("button", { name: "Add", exact: true }).click();
});
