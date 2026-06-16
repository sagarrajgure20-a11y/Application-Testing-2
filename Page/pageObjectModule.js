
export class myFormPageObject{
    
    constructor(page){
        this.page = page;
        this.h1 = page.locator("h1");
        this.userName = page.getByPlaceholder("Enter username");
        this.userPass = page.getByPlaceholder("Enter password");
        this.education = page.getByLabel("Graduation");
        this.language = page.getByLabel("English");
    }
}