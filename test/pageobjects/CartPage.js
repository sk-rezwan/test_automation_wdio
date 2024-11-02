class CartPage {
    get cartItems() { return $$('.cart_item'); }
    get checkoutBtn() { return $('#checkout'); }

    async proceedToCheckout() {
        await this.checkoutBtn.click();
    }
}

module.exports = new CartPage();