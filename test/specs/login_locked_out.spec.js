// login_locked_out.spec.js
const LoginPage = require('../pageobjects/LoginPage');

describe('Locked Out User Login', () => {
    it('should show an error message for locked_out_user', async () => {
        await LoginPage.open();
        await LoginPage.login('locked_out_user', 'secret_sauce');
        await expect(LoginPage.errorMsg).toHaveTextContaining('Sorry, this user has been locked out.');
    });
});