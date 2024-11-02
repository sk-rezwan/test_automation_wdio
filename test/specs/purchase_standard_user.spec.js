const LoginPage = require('../pageobjects/LoginPage');
const InventoryPage = require('../pageobjects/InventoryPage');
const CartPage = require('../pageobjects/CartPage');
const CheckoutPage = require('../pageobjects/CheckoutPage');

describe('Standard User Purchase Flow', () => {
    it('should complete purchase with standard_user', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.resetApp();

        // Add three items to cart
        await InventoryPage.addToCart(0);
        await InventoryPage.addToCart(1);
        await InventoryPage.addToCart(2);

        // Go to cart and checkout
        await CartPage.proceedToCheckout();
        await CheckoutPage.fillForm('John', 'Doe', '12345');
        await CheckoutPage.completeOrder();

        // Verify successful order
        await expect(CheckoutPage.orderMsg).toHaveTextContaining('THANK YOU FOR YOUR ORDER');

        await InventoryPage.resetApp();
        await InventoryPage.logout();
    });
});