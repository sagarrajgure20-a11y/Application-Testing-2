import { Given, When, Then } from "@cucumber/cucumber";
import { chromium } from "playwright";

let browser;
let page;

Given("user navigate to {string}", async function(url){
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();
    await page.goto(url);
});

When("user enter {string} in {string} textbox", async function(data, dataBox){
    //page.locator("").fill("")
    console.log("")
})

When("user click on login button", async function(){
    console.log("")
})

When("user validate dashboard", async function(){
    console.log("")
})

When("user validate error msg {string}", async function(errorMsg){
    console.log("")
})