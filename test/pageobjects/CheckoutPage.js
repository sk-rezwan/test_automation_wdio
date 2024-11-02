class CheckoutPage {
    get firstName() { return $('#first-name'); }
    get lastName() { return $('#last-name'); }
    get postalCode() { return $('#postal-code'); }
    get continueBtn() { return $('#continue'); }
    get finishBtn() { return $('#finish'); }
    get orderMsg() { return $('.complete-header'); }

    async fillForm(firstName, lastName, postalCode) {
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.postalCode.setValue(postalCode);
        await this.continueBtn.click();
    }

    async completeOrder() {
        await this.finishBtn.click();
    }
}

module.exports = new CheckoutPage();
