import {test, expect} from "@playwright/test"

test.beforeEach(async({page})=>{
    await page.goto("file:///D:/Application%20Testing%202/html/html/test1.html");
})

test("Verify the Tital, URL and Heading of the page - @smoke", async({page})=>{
    await expect(page).toHaveTitle("Registration Form");
    await expect(page).toHaveURL("file:///D:/Application%20Testing%202/html/html/test1.html");
    await expect(page.locator("h1")).toHaveText("User Registration Form");
});

test("Learning Textbox in playwright - @smoke", async({page})=>{
    await page.getByPlaceholder("Enter username").fill("Sagar Rajgure"); // To fill username
    await page.getByPlaceholder("Enter password").fill("Sagar@143");  // To fill password
    await page.getByLabel("Graduation").click();    // For Label
    await page.getByLabel("English").click();        // For Label
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