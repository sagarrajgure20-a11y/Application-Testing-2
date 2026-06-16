import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("file:///D:/Application%20Testing%202/html/html/test1.html");
});

test("Verify the Title, URI and the Heading of the page - @smoke", async ({ page }) => {
    await expect(page).toHaveTitle("Registration Form");
    await expect(page).toHaveURL("file:///D:/Application%20Testing%202/html/html/test1.html");
    await expect(page.locator("h1")).toHaveText("User Registration Form");
});

test("Learning textbox in playwright - @smoke", async ({ page }) => {
    await page.getByPlaceholder("Enter username").fill("user1");
    await page.locator("Enter password").fill("pass1");
    await page.getByLabel("12th").click();
    await page.locator("//label[text()='Languages']/..").getByLabel("English").click();
    await page.locator("input[name='gender']").nth(0).click();
    await page.locator("input[name='nationality']").nth(0).click();
});

test("Learning select dropdown Button - @smoke", async({page})=>{
    await page.locator("[id='country']").selectOption({ index:2}); 
}) 

test("Learning the frames - @smoke", async({page})=>{
    let frame1 = await page.frameLocator("[id='myframe']");
    await frame1.locator("[id='searchInput']").fill("Hello QA");
    await frame1.locator("button", {hasText:"Search"}).click();
})

test("Check Table data - @smoke", async({page})=>{
   let emmaOccupation = await page.locator("table").locator("tr").filter({hasText:"Emma"}).locator("td").nth(2).textContent();      
    // Locate the table + tr means rows + td means name of data    
    await expect (emmaOccupation).toBe("Doctor");
})