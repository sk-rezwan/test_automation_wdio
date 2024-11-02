const LoginPage = require('../pageobjects/LoginPage');
const InventoryPage = require('../pageobjects/InventoryPage');
const CartPage = require('../pageobjects/CartPage');
const CheckoutPage = require('../pageobjects/CheckoutPage');

describe('Performance Glitch User Purchase Flow', () => {
    it('should complete purchase with performance_glitch_user', async () => {
        await LoginPage.open();
        await LoginPage.login('performance_glitch_user', 'secret_sauce');
        await InventoryPage.resetApp();

        // Filter and add first item to cart
        await InventoryPage.sortBy('Name (Z to A)');
        await InventoryPage.addToCart(0);

        // Go to cart and checkout
        await CartPage.proceedToCheckout();
        await CheckoutPage.fillForm('Jane', 'Smith', '54321');
        await CheckoutPage.completeOrder();

        // Verify successful order
        await expect(CheckoutPage.orderMsg).toHaveTextContaining('THANK YOU FOR YOUR ORDER');

        await InventoryPage.resetApp();
        await InventoryPage.logout();
    });
});