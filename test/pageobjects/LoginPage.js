class LoginPage {
    get userField() { return $('#user-name'); }
    get passField() { return $('#password'); }
    get loginBtn() { return $('#login-button'); }
    get errorMsg() { return $('.error-message-container'); }

    async open() {
        await browser.url('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.userField.setValue(username);
        await this.passField.setValue(password);
        await this.loginBtn.click();
    }
}

module.exports = new LoginPage();