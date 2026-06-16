// Page Object Module - It is used for avoid repeated locators.

import {test, expect} from "@playwright/test";
import { myFormPageObject } from "../Page/pageObjectModule.js";

let formObject;

test.beforeEach(async({page})=>{

    formObject = new myFormPageObject(page);
    await page.goto("file:///D:/Application%20Testing%202/html/html/test1.html");
})

test("Verify the Tital, URL and Heading of the page - @smoke", async({page})=>{
    await expect(page).toHaveTitle("Registration Form");
    await expect(page).toHaveURL("file:///D:/Application%20Testing%202/html/html/test1.html");
    await expect(formObject.h1).toHaveText("User Registration Form");
});

test.only("Learning Textbox in playwright - @smoke", async({page})=>{
    await formObject.userName.fill("Sagar Rajgure"); // To fill username
    await formObject.userPass.fill("Sagar@143");  // To fill password
    await formObject.education.click();    // For Label
    await formObject.language.click();        // For Label
    // await page.locator("//label[text()='Languages']/..").getByLabel("Hindi").click();
    await page.locator("input[name='gender']").nth(0).click();
    await page.locator("input[name='nationality']").nth(0).click();
})

test("Select option from the dropdown - @smoke", async({page})=>{
    await page.locator("[id='country']").selectOption({label:"India"});
})

test("Open Dashboard - @smoke", async({page})=>{
    await page.goto("https://www.google.com/dashboard")
})

test("Entering text in the search texbox which is present in the frame - @smoke", async({page})=>{
    let frame1 = await page.frameLocator("[id='myframe']");
    await frame1.locator("[id='searchInput']").fill("Good Morning");
    await frame1.locator("button", {hasText:"Search"}).click();
})

test("Check the data from the table - @smoke", async({page})=>{
    let Occupation = await page.locator("table").locator("tr").filter({hasText:"Emma"}).locator("td").nth(2).textContent();
    await expect (Occupation).toBe("Doctor");
    await page.screenshot({ path: 'screenshots/test-result.png', fullPage: true });
})